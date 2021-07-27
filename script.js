window.addEventListener("keydown", function (e) {
	// Instantiate audio
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	// Stop the function from running all together if there's no audio associated with that key
	if (!audio) return;
	audio.play();
});
