/*chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		if(document.querySelectorAll("img")[0].src.match(/sqrl/)){
            //we have an image who's source contains sqrl
            //show icon
        }else{
            //hide icon
            chrome.pageAction.hide(integer tabId)
            console.log("lets hide the tab");
        }
		// ----------------------------------------------------------

	}
	}, 10);
});
*/
var regex = /sqrl/
//if has an image with the data-sqrl attribute
if(document.querySelectorAll("img[data-sqrl]").length){
    chrome.extension.sendMessage({}, function(response) {});
}else{
    var images = document.querySelectorAll("img")
    for(var i=0;i<images.length;i++){
        if (regex.test(images[i].src)) {
          // The regular expression produced a match, so notify the background page.
          chrome.extension.sendMessage({}, function(response) {});
          break;
        }
    }
}