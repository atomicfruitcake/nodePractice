// node regex

function regexChecker(str, pattern) {
	var res = str.match(pattern)
	if (res) {
		return true;
	} else {
		return false;
	}
}

function emailChecker(email) {
	var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	if (regexChecker(email, emailRegex) == true) {
		console.log('Email is valid')
	} else {
		console.log('Please enter a valid email address')
	}
}

function hexadecimalChecker(str) {
	var hexaRegex = /^[a-fA-F0-9]+$/g;
	if (regexChecker(str, hexaRegex) == true) {
		console.log('Valid Hexadecimal number');
	} else {
		console.log('Not a valid Hexadecimal number');
	}
}

function passwordChecker(pass) {
	var passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;
	if (regexChecker(pass, passRegex) == true) {
		console.log('Password was valid')
	} else {
		console.log('Invalid password')
	}
}
