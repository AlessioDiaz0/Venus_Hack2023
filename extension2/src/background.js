'use strict';

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.type === 'GREETINGS') {
//     const message = `Hi ${
//       sender.tab ? 'Con' : 'Pop'
//     }, my name is Bac. I am from Background. It's great to hear from you.`;

//     // Log message coming from the `request` parameter
//     console.log(request.payload.message);
//     // Send a response message
//     sendResponse({
//       message,
//     });
//   }
// });


// Creates a client
import { v2 } from '@google-cloud/translate';
const { Translate } = v2;

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

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    
    if (request.message === 'get_auth_token') {
        console.log("something gggg");
        chrome.identity.getAuthToken({ interactive: true }, function (token) {
            console.log(token);
        });
}});

chrome.identity.onSignInChanged.addListener(function (account_id, signedIn) {
    if (signedIn) {
        console.log("signed in")
        user_signed_in = true;
    } else {
        console.log("not signed in")
        user_signed_in = false;
    }
});