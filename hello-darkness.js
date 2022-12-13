const body1 = document.getElementsByTagName('body')[0]
let rgbColor = 255
let countdownInterval = setInterval(function() {
    if (rgbColor > 0) {
        body1.style.backgroundColor = `rgb(${rgbColor},${rgbColor},${rgbColor})`;
        rgbColor--;
    } else {
        clearInterval(countdownInterval)
    }
}, 500
)