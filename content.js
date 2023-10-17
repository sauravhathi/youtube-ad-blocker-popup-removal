console.log('👨‍💻 Author: Saurav Hathi \n🌟 GitHub: https://github.com/sauravhathi \n🚀Linkedin: https://www.linkedin.com/in/sauravhathi');

// code div.ace_content  ace_layer ace_text-layer

async function copyTextToClipboard(text) {
  if (!text) {
    return Promise.reject("Text not found");
  }

  return navigator.clipboard.writeText(text)
    .then(() => 'Copied to clipboard!')
    .catch((error) => {
      throw new Error(`Error copying to clipboard: ${error}`);
    });
}

/**
 * Watches for a specific element and copies its text to clipboard on double click.
 * @function
 * @returns {void}
 */
function watchForElement() {
  const targetSelector = 'div[aria-labelledby="each-type-question"]';

  /**
   * Handles the double click event on the target element and copies its text to clipboard.
   * @function
   * @param {Event} event - The double click event.
   * @returns {void}
   */
  const handleDoubleClick = (event) => {
    const targetElement = event.target.closest(targetSelector);
    if (targetElement) {
      const cleanedText = targetElement.innerText.replace(/\n{3,}/g, '\n');
      copyTextToClipboard(cleanedText)
        .then((message) => {
          console.log(message);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  document.addEventListener('dblclick', handleDoubleClick);

  const observer = new MutationObserver((mutationsList, observer) => {
    if (document.querySelector(targetSelector)) {
      observer.disconnect();
    }
  });
  observer.observe(document, { childList: true, subtree: true });
}

watchForElement();