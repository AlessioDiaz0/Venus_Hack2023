
async function translateText(word_selected, base_language) {
    try {
        const translation = await makeTranslationAPIRequest(word_selected, base_language);
        
        return translation;
    } catch (error) {
        console.error("error", error);
        throw error;
    }
}

translateText().then(data => {
	console.log(data);
});

const textElements = document.querySelectorAll("*:not(script):not(style):not(link):not(meta):not(title):not(path):not(svg):not([hidden]):not([aria-hidden='true'])");
const popup = document.createElement("div");

document.addEventListener("mouseup", async function(event) {

    const selectedText = window.getSelection().toString().trim();

    if (selectedText.length >= 1) {
            // Perform your desired action here
        console.log("Highlighted text:", selectedText);

        // Modify the selected text
        const modifiedText = selectedText
        console.log(modifiedText)

        //popup
        popup.textContent = "Translated: " + selectedText;
        popup.style.position = "fixed";
        popup.style.top = event.clientY + "px";
        popup.style.left = event.clientX + "px";
        popup.style.backgroundColor = "purple";
        popup.style.color = "white";
        popup.style.font = "Nunito";
        popup.style.padding = "10px";
        popup.style.border = "1px solid black";
        popup.style.zIndex = "9999";
        popup.style.userSelect = 'none';
        popup.style.MozUserSelect = 'none';
        popup.style.msUserSelect = 'none';

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

// Add the event listener to each text-based element
// textElements.forEach(element => {
//     element.addEventListener("mouseover", handleHoverEvent);
// });