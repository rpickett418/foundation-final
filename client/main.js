

let carts = document.querySelectorAll('.add-cart');
const bronBtn = document.getElementById('bronBtn')
const stephBtn = document.getElementById('stephBtn')
const donBtn = document.getElementById('donBtn')
const kdBtn = document.getElementById('kdBtn')
const giannisBtn = document.getElementById('giannisBtn')
const dieselBtn = document.getElementById('dieselBtn')
const signUpForm = document.querySelector(".email-sign-up");
const emailInput = document.querySelector("input");
const signUpbtn = document.querySelector("#sign-up");
const footer = document.querySelector("footer");

document.getElementById('shopcart-count')
// Shopping Cart Stuff
let products = [
    {
        name: 'Utah Jazz',
        tag: 'utahjazz',
        price: 34,
        inCart: 0,

    },
    {
        name: 'Milwaukee Bucks',
        tag: 'milwaukeebucks',
        price: 45,
        inCart: 0,

    },
    {
        name: 'Houston Rockets',
        tag: 'houstonrockets',
        price: 35,
        inCart: 0,

    },
    {
        name: 'New York Knicks',
        tag: 'newyorkknicks',
        price: 35,
        inCart: 0,

    },
    {
        name: 'Denver Nuggets',
        tag: 'denvernuggets',
        price: 35,
        inCart: 0,

    }
]
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        // each product has an index
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}   
// First run
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
function cartNumbers(product) {
    // console.log('This is ', product);
    let productNumbers = localStorage.getItem('cartNumbers');

    // converting strings into numbers 
    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
       localStorage.setItem('cartNumbers',  1);
       document.querySelector('.cart span').textContent = 1;
    }
    setItems(product)
    
}
function setItems(product) {
    console.log('inside of setItems function');
    console.log('My product is', product);

   let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if (cartItems != null) {
        if ( cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart= 1;
        cartItems = {
            [product.tag]:product
        }
    }

    localStorage.setItem('productsInCart', JSON.stringify (cartItems));
}
    

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
        // console.log('my product price is', cartCost);
       console.log(typeof cartCost);
        cartCost = parseInt(cartCost); 
        localStorage.setItem('totalCost', product.price);
        
        if(cartCost != null) {
            localStorage.setItem('totalCost', cartCost + product.price);
        } else {
            localStorage.setItem('totalCost', product.price);
        }

}
// run on first time
function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    // converting JSON into JAVASCRIPT
    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector('products-container')
        
    // console.log(cartItems)
        if (cartItems && productContainer) {
           productContainer.innerHTML = ''; 
           Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle-outline"></ion-icon>
                    <div class="image">
                        <span>${item.name}M/span>
            </div>
            `
           });
        }
}
onLoadCartNumbers();
displayCart()

// When the user clicks on div, open the popup
function madFacts() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

// create a function for axios in frontend 

function playersProfile(player) {
    axios.get(`/api/v1/players/${player}`)
    .then(res => {
        // console.log(res.data.data)
        // console.log(res.data.data.first_name)
        console.log(res.data)
        
    }) 
    .catch(err => console.log(err))
}

function emailSubmitHandler() {
    const confirmationMsg = document.createElement("p");
    confirmationMsg.textContent = "Verify e-mail to receive free shipping on your first order." + emailInput.value; 
    signUpForm.remove();
    
    footer.appendChild(confirmationMsg);
}
    signUpbtn.addEventListener('click', () => {
        emailSubmitHandler()
    })

bronBtn.addEventListener('click', () => {
    playersProfile(237)
})
stephBtn.addEventListener('click', () => {
    playersProfile(115)
})
donBtn.addEventListener('click', () => {
    playersProfile(322)
})
kdBtn.addEventListener('click', () => {
    playersProfile(140)
})
giannisBtn.addEventListener('click', () => {
    playersProfile(15)
})
dieselBtn.addEventListener('click', () => {
    playersProfile(735)
})
signUpbtn.addEventListener('click', () => {
    emailSubmitHandler()
})
// setTimeout(donBtn(alert), 5000000 );
