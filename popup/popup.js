window.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('flashButton');
    link.addEventListener('click', function() {
        var newURL = "http://stackoverflow.com/";
        chrome.tabs.create({ url: newURL });
    });
});