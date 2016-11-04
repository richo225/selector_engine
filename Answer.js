var $ =	function (selector) {

	var elements = [];

	if (selector.startsWith(".")) {
		return document.getElementsByClassName(selector.substr(1));
	} else if (selector.startsWith("#")) {
		return [document.getElementById(selector.substr(1))];
	} else {
		return tagCheck();
	}

	function tagCheck() {
		if ((selector.includes(".") === false) && (selector.includes("#") === false)) {
			return document.getElementsByTagName(selector);
		} else if ((selector.includes(".") === true) && (selector.includes("#") === false)) {
			return singleClass();
		} else if ((selector.includes(".") === false) && (selector.includes("#") === true)) {
			return singleId();
		} else {
			return multipleCheck();
		}
	}

	function singleClass() {
		var tag = selector.split(".")[0];
		var tagClass = selector.split(".")[1];
		var allTags = [...document.getElementsByTagName(tag)];
		allTags.forEach(function(element){
			if (element.classList.contains(tagClass)) {
				elements.push(element);
			}
		});
		return elements;
	}

	function singleId() {
		var tag = selector.split("#")[0];
		var tagId = selector.split("#")[1];
		var allTags = [...document.getElementsByTagName(tag)];
		allTags.forEach(function(element){
			if (element.id === tagId) {
				elements.push(element);
			}
		});
		return elements;
	}

	function multipleCheck() {
		if (selector.indexOf(".") < selector.indexOf("#")) {
			return multipleSelector(".", "#", 0, 1);
		} else {
			return multipleSelector("#", ".", 1, 0);
		}
	}

	function multipleSelector(symb1, symb2, splitClass, splitId) {
		var tag = selector.split(symb1)[0];
		var tagRemain = selector.split(symb1)[1];
		var tagClass = tagRemain.split(symb2)[splitClass];
		var tagId = tagRemain.split(symb2)[splitId];
		var allTags = [...document.getElementsByTagName(tag)];
		allTags.forEach(function(element){
			if ((element.id === tagId) && (element.classList.contains(tagClass))) {
				elements.push(element);
			}
		});
		return elements;
	}
};
