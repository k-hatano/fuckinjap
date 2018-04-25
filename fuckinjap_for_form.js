
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
	try {
		var result = run(source);
		window.alert("Result : " + result);
	} catch (e) {
		window.alert("An error occurred :\n" + e);
	}
}

