const text = document.querySelector('#text');

window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
    console.log(key)
    key.classList.add('playing')
    // text.textContent = ;
})

// window.addEventListener('transitionend', function)
const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition ))

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    // console.log(e.propertyName)
    // console.log(this)
    this.classList.remove('playing')
}