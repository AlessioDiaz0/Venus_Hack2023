async function translateText(word_selected) {
	const res = await fetch("https://libretranslate.com/translate", {
		method: "POST",
		body: JSON.stringify({
			q: "word_selected",
			source: "auto",
			target: "en", //Change 'en' to a variable (language selected by user)
			format: "text",
			api_key: ""
		}),
		headers: { "Content-Type": "application/json" }
	});

	const data = await response.json(); 
	//console.log(data); print out the out come
	return data;
}

translateText().then(data => {
	console.log(data);
  });