function toCelsius(){
	let inputEl = document.getElementById("temperature");
	let f = inputEl.value;
	let c = (f - 32) * (5/9);
	document.getElementById("result").innerText = c;
}