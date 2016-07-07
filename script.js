//1
button.addEventListener('click', function (event) {
	console.log(this)
	console.log(this == event.target)
})
//2
inp.addEventListener('focus', function (event) {
	var div = document.createElement('div');
	document.body.appendChild(div);
})

inp.addEventListener('input', function (event) {
	document.getElementsByTagName('div')[0].innerHTML = this.value
})

inp.addEventListener('blur', function (event) {
	document.getElementsByTagName('div')[0].remove()
})
//3
var choice = []
food.addEventListener('change', function (event) {
	choice.push(event.target.value)
	console.log(choice)
})
//4
document.addEventListener('keydown', function (event) {
	console.log(event.keyCode); // выдаст код той клавиши котоую вы будете нажимать
});