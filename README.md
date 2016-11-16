JavaScript selector engine
==========================

A selector engine built with pure JavaScript that returns an array of DOM elements that match the CSS selector. It was built without using document.querySelector(), document.querySelectorAll(), jQuery or any other libraries.

Selector tests
--------------
The function was tested against the following CSS selectors:

```
  A: $("div"),
  B: $("img.some_class"),
  C: $("#some_id"),
  D: $(".some_class"),
  E: $("input#some_id"),
  F: $("div#some_id.some_class"),
  G: $("div.some_class#some_id")
```

Running the engine
------------------
Open the Test.html file in a browser and the developer console should show all the tests passing. To test out the engine further, insert some more HTML into the index.html file and run the following in the dev console:

```
  $("your_selector");
```
