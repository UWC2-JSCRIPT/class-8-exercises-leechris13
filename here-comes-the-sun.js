const body1 = document.getElementsByTagName('body')[0]

let rgbColor = 0

const sunRise = function() {
    rgbColor++;
    if (rgbColor < 256) {
        body1.style.backgroundColor = `rgb(${rgbColor},${rgbColor},${rgbColor})`;
        requestAnimationFrame(sunRise);
    } 
}

requestAnimationFrame(sunRise)
