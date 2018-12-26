function listenForClicks() {
  document.addEventListener("click", (e) => {
    
	//Send message
	function download(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "down"
        });
    }
    function insert(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "ins"
        });
    }
	
	//Call respective function
    function reportError(error) {
      console.error(`Could not beastify: ${error}`);
    }
    if (e.target.classList.contains("down")) {
    	  browser.tabs.query({active: true, currentWindow: true})
        .then(download)
        .catch(reportError);
    }
    else if (e.target.classList.contains("ins")) {
    	browser.tabs.query({active: true, currentWindow: true})
    	.then(insert)
    	.catch(reportError);
   	}
  });

}

function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to execute content script: ${error.message}`);
}

browser.tabs.executeScript({file: "/content_scripts/srhelper.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);