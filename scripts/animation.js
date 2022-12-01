function animate(draw) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / 1000;

        draw(timeFraction);

        requestAnimationFrame(animate);
    });
}

let animated = document.getElementById("animated");

animated.onclick = function() {animate(draw)};

function draw(progress) {
    if(progress < 1) {
        animated.style.width = progress * 500 + "px";
        animated.style.height = progress * 500 + "px";
    } else {
        progress -= 1;

        let red;
        let green;
        let blue;

        if(Math.floor(progress) % 2 === 0) {
            red = 255 - (progress * 255) % 255;
            green = (progress * 255) % 255;
            blue = 0;
        } else {
            red = progress * 255 % 255;
            green = 255 - (progress * 255) % 255;
            blue = 0;
        }

        animated.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    }
}
