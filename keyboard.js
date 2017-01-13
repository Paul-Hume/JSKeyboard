(function() {

function keyboard() {

	var keyboard = this;

	keyboard.keyPress = function(key, target) {
		var keycode = keyMap[key],
			keyPress = $.Event('keypress'),
			keyUp = $.Event('keyup');

		keyPress.which = keycode;
		keyUp.which = keycode;

		$(target).trigger(keyPress);
		$(target).val($(target).val() + key);
		$(target).trigger(keyUp);

		return keyPress;
	};

	keyboard.type = function(string, target) {
		var input = target || $('input')[0];
		var keys = string.split('');

		$.each(keys, function(index, key) {
			keyboard.keyPress(key, input);
		});
	};

	keyboard.randomString = function(qty, target) {
		var chars = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

		var input = target || $('input')[0];

		for (i = 0; i < qty; i++) {
			var key = chars[Math.floor(Math.random()*chars.length)];
			this.keyPress(key, input);
		}
	};

	var keyMap = {
	    'space': 32,
	    '!': 33,
	    '#': 35,
	    '$': 36,
	    '%': 37,
	    '&': 38,
	    '(': 40,
	    ')': 41,
	    '*': 42,
	    '+': 43,
	    ',': 44,
	    '-': 45,
	    '.': 46,
	    '/': 47,
	    '0': 48,
	    '1': 49,
	    '2': 50,
	    '3': 51,
	    '4': 52,
	    '5': 53,
	    '6': 54,
	    '7': 55,
	    '8': 56,
	    '9': 57,
	    ':': 58,
	    '=': 61,
	    '?': 63,
	    '@': 64,
	    'A': 65,
	    'B': 66,
	    'C': 67,
	    'D': 68,
	    'E': 69,
	    'F': 70,
	    'G': 71,
	    'H': 72,
	    'I': 73,
	    'J': 74,
	    'K': 75,
	    'L': 76,
	    'M': 77,
	    'N': 78,
	    'O': 79,
	    'P': 80,
	    'Q': 81,
	    'R': 82,
	    'S': 83,
	    'T': 84,
	    'U': 85,
	    'V': 86,
	    'W': 87,
	    'X': 88,
	    'Y': 89,
	    'Z': 90,
	    'a': 97,
	    'b': 98,
	    'c': 99,
	    'd': 100,
	    'e': 101,
	    'f': 102,
	    'g': 103,
	    'h': 104,
	    'i': 105,
	    'j': 106,
	    'k': 107,
	    'l': 108,
	    'm': 109,
	    'n': 110,
	    'o': 111,
	    'p': 112,
	    'q': 113,
	    'r': 114,
	    's': 115,
	    't': 116,
	    'u': 117,
	    'v': 118,
	    'w': 119,
	    'x': 120,
	    'y': 121,
	    'z': 122,
	}
}


})();
