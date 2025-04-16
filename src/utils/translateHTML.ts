import axios from "axios";
export const translateHtmlContent = async (
  html: string,
  targetLang: string
): Promise<string> => {
  if (
    !html ||
    !targetLang ||
    targetLang === "en-UK" ||
    targetLang === "en-US" ||
    targetLang === "global"
  ) {
    return html;
  }

  try {
    // Create a temporary div to parse the HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    // Extract text nodes and their positions
    const textNodes: { node: Text; text: string }[] = [];
    const extractTextNodes = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent?.trim();
        if (text) {
          textNodes.push({ node: node as Text, text });
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        node.childNodes.forEach((child) => extractTextNodes(child));
      }
    };

    extractTextNodes(tempDiv);

    // If no text nodes to translate, return original
    if (textNodes.length === 0) {
      return html;
    }

    // Extract just the text content to translate (ignore empty or whitespace-only texts)
    const textsToTranslate = textNodes
      .map((item) => item.text)
      .filter((text) => text.trim().length > 0);

    if (textsToTranslate.length === 0) {
      return html;
    }

    // Call translation API
    const response = await axios.post("http://localhost:3000/api/translate", {
      texts: textsToTranslate,
      targetLanguage: targetLang,
    });

    // Replace original text with translations
    if (response.data && response.data.translations) {
      // Keep track of which text nodes we've actually translated
      let translationIndex = 0;

      for (let i = 0; i < textNodes.length; i++) {
        const node = textNodes[i];
        if (node.text.trim().length > 0) {
          // Only replace text nodes that have actual content
          const translation = response.data.translations[translationIndex++];
          if (translation) {
            // Preserve any leading/trailing whitespace from the original text
            const originalText = node.node.textContent || "";
            const leadingWhitespace = originalText.match(/^\s*/)?.[0] || "";
            const trailingWhitespace = originalText.match(/\s*$/)?.[0] || "";

            node.node.textContent =
              leadingWhitespace + translation + trailingWhitespace;
          }
        }
      }
    }

    return tempDiv.innerHTML;
  } catch (error) {
    console.error("Translation error:", error);
    return html; // Return original if translation fails
  }
};