function checkPalindrome(str, caseSensitive){
	let text = caseSensitive ? str : str.toLowerCase()
	let isPalindrome = true
	let v = text.length - 1
	for(let i = 0 ; i <str.length ; i++){
		if(text[i] !== text[v]){
			isPalindrome = false
		}
		v--
		}
	return isPalindrome
}

function checkPalindromeInsensitive(str){
	let reversed = str.split('').reverce().join('')
	return str === reversed
}

function checkPalindromeSensitive(str, caseSensitive){
	let text = str ? str : str.toLowerCase()
	let reversed = text.split('').reverce().join('')
	return text === reversed
}

console.log(checkPalindrome("RADAR", true))
console.log(checkPalindrome("raDaR", true))
console.log(checkPalindrome("raDaR", false))