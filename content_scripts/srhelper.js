var progscript = document.createElement('script');
progscript.src = browser.extension.getURL('content_scripts/comm.js');
document.head.appendChild(progscript);

//==> <==//
window.postMessage({ job: "compatible"}, '*' );

browser.runtime.onMessage.addListener((message) => {
    if (message.command === "down") {
		console.log("Download pressed");
		window.postMessage({ job: "download"}, '*' );
    } 
	else if (message.command === "ins") {
		console.log("Insert pressed");
		window.postMessage({ job: "insert"}, '*' );
    }
  });

window.addEventListener('message', function(event) {
    console.log('content_script.js got message:');
    
	if (event.data.status == "incompatible"){
		throw "Error";
	}
});



/*
browser.runtime.sendMessage({
	job: "page_check"
}).then((response) => {
	console.log("Received:");
	console.log(response.status);
});
*/




    
