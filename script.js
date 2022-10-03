function playSound(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if (!audio) return; // if any other key is used the code won't run
    audio.currentTime = 0; // property to remove the single use property.
    audio.play(); // to play the audio of the input.
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName != 'transform') return; // skip
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

addEventListener('keydown', playSound);