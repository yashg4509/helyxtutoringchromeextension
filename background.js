chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    let clippings = [];
    chrome.storage.sync.get("list", function(result) {
        if(request.selection && result.list) {
            clippings = [...result.list, request.selection];
        } else if (result.list) {
            clippings = [...result.list];
        } else {
            clippings = [request.selection];
        }
    });
});