'use strict';

// Content script file will run in the context of web page.
// With content script you can manipulate the web pages using
// Document Object Model (DOM).
// You can also pass information to the parent extension.

// We execute this script by making an entry in manifest.json file
// under `content_scripts` property

// For more information on Content Scripts,
// See https://developer.chrome.com/extensions/content_scripts

// Log `title` of current active web page
// Imports the Google Cloud client library

function request_handler() {
    console.log("log", url)
}
chrome.runtime.onConnect.addListener(() => {
    console.log("connected");
});

const text = 'The text to translate, e.g. Hello, world!';
const target = 'The target language, e.g. ru';


// translateText();
console.log("something for me to see")
const textElements = document.querySelectorAll("*:not(script):not(style):not(link):not(meta):not(title):not(path):not(svg):not([hidden]):not([aria-hidden='true'])");
// const popup = document.createElement("div");
var popup = null
var bool = false
document.addEventListener("mouseup", async function(event) {
    // var selectedText = window.getSelection().toString().trim();
    var selectedText = "";

    if (popup == null) {
        selectedText =  window.getSelection().toString().trim();
    } 
    console.log("selected text is : ", selectedText)

    if (selectedText.length >= 1 && popup == null) {
            // Perform your desired action here
            bool = true
        popup = document.createElement("div")
        document.removeEventListener("mousedown", popup)
        
        // document.removeEventListener("mouseup", popup)
        console.log("Highlighted text:", selectedText);
        let apiCall = new XMLHttpRequest();
        apiCall.open("GET", `https://api.dictionaryapi.dev/api/v2/entries/en/${selectedText}`);
        selectedText = "";
        apiCall.send();
        apiCall.onload = async () => {
            const response = await JSON.parse(apiCall.response);
            const definition = await response[0].meanings[0].definitions[0].definition;
            const modifiedText = await definition; // Set the variable 'modifiedText' with the definition value
            console.log(modifiedText)
            popup.textContent = "Definition: " + modifiedText 
            + "[ " + response[0].phonetic + "]";
        const button = document.createElement("button");
        button.textContent = "Save Me";
        button.style.backgroundColor = "orange";
        button.style.color = "white";
        button.style.padding = "5px 5px";
        button.style.border = "none";
        button.style.marginTop = "25px";
        button.id = "saveButton";
        popup.appendChild(button);

        // Add a click event listener to the button
        button.addEventListener("click", async (savedWord) => {
            // Perform your desired action when the button is clicked
            console.log("Button clicked!");
            //pass savedWord to the user's database
            let request = new XMLHttpRequest();
            request.open("GET", `https://firestore.googleapis.com/v1/projects/translingo-8181b/databases/(default)/documents`);
            request.send();
            request.onload = async () => {
                const response = await JSON.parse(request.response);
                console.log(response);
            }

            document.removeEventListener("mouseup", popup)
            popup.remove();

            //ckl function to save on user's database
        });
        };
        popup.style.position = "fixed";
        popup.style.top = (event.clientY + 15) + "px";
        popup.style.left = event.clientX + "px";
        popup.style.backgroundColor = "purple"; 
        popup.style.color = "white";
        popup.style.font = "Nunito";
        popup.style.padding = "40px";
        popup.style.border = "1px solid black";
        popup.style.zIndex = "9999";
        popup.style.userSelect = 'none';
        popup.style.MozUserSelect = 'none';
        popup.style.display = "flex";
        popup.style.msUserSelect = 'none';
        popup.style.justifyContent = "center";
        popup.style.flexDirection = "column";
        popup.style.alignItems = "center";


        // Create a range object from the current selection
        // const selection = window.getSelection();
        //  const range = selection.getRangeAt(0);
        document.body.appendChild(popup);
        //when you unselect the selection we want to delete the popup
    }
});

document.addEventListener("mousedown", function(event) {
    if (popup && !popup.contains(event.target) && event.target.id != "saveButton") {
        popup.parentNode.removeChild(popup);
        popup = null;
    } else if (popup && popup.contains(event.target) && event.target.id != "saveButton") { 
        popup.parentNode.removeChild(popup);
        popup = null;
        //we're supposed to include the function where we're suppoed to save the data into the database
    }
});

// popup.appendChild(button);
// document.body.appendChild(popup);

// Define the function to be executed when the hover event occurs
function handleHoverEvent(event) {
    // Perform your desired action here
    console.log("Hover event occurred!");
    console.log("Element Text:", event.target.textContent);
    // You can modify the DOM, show a tooltip, update CSS, etc.
    event.target.textContent = "New Text";
    console.log("here")
}





