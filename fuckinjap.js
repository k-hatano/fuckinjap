
var chars_plus = "ゑあけうつわちいねかりろびざぶぽぎごょば";
var chars_minus = "ひさふゐもきこのなよぬはぁげぅづゎぢぃが";
var chars_lt = "せゆえおらたるにずぺでぐぷぼ";
var chars_gt = "すめてくむれをほぜゅぇぉだ";
var chars_while = "そへぴゃ";
var chars_end = "みやぞべ";
var chars_dot = "しまとっ。";
var chars_comma = "んじぱど、";

var chars_brainfuck = "+-<>[].,";

function toBrainfuck(origin) {
	var result = "";
	setChars();
	for (var i = 0; i < origin.length; i++) {
		var object = origin.charAt(i);
		if (chars_plus.indexOf(object) >= 0) {
			result += '+';
		} else if (chars_minus.indexOf(object) >= 0) {
			result += '-';
		} else if (chars_lt.indexOf(object) >= 0) {
			result += '<';
		} else if (chars_gt.indexOf(object) >= 0) {
			result += '>';
		} else if (chars_while.indexOf(object) >= 0) {
			result += '[';
		} else if (chars_end.indexOf(object) >= 0) {
			result += ']';
		} else if (chars_dot.indexOf(object) >= 0) {
			result += '.';
		} else if (chars_comma.indexOf(object) >= 0) {
			result += ',';
		} else {
			result += object;
		}
	}
	return result;
}

function toFuckinjap(origin) {
	var result = "";
	setChars();
	for (var i = 0; i < origin.length; i++) {
		var object = origin.charAt(i);
		if (object == '+') {
			var j = Math.floor( Math.random() * chars_plus.length );
			result += chars_plus.charAt(j);
		} else if (object == '-') {
			var j = Math.floor( Math.random() * chars_minus.length );
			result += chars_minus.charAt(j);
		} else if (object == '<') {
			var j = Math.floor( Math.random() * chars_lt.length );
			result += chars_lt.charAt(j);
		} else if (object == '>') {
			var j = Math.floor( Math.random() * chars_gt.length );
			result += chars_gt.charAt(j);
		} else if (object == '[') {
			var j = Math.floor( Math.random() * chars_while.length );
			result += chars_while.charAt(j);
		} else if (object == ']') {
			var j = Math.floor( Math.random() * chars_end.length );
			result += chars_end.charAt(j);
		} else if (object == '.') {
			var j = Math.floor( Math.random() * chars_dot.length );
			result += chars_dot.charAt(j);
		} else if (object == ',') {
			var j = Math.floor( Math.random() * chars_comma.length );
			result += chars_comma.charAt(j);
		} else {
			result += object;
		}
	}
	return result;
}

function run(source) {
	var result = "";
	var arr = Array(256);
	var ptr = 0;
	setChars();
	for (var i = 0; i < arr.length; i++) {
		arr[i] = 0;
	}
	for (var i = 0; i < source.length; i++) {
		var object = source.charAt(i);
		if (object == '+') {
			arr[ptr]++;
		} else if (object == '-') {
			arr[ptr]--;
		} else if (object == '<') {
			ptr = (ptr - 1 + 256) % 256;
		} else if (object == '>') {
			ptr = (ptr + 1 + 256) % 256;
		} else if (object == '[') {
			if (arr[ptr] == 0) {
				var depth = 1;
				while (true) {
					i++;
					object = source.charAt(i);
					if (object == ']') {
						depth--;
					} else if (object == '[') {
						depth++;
					}
					if (depth == 0) {
						break;
					} else if (i < 0 || i >= source.length) {
						throw "source overflow (" + i + ")";
					}
				}
			}
		} else if (object == ']') {
			if (arr[ptr] != 0) {
				var depth = 1;
				while (true) {
					i--;
					object = source.charAt(i);
					if (object == '[') {
						depth--;
					} else if (object == ']') {
						depth++;
					}
					if (depth == 0) {
						break;
					} else if (i < 0 || i >= source.length) {
						throw "source overflow (" + i + ")";
					}
				}
			}
		} else if (object == '.') {
			result += String.fromCharCode(arr[ptr]);
		} else if (object == ',') {
			arr[ptr] = Math.floor( Math.random() * 256 );
		} else if (i < 0 || i >= source.length) {
			throw "source overflow (" + i + ")";
		} else {
			// throw "unrecognizable character \"" + object + "\" at char " + i;
		}
	}
	return result;
}
