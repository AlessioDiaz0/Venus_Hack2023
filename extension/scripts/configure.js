// Imports the Google Cloud client library

const fullPath = await import.meta.resolve("@google-cloud/translate");
const path = fullPath?.match(/(\/node_modules.*)/)[0];
console.log(path);

// import translate from '@google-cloud/translate';
// const {Translate} = require('@google-cloud/translate').v2;
// console.log("tttttt");

chrome.runtime.onConnect.addListener(async () => {
    console.log("connected");
});

// Creates a client
const {Translate} = require('@google-cloud/translate').v2;

// Instantiates a client
const translate = new Translate({projectId});

async function quickStart() {
  // The text to translate
  const text = 'Hello, world!';

  // The target language
  const target = 'ru';

  // Translates some text into Russian
  const [translation] = await translate.translate(text, target);
  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);
}

quickStart();
translateTextSample("a sentence", "es")

const text = 'The text to translate, e.g. Hello, world!';
const target = 'The target language, e.g. ru';

function translateText() {

  const apiKey = 'AIzaSyAqtKw1PdVUCwi3dBOgotZcVFCAf3x75xk'; // Replace with your Google Translate API key

  // Construct the API request URL
  const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  // Create the request payload
  const payload = {
    q: text,
    target: target,
  };

  // Send a POST request to the Google Translate API
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the API response
      const translations = data.data.translations;
      console.log('Translations:');
      translations.forEach((translation, i) => {
        console.log(`${text[i]} => (${target}) ${translation.translatedText}`);
      });
    })
    .catch((error) => {
      console.error('1 Error:', error);
    });
    console.log("translateText has been called!")
}

// translateText();
console.log("something for me to see")
const textElements = document.querySelectorAll("*:not(script):not(style):not(link):not(meta):not(title):not(path):not(svg):not([hidden]):not([aria-hidden='true'])");
const popup = document.createElement("div");

document.addEventListener("mouseup", async function(event) {
    const selectedText = window.getSelection().toString().trim();

    if (selectedText.length >= 1) {
            // Perform your desired action here
        console.log("Highlighted text:", selectedText);

        // Modify the selected text
        // const modifiedText = selectedText.toUpperCase(); // Example modification, change as needed
        // const modifiedText = await translateText(selectedText, "it")
        // const modifiedText = "something";
        // console.log(modifiedText);
        // const modifiedText = selectedText;
        // const modifiedText = translateTextSample(selectedText, 'es')
        const modifiedText = selectedText

        // popup.textContent = "Selected text: " + selectedText;
        popup.textContent = "Selected text: " + selectedText;
        // translateTextSample(selectedText, 'es')

        popup.style.position = "fixed";
        popup.style.top = event.clientY + "px";
        popup.style.left = event.clientX + "px";
        popup.style.backgroundColor = "white";
        popup.style.padding = "10px";
        popup.style.border = "1px solid black";
        popup.style.zIndex = "9999";
        popup.style.userSelect = 'none';
        popup.style.MozUserSelect = 'none';
        popup.style.msUserSelect = 'none';

        // Create a range object from the current selection
        const selection = window.getSelection(); const range = selection.getRangeAt(0);

        // Create a text node with the modified text
        const modifiedTextNode = document.createTextNode(modifiedText);

        // Replace the selected text with the modified text node
        range.deleteContents();
        range.insertNode(modifiedTextNode);

        // Adjust the selection to encompass the modified text
        range.selectNode(modifiedTextNode);
        selection.removeAllRanges();
        selection.addRange(range);

        document.body.appendChild(popup);
        //when you unselect the selection we want to delete the popup
    }
});

document.addEventListener("mousedown", function(event) {
    if (popup && !popup.contains(event.target)) {
        popup.parentNode.removeChild(popup);
        popup = null;
    }
});


// Define the function to be executed when the hover event occurs
function handleHoverEvent(event) {
    // Perform your desired action here
    console.log("Hover event occurred!");
    console.log("Element Text:", event.target.textContent);
    // You can modify the DOM, show a tooltip, update CSS, etc.
    event.target.textContent = "New Text";
    console.log("here")
}

console.log("xxxxx");

