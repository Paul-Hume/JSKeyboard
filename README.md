Keyboard JS
===========

Keybaord JS was created for use with QUnit testing. Where JS functionality works with a keypress trigger, keyboard js can be used to simulate various keypresses to test that functionality.

## Usage

Include JQuery and the Keyboard JS file in your page

```html
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="keyboard.js" type="text/javascript"></script>
```

Define new Keybaord

```js
var keys = new keyboard();
```

To mimic typing a string into an input box

```js
keys.type('This is a test', '#testInput');
```

To mimic single keypresses into an input box

```js
keys.type('A', '#testInput');
```

To type a number of random characters into an input box

```js
key.randomString(12, '#testInput');
```