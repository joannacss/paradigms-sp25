function toCelsius(){
	let inputElement = document.getElementById("temperature");
	let f = inputElement.value;

	let celsius = (Number(f) - 32) * 5/9;
	document.getElementById("result").innerText = celsius;
}