# Popup.js

A lightweight popup JS plugin, easy to use.

* Lightweight

* No dependencies(It doesn't require jQuery or any other libraries).

![](https://github.com/LisaSound/Popup/blob/screenshots/readme_digest/example_screenshot.png)

Check out the [Demos](https://github.com/LisaSound/Popup/tree/master/examples) .


# Installation
Place `popup.css` in your css folder.

add this before your closing head tag:

```html
<link rel="styesheet" href="/your_css_folder/popup.css">
```

Then, place `popup.js` in your js folder.

include this in your html:

```html
<script src="/your_js_folder/popup.js"></script>
```

# Usage

Create a Popup instance:

```javascript
var myPopup = new smq.Popup({
  title: 'Product Description',
  innerHtml: '<img src="product.jpg">'
});
```

Show your Popup:

```javascript
myPopup.show();
```

Close Popup:

```javascript
myPopup.close();
```
