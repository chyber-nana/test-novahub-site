const expandShrinkButton = document.getElementById("esb")
const sideBar = document.getElementById("sidebar")
const expandedLinks = document.getElementById("product--links").getElementsByTagName("li")
const shrinkedLinks = document.getElementById("shrinked-product--links").getElementsByTagName("li")
const cart = document.getElementById("cart")
const foreignPageAddButtons = document.querySelectorAll("#foreign--add")
const notificationPopup = document.querySelector(".notification")
const playText = document.querySelectorAll(".start")
const socialsButton = document.getElementById("socials--button")
const socialsPage = document.querySelector(".socials--page--hidden")
const socialsCloseButton = document.getElementById("socials--close--button")
const cartButton = document.getElementById("cartButton")
const cartCloseButton = document.getElementById("cart--close--button")
const itemsHidden = document.querySelector(".item--list--hidden")
const orderButtton = document.getElementById("order")
const menuButton =  document.querySelector(".menu--button--hidden")
let currentPage = null
let shrinkedPage = null
let productNumber = 0
let itemDummy = ` <li class="item">
                        <div class="item--content">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="10px" height="10px" id="item--close--button" stroke="#fff" stroke-width="1"><path d="M 19.990234 2.9863281 A 1.0001 1.0001 0 0 0 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 A 1.0001 1.0001 0 0 0 3.9902344 2.9902344 A 1.0001 1.0001 0 0 0 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 A 1.0001 1.0001 0 1 0 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 A 1.0001 1.0001 0 1 0 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 A 1.0001 1.0001 0 0 0 19.990234 2.9863281 z"/></svg>
                            <div class="item--info">
                                <span class="item--name"></span>
                                <span class="item--price"></span>
                            </div>
                        </div>
                    </li>`
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("section--play")
        }
    });
})

const section = document.querySelectorAll(".container--animated")
section.forEach((section) => observer.observe(section));

let isExpand = false
const expandOrShrink = () => {
    if (isExpand === true) {
        expandShrinkButton.classList.remove("commands-click")
        sideBar.classList.remove("sidebar")
        sideBar.classList.add("smallbar")
        isExpand = false
    } else {
        expandShrinkButton.classList.add("commands-click")
        sideBar.classList.add("sidebar")
        sideBar.classList.remove("smallbar")
        isExpand = true
    }
}

const checkCurrentPage = () => {
    let currentURL = window.location.toString();

    console.log(currentURL);
}

const updateLinkColor = (page, shrinkPage)  => {
    for (let i = 0; i < expandedLinks.length; i++) {
        expandedLinks[i].style.backgroundColor = "var(--bgColor)"
    }
    for (let i = 0; i < shrinkedLinks.length; i++) {
        shrinkedLinks[i].style.backgroundColor = "var(--bgColor)"
    }
    page.style.backgroundColor = "var(--hoverColor)"
    page.getElementsByTagName("a")[0].color = "#893471"
    page.getElementsByTagName("svg")[0].fill = "#893471"
    shrinkPage.style.backgroundColor = "var(--hoverColor)"
    shrinkPage.getElementsByTagName("a")[0].color = "#893471"
    shrinkPage.getElementsByTagName("svg")[0].fill = "#893471"
    let currentURL = window.location.toString();
    checkCurrentPage()
    console.log(currentURL);
}

expandShrinkButton.addEventListener("click", () => {
    expandOrShrink()
})

for (let index = 0; index < expandedLinks.length; index++) {
    expandedLinks[index].addEventListener("click", () => {
        expandOrShrink()

        currentPage = expandedLinks[index]
        shrinkedPage = shrinkedLinks[index]
        updateLinkColor(currentPage, shrinkedPage)
    })

    shrinkedLinks[index].addEventListener("click", () => {
        currentPage = expandedLinks[index]
        shrinkedPage = shrinkedLinks[index]
        updateLinkColor(currentPage, shrinkedPage)
    })


    
}

