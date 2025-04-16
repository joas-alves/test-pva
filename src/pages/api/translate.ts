import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// Define the response type for our API
type TranslationResponse = {
  translations?: string[];
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TranslationResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { texts, targetLanguage } = req.body;

    // Validate input
    if (!Array.isArray(texts) || !targetLanguage) {
      return res.status(400).json({ error: 'Invalid input. texts must be an array and targetLanguage must be provided.' });
    }

    // Skip translation for English
    if (targetLanguage === 'en-UK' || targetLanguage === 'en-US' || targetLanguage === 'global') {
      return res.status(200).json({ translations: texts });
    }

    // Map locale codes to Google Translate language codes
    const languageMap: Record<string, string> = {
      'de': 'de', // German
      'fr': 'fr', // French
      'nl': 'nl', // Dutch
      'es': 'es', // Spanish
      // Add more languages as needed
    };

    // Extract the base language code
    const baseLanguage = targetLanguage.split('-')[0].toLowerCase();
    const googleLanguageCode = languageMap[baseLanguage] || baseLanguage;

    // Translate each text using the free Google Translate URL method
    const translations = await Promise.all(
      texts.map(async (text) => {
        if (!text.trim()) return text;
        
        try {
          const encodedText = encodeURIComponent(text);
          
          // Using the free Google Translate URL
          // This is the URL format Google Translate uses for its website translations
          const url = `https://translate.google.com/translate_a/single?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1&hl=en-US&ie=UTF-8&oe=UTF-8&inputm=2&otf=2&iid=1dd3b944-fa62-4b55-b330-74909a99969e&sl=en&tl=${googleLanguageCode}&q=${encodedText}`;
          
          const response = await axios.get(url, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
              'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
              'Accept-Language': 'en-US,en;q=0.5',
              'Referer': 'https://translate.google.com/'
            }
          });
          
          // Parse the translation from the response
          if (response.data && response.data.sentences && Array.isArray(response.data.sentences)) {
            let translatedText = '';
            for (const sentence of response.data.sentences) {
              if (sentence.trans) {
                translatedText += sentence.trans;
              }
            }
            return translatedText || text;
          }
          
          // Fallback to the simpler API if the first method fails
          if (!response.data || !response.data.sentences) {
            const simpleUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${googleLanguageCode}&dt=t&q=${encodedText}`;
            const simpleResponse = await axios.get(simpleUrl);
            
            if (simpleResponse.data && Array.isArray(simpleResponse.data[0])) {
              let translatedText = '';
              for (const part of simpleResponse.data[0]) {
                if (Array.isArray(part) && part[0]) {
                  translatedText += part[0];
                }
              }
              return translatedText || text;
            }
          }
          
          return text; // Fallback to original text
        } catch (error) {
          console.error('Error translating text:', error);
          
          // Try the simpler API as a last resort
          try {
            const encodedText = encodeURIComponent(text);
            const simpleUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${googleLanguageCode}&dt=t&q=${encodedText}`;
            const simpleResponse = await axios.get(simpleUrl);
            
            if (simpleResponse.data && Array.isArray(simpleResponse.data[0])) {
              let translatedText = '';
              for (const part of simpleResponse.data[0]) {
                if (Array.isArray(part) && part[0]) {
                  translatedText += part[0];
                }
              }
              return translatedText || text;
            }
          } catch (secondError) {
            console.error('Second attempt at translation failed:', secondError);
          }
          
          return text; // Return original text on error
        }
      })
    );

    return res.status(200).json({ translations });
  } catch (error) {
    console.error('Translation API error:', error);
    return res.status(500).json({ error: 'Translation service error' });
  }
} 