let itemCount = document.querySelector("#shopcart-count");

let count = 0;

function addItemsCart() {
    count = count +1
    if(count === 1) {
        itemCountText.textContent = '1 item';
    }else {
        itemCountText.textContent = count + "items"
    }
}

