let slider = document.getElementsByClassName("slider")[0];
let handle = slider.getElementsByClassName("handle")[0];

let mousedown = false;

document.addEventListener("mousedown", function (event) {
    mousedown = true;
})

document.addEventListener("mouseup", function (event) {
    mousedown = false;
})

slider.onmousedown = function (event) {
    if(event.target.classList.contains("handle")) {
        return;
    }

    handle.style.left = event.offsetX + "px";
}

slider.onmousemove = function (event) {
    if(event.target.classList.contains("handle")) {
        return;
    }

    if(mousedown) {
        handle.style.left = event.offsetX + "px";
    }
}
