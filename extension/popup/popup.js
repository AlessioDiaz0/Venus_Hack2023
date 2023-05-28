
window.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('flashButton');
    link.addEventListener('click', function() {
        var newURL = "http://stackoverflow.com/";
        chrome.tabs.create({ url: newURL });
    });
});
window.addEventListener('DOMContentLoaded', function() {
    var loginBtn = document.getElementById('loginButton');
    loginBtn.addEventListener('click', async () => {
        const response = await chrome.runtime.sendMessage({message:"get_auth_token"});

    })
});
    
    
// document.getElementById("loginButton").addEventListener('click', () => {
//     const p = document.createElement("p");
//     p.innerText = "clicked";
//     document.body.appendChild(p);

//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, 
//             {
//                 message: "get_auth_token",
//                 textToFill: "some text" 
//             }, function(response) {})
//     })
// })


// chrome.tabs.sendMessage(tab.id, {message: "hello"}, () => {
            //     if (chrome.runtime.lastError) {
            //         console.log("err: " + chrome.runtime.lastError);
            //         chrome.scripting.executeScript({target: {
            //             tabId: tab.id
            //         }, files: ['scripts/configure.js']}).then(() => {
            //             chrome.tabs.sendMessage(tab.id, {message: "HI"})
            //         }
            // )}