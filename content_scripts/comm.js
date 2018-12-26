/*window.addEventListener('message', (eventt)=>{
	console.log(eventt);
});*/
function check_ace(){
	if(typeof ace == "object")
		return true;
	else
		return false;
}

window.addEventListener('message', function(event) {
	if(event.data.job == "compatible"){
		console.log("Compat received");
		if(typeof ace == "undefined"){
			window.postMessage({ status: "incompatible"}, '*' );
			console.log("Oh noo");
		}
	}
	else if(event.data.job == "download"){
		console.log("Download job received");
	}
	else if(event.data.job == "insert"){
		console.log("Insert job received");
	}
});


//Reply
//window.postMessage({ type: 'page_js_type'}, '*');
