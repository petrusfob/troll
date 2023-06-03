var button = document.getElementById("button");
var audio = new Audio("audio.mp3");

function afterClick() {
	alert("Congratulations! You are very gay!");
};

function playAudio() {
	audio.play();
};

button.addEventListener("click", playAudio);
button.addEventListener("click", afterClick);
