function addItemOnClick(){
    accumulator.addItem();
}

function clearOnClick(){
    accumulator.clear();
}

function sortOnClick(){
    accumulator.sort();
}

function deleteOnClick(){
    accumulator.delete(this);
}


class Accumulator {
    constructor(basket, new_item, add_button, sort_button, clear_button) {
        this.basket = basket;
        this.new_item = new_item;

        this.add_button = add_button;
        this.add_button.onclick = addItemOnClick;

        this.clear_button = clear_button;
        this.clear_button.onclick = clearOnClick;

        this.sort_button = sort_button;
        this.sort_button.onclick = sortOnClick;

        this.array = []
    }

    addItem() {
        if (this.new_item.value === "") {
            return;
        }

        let item = document.createElement('div');
        item.classList.add("basket-item");
        item.textContent = this.new_item.value;

        let del_button = document.createElement('button');
        del_button.innerText = "Удалить";
        del_button.classList.add("button3");
        del_button.onclick = deleteOnClick;
        item.appendChild(del_button);

        this.new_item.value = "";

        this.basket.appendChild(item);
        this.array.push(item);
    };

    clear() {
        this.basket.innerHTML = "";
        this.array = []
    }

    delete(button) {
        this.array.splice(this.array.indexOf(button.parentElement))
        button.parentElement.remove();
    }

    sort() {
        this.basket.innerHTML = "";

        this.array.sort((a, b) => {
            if (a.textContent > b.textContent) {
                return -1;
            }
            if (b.textContent > a.textContent) {
                return 1;
            }
            return 0;
        });

        for (let item of this.array) {
            this.basket.appendChild(item);
        }
    }
}

let accumulator = new Accumulator(
    document.getElementById('basket'),
    document.getElementById('item'),
    document.getElementById('add'),
    document.getElementById('sort'),
    document.getElementById('clear')
);
