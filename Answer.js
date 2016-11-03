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
		return tagCheck();
	}

	function tagCheck() {
		if ((selector.includes(".") === false) && (selector.includes("#") === false)) {
			// lone tag
			console.log("returning lone tag of" + document.getElementsByTagName(selector));
			return document.getElementsByTagName(selector);
		} else if ((selector.includes(".") === true) && (selector.includes("#") === false)) {
			// tag and class
			return singleClass();
		} else if ((selector.includes(".") === false) && (selector.includes("#") === true)) {
			// tag and id
			return singleId();
		} else {
			return [];
		}
	}

	function singleClass() {
		var tagArray = [];
		var tag = selector.split(".")[0];
		var tagClass = selector.split(".")[1];
		var allTags = [...document.getElementsByTagName(tag)];
		allTags.forEach(function(element){
			if (element.classList.contains(tagClass)) {
				tagArray.push(element);
			}
		});
		return tagArray;
	}

	function singleId() {
		var tagArray = [];
		var tag = selector.split("#")[0];
		var tagId = selector.split("#")[1];
		var allTags = [...document.getElementsByTagName(tag)];
		allTags.forEach(function(element){
			if (element.id === tagId) {
				tagArray.push(element);
			}
		});
		return tagArray;
	}

}
