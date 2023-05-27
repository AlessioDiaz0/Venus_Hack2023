//word_selected: is the word to be translated to the base_language
//base_language: is the default language set on the user google account


async function makeTranslationAPIRequest(word_selected, base_language) {
	const res = await fetch("https://libretranslate.com/translate", {
		method: "POST",
		body: JSON.stringify({
			q: "word_selected",
			source: "auto",
			target: "base_language",
			format: "text",
		}),
		headers: { "Content-Type": "application/json" }
	});

	const data = await response.json(); 
	//console.log(data); print out the out come
	return data;
}

makeTranslationAPIRequest().then(data => {
	console.log(data);
  });