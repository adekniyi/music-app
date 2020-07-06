window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const tapMusic = document.querySelectorAll('.tap-music div');
    const animate = document.querySelector('.animate')


    let color = [
        'aqua',
        'blue',
        'coral',
        'palegreen',
        'black',
        'red'
    ]

    tapMusic.forEach((tap, index) => {
        tap.addEventListener('click', function() {
            sounds[index].currentTime = 0
            sounds[index].play();
            createball(index)
        })
    })
    const createball = (index) => {
        let ball = document.createElement('div')
        animate.appendChild(ball)
        ball.style.backgroundColor = color[index]
        ball.style.animation = 'jump 1s ease'
        ball.addEventListener('animationend', function() {
            animate.removeChild(this)
        })
    }
})