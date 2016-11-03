function $(selector) {
	// A: $("div"),
  // B: $("img.some_class"),
  // C: $("#some_id"),
  // D: $(".some_class"),
  // E: $("input#some_id"),
  // F: $("div#some_id.some_class"),
  // G: $("div.some_class#some_id")

	// check if lone id or class

	if (selector.startsWith(".")) {
		return document.getElementsByClassName(selector.substr(1));
	} else if (selector.startsWith("#")) {
		// id's are unique so need to manually place inside array;
		return [document.getElementById(selector.substr(1))];
	} else {
		return classTest();
	}

	function classTest() {
		if ((selector.includes(".") === false) && (selector.includes("#") === false)) {
			// lone tag
			console.log("returning lone tag of" + document.getElementsByTagName(selector));
			return document.getElementsByTagName(selector);
		} else if ((selector.includes(".") === true) && (selector.includes("#") === false)) {
			// tag and class
			var cTagArray = [];
			var cTag = selector.split(".")[0];
			var cTagClass = selector.split(".")[1];
			var cAllTags = [...document.getElementsByTagName(cTag)];
			cAllTags.forEach(function(element){
				if (element.classList.contains(cTagClass)) {
					cTagArray.push(element);
				}
			});
			return cTagArray;
		} else if ((selector.includes(".") === false) && (selector.includes("#") === true)) {
			// tag and id
			var iTagArray = [];
			var iTag = selector.split("#")[0];
			var iTagId = selector.split("#")[1];
			var iAllTags = [...document.getElementsByTagName(iTag)];
			iAllTags.forEach(function(element){
				if (element.id === iTagId) {
					iTagArray.push(element);
				}
			});
			console.log("returning id array of" +iTagArray);
			return iTagArray;
		} else {
			// tag and class and id
			// tagMultiple(selector);
			return [];
		}
	}
}
