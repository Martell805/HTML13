let contents = document.getElementById('contents');

contents.onclick = function (event) {
    if(event.target.nodeName === "A") {
        if (!confirm('Вы уверены, что хотите перейти по "' + event.target.textContent + '"?'))
            return false;
    }
}
