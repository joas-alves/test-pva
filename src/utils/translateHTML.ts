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

    // Extract content from higher-level blocks for better translation context
    const contentBlocks = extractContentBlocks(tempDiv);
    
    if (contentBlocks.length === 0) {
      return html;
    }

    // Prepare text for translation with placeholder markers
    const { textsToTranslate, placeholderMap } = prepareForTranslation(contentBlocks);
    
    if (textsToTranslate.length === 0) {
      return html;
    }

    // Call translation API
    const response = await axios.post("http://localhost:3000/api/translate", {
      texts: textsToTranslate,
      targetLanguage: targetLang,
    });

    // Apply translations and rebuild HTML
    if (response.data && response.data.translations) {
      applyTranslations(contentBlocks, response.data.translations, placeholderMap);
    }

    return tempDiv.innerHTML;
  } catch (error) {
    console.error("Translation error:", error);
    return html; // Return original if translation fails
  }
};

// Extract content from higher-level semantic blocks
function extractContentBlocks(rootElement: HTMLElement): Array<{
  element: HTMLElement;
  textContent: string;
  children: Array<Node>;
}> {
  const blockElements = [
    "h1", "h2", "h3", "h4", "h5", "h6", "p", "li", "td", "th", 
    "figcaption", "blockquote", "dd", "dt"
  ];
  
  const blocks: Array<{
    element: HTMLElement;
    textContent: string;
    children: Array<Node>;
  }> = [];
  
  // Find all block-level elements that contain text
  blockElements.forEach(tag => {
    const elements = rootElement.querySelectorAll(tag);
    elements.forEach(el => {
      const text = el.textContent?.trim();
      if (text) {
        blocks.push({
          element: el as HTMLElement, 
          textContent: text,
          children: Array.from(el.childNodes)
        });
      }
    });
  });
  
  // Also handle standalone text nodes in divs or spans when they're not part of blocks
  const standaloneTextContainers = rootElement.querySelectorAll('div, span');
  standaloneTextContainers.forEach(container => {
    // Only include containers that have direct text nodes and aren't inside a block we already captured
    const hasDirectText = Array.from(container.childNodes).some(
      node => node.nodeType === Node.TEXT_NODE && node.textContent?.trim()
    );
    
    const isInCapturedBlock = blockElements.some(tag => 
      container.closest(tag) !== null
    );
    
    if (hasDirectText && !isInCapturedBlock) {
      blocks.push({
        element: container as HTMLElement,
        textContent: container.textContent?.trim() || "",
        children: Array.from(container.childNodes)
      });
    }
  });
  
  return blocks;
}

// Prepare text for translation by replacing HTML elements with placeholders
function prepareForTranslation(contentBlocks: Array<{
  element: HTMLElement;
  textContent: string;
  children: Array<Node>;
}>) {
  const textsToTranslate: string[] = [];
  const placeholderMap = new Map<string, Node>();
  
  contentBlocks.forEach(block => {
    let preparedText = "";
    let placeholderIndex = 0;
    
    // Function to process a node and its children
    const processNode = (node: Node): string => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent || "";
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const placeholder = `[HTML_ELEMENT_${placeholderIndex++}]`;
        placeholderMap.set(placeholder, node);
        
        // For elements that might break sentence flow (like <br>), add a space
        if ((node as HTMLElement).tagName === 'BR') {
          return ` ${placeholder} `;
        }
        
        // For inline elements, we want to keep their content in the sentence
        const inlineContent = (node as HTMLElement).textContent || "";
        return `${placeholder}${inlineContent}${placeholder}`;
      }
      return "";
    };
    
    // Process all child nodes to build the text with placeholders
    block.children.forEach(child => {
      preparedText += processNode(child);
    });
    
    // Normalize whitespace and add to texts to translate
    preparedText = preparedText.replace(/\s+/g, ' ').trim();
    if (preparedText) {
      textsToTranslate.push(preparedText);
    }
  });
  
  return { textsToTranslate, placeholderMap };
}

// Apply translations and reconstruct the HTML
function applyTranslations(
  contentBlocks: Array<{
    element: HTMLElement;
    textContent: string;
    children: Array<Node>;
  }>, 
  translations: string[],
  placeholderMap: Map<string, Node>
) {
  contentBlocks.forEach((block, index) => {
    if (index < translations.length) {
      const translation = translations[index];
      
      // Clear the original content
      while (block.element.firstChild) {
        block.element.removeChild(block.element.firstChild);
      }
      
      // Replace placeholders with original elements
      let translatedContent = translation;
      placeholderMap.forEach((node, placeholder) => {
        // Check for opening and closing pairs of the same placeholder
        const regex = new RegExp(`${placeholder}(.*?)${placeholder}`, 'g');
        translatedContent = translatedContent.replace(regex, (match, content) => {
          const clonedNode = node.cloneNode(true) as HTMLElement;
          
          // Remove any existing content and add the translated content
          while (clonedNode.firstChild) {
            clonedNode.removeChild(clonedNode.firstChild);
          }
          
          if (content.trim()) {
            clonedNode.textContent = content.trim();
          }
          
          const tempWrapper = document.createElement('div');
          tempWrapper.appendChild(clonedNode);
          return tempWrapper.innerHTML;
        });
        
        // Replace single placeholders (like <br>)
        translatedContent = translatedContent.replace(placeholder, () => {
          const clonedNode = node.cloneNode(true);
          const tempWrapper = document.createElement('div');
          tempWrapper.appendChild(clonedNode);
          return tempWrapper.innerHTML;
        });
      });
      
      // Set the new HTML
      block.element.innerHTML = translatedContent;
    }
  });
}