const notify = (message) => {
    document.getElementById("message").innerHTML = `Added ${message}`

    notificationPopup.classList.add("show--notification")
    setTimeout(() => {
    notificationPopup.classList.remove("show--notification")
    }, 3000);
}

let removeButtons = document.querySelectorAll("#cancelButton")


for (let i = 0; i < foreignPageAddButtons.length; i++) {
    foreignPageAddButtons[i].addEventListener("click", () => {
        addProduct(foreignSims[i])
        notify(foreignSims[i])
        let removeButtons = document.querySelectorAll("#cancelButton")

    })
}

for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", () => {
        alert("Hiii")
    })
}


let text = 0;
let t = 5000;

const animateText = (infoText) => {
    if (text < infoText.length && text !== 0)  {
        infoText[text - 1].classList.remove("play")
    } else if (text === 3) {
        infoText[text - 1].classList.remove("play")
        text = 0
    } else if (text == 0){
        infoText[0].classList.remove("play")
    }

    infoText[text].classList.add("play")
    text += 1

}

setInterval(animateText(playText), t);

socialsButton.addEventListener("click", () => {
    socialsPage.classList.add("socials--page--show")
})

socialsCloseButton.addEventListener("click", () => {
    socialsPage.classList.remove("socials--page--show")
})

cart.addEventListener("click", () => {
    itemsHidden.classList.add("item--list--show")
})

cartCloseButton.addEventListener("click", () => {
    itemsHidden.classList.remove("item--list--show")
})


orderButtton.addEventListener("click", () => {
    if (cartList.length === 0) {
        alert("No items have been selected!")
    }
})

window.addEventListener('resize', function() {
    if (window.innerWidth <= 660) {
        sideBar.classList.add("sidebar")
        sideBar.classList.remove("smallbar")
    } else {
        sideBar.classList.remove("sidebar")
        sideBar.classList.add("smallbar")
    }
});

// Initial check
window.dispatchEvent(new Event('resize'));
let menuShowing = false
menuButton.addEventListener("click", () => {
    if (menuShowing) {
        document.getElementById("sidebar").style.top = "-100rem"
        menuButton.classList.remove("menu--button--show")
        menuShowing = false
    }   else {
        document.getElementById("sidebar").style.top = "4rem"
        menuButton.classList.add("menu--button--show")
        menuShowing = true
    }
})

for (let index = 0; index < expandedLinks.length; index++) {
    expandedLinks[index].addEventListener("click", () => {
        if (menuShowing) {
            document.getElementById("sidebar").style.top = "-100rem"
            menuButton.classList.remove("menu--button--show")
            sideBar.classList.add("sidebar")
            sideBar.classList.remove("smallbar")
            menuShowing = false
        }
    })
}


let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        location.reload();
    }, 5); // Adjust the delay as needed
});
let data = []
let yourData = {"data": data}

let storedData = localStorage.getItem("productData");
if (storedData) {
    yourData.data = JSON.parse(storedData);
    initializeProducts();
    // initializeCart();
} else {
    fetch("https://sheetdb.io/api/v1/5ayhpj0thqk3w")
        .then(response => response.json())
        .then(data => {
            yourData.data = data;
            localStorage.setItem("productData", JSON.stringify(data));
            initializeProducts();
            // initializeCart();
        })
        .catch(error => console.error('Error fetching data:', error));
}

