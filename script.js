window.addEventListener("keydown", function (e) {
	// Instantiating audio by grabbing the keyCode of the keys that have sound srcs with attribute selector
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	// Stop the function from running all together if there's no audio associated with that key
	if (!audio) return;
	// Rewind audio file to start so it allows hitting more than once before audio file actually ends
	audio.currentTime = 0;
	audio.play();
	key.classList.add("playing");
});

function removeTransition(e) {
	// Skip it if it's not a transform
	if (e.propertyName !== "transform") return;
	this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
