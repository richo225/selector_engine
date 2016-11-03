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
		document.getElementsByClassName(selector.substr(1));
	} else if (selector.startsWith("#")) {
		document.getElementById(selector.substr(1));
	} else {
		tagCheck(selector);
	};

	// check if tag is alone or has one class/id

	function tagCheck(selector) {
		console.log("tagCheck");
		if ((selector.includes(".") === false) && (selector.includes("#") === false)) {
			// lone tag
			console.log("returning lone tag of" + document.getElementsByTagName(selector));
			return document.getElementsByTagName(selector);
		} else if ((selector.includes(".") === true) && (selector.includes("#") === false)) {
			// tag and class
			tagPushClass(selector);
		} else if ((selector.includes(".") === false) && (selector.includes("#") === true)) {
			// tag and id
			tagPushId(selector);
		} else {
			// tag and class and id
			// tagMultiple(selector);
			return [];
		};
	};

	// return element with the correct class

	function tagPushClass(selector) {
		console.log("pushClass run");
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

	// return element with the correct id

	function tagPushId(selector) {
		console.log("pushId run");
		var tagArray = [];
		var tag = selector.split("#")[0];
		var tagId = selector.split("#")[1];
		var allTags = [...document.getElementsByTagName(tag)];
		allTags.forEach(function(element){
			if (element.id === tagId) {
				tagArray.push(element);
			}
		});
		console.log("returning id array of" +tagArray);
		return tagArray;
	}

};
