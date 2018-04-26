
function setChars() {
	chars_plus = document.getElementById('chars_plus').value;
	chars_minus = document.getElementById('chars_minus').value; 
	chars_lt = document.getElementById('chars_lt').value;
	chars_gt = document.getElementById('chars_gt').value;
	chars_while = document.getElementById('chars_while').value;
	chars_end = document.getElementById('chars_end').value;
	chars_dot = document.getElementById('chars_dot').value;
	chars_comma = document.getElementById('chars_comma').value;
}

function formToBrainfuck() {
	var textarea = document.getElementById('textarea');
	textarea.value = toBrainfuck(textarea.value);
}

function formToFuckinjap() {
	var textarea = document.getElementById('textarea');
	textarea.value = toFuckinjap(textarea.value);
}

function runBrainfuck() {
	var source = toBrainfuck(textarea.value);
	var resultSpan = document.getElementById('result');
	try {
		var result = run(source);
		resultSpan.innerText = "Result : \n" + result;
	} catch (e) {
		resultSpan.innerText = "An error occurred : \n" + e;
	}
}

