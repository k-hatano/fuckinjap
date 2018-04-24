
var chars_plus = "������킿���˂����т��Ԃۂ������";
var chars_minus = "�Ђ��ӂ�������̂Ȃ�ʂ͂������Â������";
var chars_lt = "���䂦���炽��ɂ��؂ł��Ղ�";
var chars_gt = "���߂Ă��ނ���ق��ゥ����";
var chars_while = "���ւ҂�";
var chars_end = "�݂₼��";
var chars_dot = "���܂Ƃ�";
var chars_comma = "�񂶂ς�";

var chars_brainfuck = "+-<>[].,";

function toBrainfuck(origin) {
	var result = "";
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


