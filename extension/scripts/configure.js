
async function makeTranslationAPIRequest(word_selected, base_language) {
	const res = await fetch("https://libretranslate.com/translate", {
		method: "POST",
		body: JSON.stringify({
			q: word_selected,
			source: "auto",
			target: base_language,
			format: "text",
            api_key: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
		}),
		headers: { "Content-Type": "application/json" }
	});

	const data = await res.json(); 
	//console.log(data); print out the out come
	return data;
}

makeTranslationAPIRequest().then(data => {
	console.log(data);
});

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

document.addEventListener("mouseup", async function(event) {
    const selectedText = window.getSelection().toString().trim();

    if (selectedText.length >= 1) {
            // Perform your desired action here
        console.log("Highlighted text:", selectedText);

        // Modify the selected text
        // const modifiedText = selectedText.toUpperCase(); // Example modification, change as needed
        const modifiedText = await translateText(selectedText, "it")
        console.log(modifiedText)

        //popup
        const popup = document.createElement("div");
        popup.textContent = "Selected text: " + selectedText;
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
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);

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

// Add the event listener to each text-based element
// textElements.forEach(element => {
//     element.addEventListener("mouseover", handleHoverEvent);
// });

