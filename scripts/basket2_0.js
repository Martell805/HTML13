let dnd_containers = document.getElementsByClassName("dnd-container");
let floating_element_parent = null;
let floating_element = null;

function onMouseDown(event) {
    if(!event.target.classList.contains("dnd-item")) {
        return;
    }

    floating_element_parent = event.target.parentElement;
    floating_element = event.target;

    floating_element.style.position = "absolute";
    floating_element.style.left = event.pageX - floating_element.clientWidth / 2 + "px";
    floating_element.style.top = event.pageY - floating_element.clientHeight / 2 + "px";
    floating_element.style.zIndex = "100";
    floating_element.style.pointerEvents = "none";

    document.body.appendChild(floating_element);

    floating_element_parent.updateContainer();

    return false;
}

document.addEventListener("mousemove",
    function (event) {
        if(floating_element == null) {
            return;
        }

        floating_element.style.left = event.pageX - floating_element.clientWidth / 2 + "px";
        floating_element.style.top = event.pageY - floating_element.clientHeight / 2 + "px";
    }
);

document.addEventListener("mouseup",
    function (event) {
        if(floating_element == null) {
            return;
        }

        floating_element.style.position = "static";
        floating_element.style.zIndex = "0";
        floating_element.style.pointerEvents = "auto";

        floating_element_parent.appendChild(floating_element);
        floating_element_parent.updateContainer();

        floating_element = null;
        floating_element_parent = null;
    }
);


function onMouseUp(event) {
    if(!event.target.classList.contains("dnd-container")) {
        return;
    }

    if(floating_element == null) {
        return;
    }

    floating_element.style.position = "static";
    floating_element.style.zIndex = "0";
    floating_element.style.pointerEvents = "auto";

    event.target.appendChild(floating_element);
    this.updateContainer();

    floating_element = null;
    floating_element_parent = null;

    return false;
}



for (let dnd_container of dnd_containers) {
    dnd_container.addEventListener("mousedown", onMouseDown);
    dnd_container.addEventListener("mouseup", onMouseUp);

    dnd_container.updateContainer = function () {
        let amount = this.getElementsByClassName("amount");

        if(amount.length === 0) {
            return;
        }

        amount[0].innerText = this.children.length - 1 + "";
    }

    dnd_container.updateContainer();
}
