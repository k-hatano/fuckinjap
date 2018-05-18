
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

function changePreset(which) {
	if (which.value == "fuckinjap_1") {
		document.getElementById('chars_plus').value = "ゑあけうつわちいねかりろびざぶぽぎごょば";
		document.getElementById('chars_minus').value = "ひさふゐもきこのなよぬはぁげぅづゎぢぃが"; 
		document.getElementById('chars_lt').value = "せゆえおらたるにずぺでぐぷぼ";
		document.getElementById('chars_gt').value = "すめてくむれをほぜゅぇぉだ";
		document.getElementById('chars_while').value = "そへぴゃ";
		document.getElementById('chars_end').value = "みやぞべ";
		document.getElementById('chars_dot').value = "しまとっ。";
		document.getElementById('chars_comma').value = "んじぱど、";
	} else if (which.value == "fuckinjap_1_1") {
		document.getElementById('chars_plus').value = "あけうつわちいねかりろあけうつわちいねかりろびざぶぽぎごょば";
		document.getElementById('chars_minus').value = "ひさふもきこのなよぬはひさふもきこのなよぬはぁげぅづゎぢぃが"; 
		document.getElementById('chars_lt').value = "せゆえおらたるにせゆえおらたるにずぺでぐぷぼ";
		document.getElementById('chars_gt').value = "すめてくむれをほすめてくむれほぜゅぇぉだ";
		document.getElementById('chars_while').value = "そへそへぴゃ";
		document.getElementById('chars_end').value = "みやみやぞべ";
		document.getElementById('chars_dot').value = "しまとしまとっ。。";
		document.getElementById('chars_comma').value = "んんじぱど、、";
	} else if (which.value == "monamona") {
		document.getElementById('chars_plus').value = "M";
		document.getElementById('chars_minus').value = "O"; 
		document.getElementById('chars_lt').value = "N";
		document.getElementById('chars_gt').value = "A";
		document.getElementById('chars_while').value = "m";
		document.getElementById('chars_end').value = "o";
		document.getElementById('chars_dot').value = "n";
		document.getElementById('chars_comma').value = "a";
	}
}