function initializeProducts() {
    for (let product = 0; product < yourData.data.length; product++) {
        let productData = yourData.data[product]
        if (productData.ItemCategory === 'Foreign Sim Cards') {
            let newItem = document.createElement("li")
            newItem.innerHTML = `<li class="product">
                                        <div id="content">
                                            <img src="./Images/Countries/australia.jpeg" alt="Australia flag">
                                            <div class="control">
                                                <span class="item--name">${productData.ItemName}</span>
                                                <p class="item--price">₵${productData.Price}</p>
                                                <p class="${productData.InStock ? "in--stock" : "out--stock"}">${productData.Status}</p>
                                                <span class="add--area" onclick="addToCart()"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>Add to Cart</span>
                                            </div>
                                        </div>
        
                                    </li>`
            document.querySelector(".products").appendChild(newItem)
        } else if (productData.ItemCategory === "Gift Cards") {
            let newItem = document.createElement("li")
            newItem.innerHTML = `<li class="product">
                                        <div id="content">
                                            <img src="./Images/Countries/australia.jpeg" alt="Australia flag">
                                            <div class="control">
                                                <span class="item--name">${productData.ItemName}</span>
                                                <p class="item--price">₵${productData.Price}</p>
                                                <p class="${productData.InStock ? "in-stock" : "out-stock"}}">${productData.Status}</p>
                                                <span class="add--area" onclick="addToCart()"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>Add to Cart</span>
                                            </div>
                                        </div>
        
                                    </li>`
            document.querySelector(".products--giftcards").appendChild(newItem)

        } else if (productData.ItemCategory === "Telco Pre-paid cards") {
            let newItem = document.createElement("li")
            newItem.innerHTML = `<li class="product">
                                        <div id="content">
                                            <img src="./Images/Countries/australia.jpeg" alt="Australia flag">
                                            <div class="control">
                                                <span class="item--name">${productData.ItemName}</span>
                                                <p class="item--price">₵${productData.Price}</p>
                                                <p class="${productData.InStock ? "in-stock" : "out-stock"}}">${productData.Status}</p>
                                                <span class="add--area" onclick="addToCart()"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>Add to Cart</span>
                                            </div>
                                        </div>
        
                                    </li>`
            document.querySelector(".products--telco").appendChild(newItem)
        } else if (productData.ItemCategory === "Subscriptions") {
            let newItem = document.createElement("li")
            newItem.innerHTML = `<li class="product">
                                        <div id="content">
                                            <img src="./Images/Countries/australia.jpeg" alt="Australia flag">
                                            <div class="control">
                                                <span class="item--name">${productData.ItemName}</span>
                                                <p class="item--price">₵${productData.Price}</p>
                                                <p class="${productData.InStock ? "in-stock" : "out-stock"}}">${productData.Status}</p>
                                                <span class="add--area" onclick="addToCart()"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>Add to Cart</span>
                                            </div>
                                        </div>
        
                                    </li>`
            document.querySelector(".products--subscriptions").appendChild(newItem)
        } else if (productData.ItemCategory === "Virtual Credit Cards") {
            let newItem = document.createElement("li")
            newItem.innerHTML = `<li class="product">
                                        <div id="content">
                                            <img src="./Images/Countries/australia.jpeg" alt="Australia flag">
                                            <div class="control">
                                                <span class="item--name">${productData.ItemName}</span>
                                                <p class="item--price">₵${productData.Price}</p>
                                                <p class="${productData.InStock ? "in-stock" : "out-stock"}}">${productData.Status}</p>
                                                <span class="add--area" onclick="addToCart()"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>Add to Cart</span>
                                            </div>
                                        </div>
        
                                    </li>`
            document.querySelector(".products--virtual").appendChild(newItem)
        } else if (productData.ItemCategory === "Payment Cards") {
            let newItem = document.createElement("li")
            newItem.innerHTML = `<li class="product">
                                        <div id="content">
                                            <img src="./Images/Countries/australia.jpeg" alt="Australia flag">
                                            <div class="control">
                                                <span class="item--name">${productData.ItemName}</span>
                                                <p class="item--price">₵${productData.Price}</p>
                                                <p class="${productData.InStock ? "in-stock" : "out-stock"}}">${productData.Status}</p>
                                                <span class="add--area" onclick="addToCart()"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>Add to Cart</span>
                                            </div>
                                        </div>
        
                                    </li>`
            document.querySelector(".products--payment").appendChild(newItem)
        }
    }
}


