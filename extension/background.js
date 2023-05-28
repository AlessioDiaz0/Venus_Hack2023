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