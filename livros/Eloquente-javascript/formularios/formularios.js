(function(){

	// Focus
	document.querySelector("input[type='text']").addEventListener("focus", function() {
		console.log(document.activeElement.tagName);
	});
	document.querySelector("input[type='text']").addEventListener("blur", function() {
		console.log(document.activeElement.tagName);
	});
	
	// Form 
	var form = document.querySelector("form");
  		form.addEventListener("submit", function(event) {
	    	console.log("Saving value", form.elements.value); // fail. for(..)
	    event.preventDefault();
	});

 
})();