const expandShrinkButton = document.getElementById("esb")
const sideBar = document.getElementById("sidebar")
const expandedLinks = document.getElementById("product--links").getElementsByTagName("li")
const shrinkedLinks = document.getElementById("shrinked-product--links").getElementsByTagName("li")
const cart = document.querySelectorAll("#cart")
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
const itemList = document.querySelector(".items")
const menuButton =  document.querySelector(".menu--button--hidden")
const counterDisplay = document.querySelectorAll("#counter")
const searchBar = document.getElementById("searchBar")
const searchedList = document.getElementById("searchedList")
const selectedItemsPage = document.querySelector(".selected--item--page")
const clearCart = document.querySelector(".clear--cart")
const removeButton = document.querySelector("#removeButton")
const preloader = document.getElementById("preloader")
let currentPage = null
let shrinkedPage = null
let productNumber = 0
let cartList = []
let searchList = []

document.addEventListener("DOMContentLoaded", () => {
    preloader.style.display = "none";
});

window.addEventListener("load", () => {
    preloader.style.display = "none";
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("section--play")
        } else {
            entry.target.classList.remove("section--play")

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


// for (let i = 0; i < foreignPageAddButtons.length; i++) {
//     foreignPageAddButtons[i].addEventListener("click", () => {
//         addProduct(foreignSims[i])
//         notify(foreignSims[i])
//         let removeButtons = document.querySelectorAll("#cancelButton")

//     })
// }

// for (let i = 0; i < removeButtons.length; i++) {
//     removeButtons[i].addEventListener("click", () => {
//         alert("Hiii")
//     })
// }


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

cart.forEach((cart) => {
    cart.addEventListener("click", () => {
        itemsHidden.classList.add("item--list--show")
    })
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
            document.body.style.overflow = "auto"
            setTimeout(() => { 
                document.body.style.overflow = "hidden"
            }, 600)
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
    }, 5); 
});



const updateCart = (productData) => {
    itemList.innerHTML = cartList.join("");
    localStorage.setItem("cartList", JSON.stringify(cartList));
    notify(productData.ItemName);
    updateCounterDisplay();
};

const addToCart = (productData) => {
    const newElement = `<li class="item">
    <div class="closee">
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px" stroke="#fff" stroke-width="1" id="removeButton"><path d="M 19.990234 2.9863281 A 1.0001 1.0001 0 0 0 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 A 1.0001 1.0001 0 0 0 3.9902344 2.9902344 A 1.0001 1.0001 0 0 0 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 A 1.0001 1.0001 0 1 0 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 A 1.0001 1.0001 0 1 0 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 A 1.0001 1.0001 0 0 0 19.990234 2.9863281 z"/></svg>
    </div>
    <div>
    <span class="item--name">${productData.ItemName}</span>
    <span class="item--price">₵${productData.Price}</span>
    </div>
    </li>`;
    
    if  (selectedItemsPage.classList.contains("selected--item--page--show")) {
        selectedItemsPage.classList.remove("selected--item--page--show")
    }
    cartList.push(newElement);
    updateCart(productData)
}

clearCart.addEventListener("click", () => {
    cartList = [];
    localStorage.setItem("cartList", JSON.stringify(cartList));
    itemList.innerHTML = ""
    updateCounterDisplay();
})

const removeItem = (item) => {
    let itemIndex = cartList.indexOf(item)
    cartList.splice(itemIndex, 1)
    itemList.innerHTML = cartList.join("")
    localStorage.setItem("cartList", JSON.stringify(cartList))
    updateCart(cartList)
    updateCounterDisplay()
}

if (removeButton) {
    removeButton.addEventListener("click", () => {
        const item = removeButton.closest("li").outerHTML;
        removeItem(item);
    });
}


const updateCounterDisplay = () => {
    let numberOfItems = itemList.getElementsByTagName("li").length;
    if (numberOfItems > 0) {
        counterDisplay.forEach((counter) => {
            counter.style.background = "red";
            counter.textContent = numberOfItems;

        })
    } else {
        counterDisplay.forEach((counter) => {
            counter.style.background = "#1F201F";
            counter.textContent = "0";
        })
    }
};

// Load cart items from localStorage on page load
window.addEventListener("load", () => {
    let storedCartList = localStorage.getItem("cartList");
    if (storedCartList) {
        cartList = JSON.parse(storedCartList);
        itemList.innerHTML = cartList.join("");
        updateCounterDisplay();
    }
});


const imageVerify = (j) => {
    j = j.toLowerCase();
    if (j.includes("australia")) {
        return "australia.jpeg"
    } else if (j.includes("canada")) {
        return "canada.jpeg"
    } else if (j.includes("france")) {
        return "france.png"
    } else if (j.includes("german")) {
        return "germany.jpeg"
    } else if (j.includes("lithuania")) {
        return "lithuania.jpeg"
    } else if (j.includes("morocco")) {
        return "morocco.jpeg"
    } else if (j.includes("netherland")) {
        return "netherlands flag.jpeg"
    } else if (j.includes("poland")) {
        return "poland.png"
    } else if (j.includes("spain")) {
        return "spain.jpeg"
    } else if (j.includes("sweden")) {
        return "sweden.jpeg"
    } else if (j.includes("switzerland")) {
        return "switzerland.webp"
    } else if (j.includes("uk physical")) {
        return "uk.jpeg"
    } else if (j.includes("ukraine")) {
        return "ukraine.jpeg"
    } else if (j.includes("usa")) {
        return "us flag.png"
    } else {
        return ""
    }
}

let data = []
let yourData = {"data": data}

let productsId = [];
let addButtonsId = [];

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
                                            <img src="./Images/Imagesss/${productData.ItemName}.png" alt="${productData.ItemName.split(" ")[0]} flag">
                                            <div class="control">
                                                <span class="item--name">${productData.ItemName}</span>
                                                <p class="item--price">₵${productData.Price}</p>
                                                <p class="${productData.InStock ? "in--stock" : "out--stock"}">${productData.Status}</p>
                                                <span tabindex="0" class="add--area" onclick='addToCart(${JSON.stringify(productData)})'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>Add to Cart</span>
                                            </div>
                                        </div>
        
                                    </li>`
            document.querySelector(".products").appendChild(newItem)
        } else if (productData.ItemCategory === "Gift Cards") {
            let newItem = document.createElement("li")
            newItem.innerHTML = `<li class="product">
                                        <div id="content">
                                            <img src="./Images/Imagesss/${productData.ItemName}.png" alt="${productData.ItemName.split(" ")[0]} flag">
                                            <div class="control">
                                                <span class="item--name">${productData.ItemName}</span>
                                                <p class="item--price">₵${productData.Price}</p>
                                                <p class="${productData.InStock ? "in-stock" : "out-stock"}}">${productData.Status}</p>
                                                <span tabindex="0" class="add--area" onclick='addToCart(${JSON.stringify(productData)})'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>Add to Cart</span>
                                            </div>
                                        </div>
        
                                    </li>`
            document.querySelector(".products--giftcards").appendChild(newItem)
        } else if (productData.ItemCategory === "Telco Pre-paid cards") {
            let newItem = document.createElement("li")
            newItem.innerHTML = `<li class="product">
                                        <div id="content">
                                            <img src="./Images/Imagesss/${productData.ItemName}.png" alt="${productData.ItemName.split(" ")[0]} flag">
                                            <div class="control">
                                                <span class="item--name">${productData.ItemName}</span>
                                                <p class="item--price">₵${productData.Price}</p>
                                                <p class="${productData.InStock ? "in-stock" : "out-stock"}}">${productData.Status}</p>
                                                <span tabindex="0" class="add--area" onclick='addToCart(${JSON.stringify(productData)})'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>Add to Cart</span>
                                            </div>
                                        </div>
        
                                    </li>`
            document.querySelector(".products--telco").appendChild(newItem)

        } else if (productData.ItemCategory === "Subscriptions") {
            let newItem = document.createElement("li")
            newItem.innerHTML = `<li class="product">
                                        <div id="content">
                                            <img src="./Images/Imagesss/${productData.ItemName}.png" alt="${productData.ItemName.split(" ")[0]} flag">
                                            <div class="control">
                                                <span class="item--name">${productData.ItemName}</span>
                                                <p class="item--price">₵${productData.Price}</p>
                                                <p class="${productData.InStock ? "in-stock" : "out-stock"}}">${productData.Status}</p>
                                                <span tabindex="0" class="add--area" onclick='addToCart(${JSON.stringify(productData)})'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>Add to Cart</span>
                                            </div>
                                        </div>
        
                                    </li>`
            document.querySelector(".products--subscriptions").appendChild(newItem)

        } else if (productData.ItemCategory === "Virtual Credit Cards") {
            let newItem = document.createElement("li")
            newItem.innerHTML = `<li class="product">
                                        <div id="content">
                                            <img src="./Images/Imagesss/${productData.ItemName}.png" alt="${productData.ItemName.split(" ")[0]} flag">
                                            <div class="control">
                                                <span class="item--name">${productData.ItemName}</span>
                                                <p class="item--price">₵${productData.Price}</p>
                                                <p class="${productData.InStock ? "in-stock" : "out-stock"}}">${productData.Status}</p>
                                                <span tabindex="0" class="add--area" onclick='addToCart(${JSON.stringify(productData)})'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>Add to Cart</span>
                                            </div>
                                        </div>
        
                                    </li>`
            document.querySelector(".products--virtual").appendChild(newItem)
        } else if (productData.ItemCategory === "Payment Cards") {
            let newItem = document.createElement("li")
            newItem.innerHTML = `<li class="product">
                                        <div id="content">
                                            <img src="./Images/Imagesss/${productData.ItemName}.png" alt="${productData.ItemName.split(" ")[0]} flag">
                                            <div class="control">
                                                <span class="item--name">${productData.ItemName}</span>
                                                <p class="item--price">₵${productData.Price}</p>
                                                <p class="${productData.InStock ? "in-stock" : "out-stock"}}">${productData.Status}</p>
                                                <span tabindex="0" class="add--area" onclick='addToCart(${JSON.stringify(productData)})'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>Add to Cart</span>
                                            </div>
                                        </div>
        
                                    </li>`
            document.querySelector(".products--payment").appendChild(newItem)
        }
    }
}

const product = document.querySelectorAll(".product")
const hideSelection = () => {
    selectedItemsPage.classList.remove("selected--item--page--show")
}



const selectItem = (productElement) => {
    let productData = yourData.data.find(item => item.ItemName === productElement.querySelector(".item--name").textContent);
    
    selectedItemsPage.getElementsByClassName("texts")[0].innerHTML = `
        <img src="./Images/Imagesss/${productData.ItemName}.png" alt="${productData.ItemName.split(" ")[0]} flag" id="selected--item--image">
        <h1 class="selected--item--name">
        ${productElement.querySelector(".item--name").textContent}
        </h1>
        <span class="selected--item--price">
        Price: ${productElement.querySelector(".item--price").textContent}
        </span>
        <span class="selected--item--quantity">
        Quantity: ${productData.Stock}
        </span>
    `;
    selectedItemsPage.getElementsByClassName("selected--items--buttons")[0].innerHTML = `
        <button class="cancel--selection" onclick='hideSelection()' id="selected--close--button">Cancel</button>
        <button class="add--selection" onclick='addToCart(${JSON.stringify(productData)})'>Add to Cart</button>
    `;
    selectedItemsPage.classList.add("selected--item--page--show");
};




for (let i = 0; i < product.length; i++) {
    product[i].getElementsByTagName("img")[0].addEventListener("click", () => {
        selectItem(product[i]);
    });
}


for (let j = 0; j < searchedList.length; j++) {
    searchedList[j].addEventListener("click", () => {
        let productData = yourData.data.find(item => item.ItemName === searchedList[j].textContent);
        
        selectedItemsPage.getElementsByClassName("texts")[0].innerHTML = `
            <img src="./Images/Countries/${imageVerify(productData.ItemName)}" alt="${productData.ItemName.split(" ")[0]} flag" id="selected--item--image">
            <h1 class="selected--item--name">
            ${searchedList[j].textContent}
            </h1>
            <span class="selected--item--price">
            Price: ${productData.Price}
            </span>
            <span class="selected--item--quantity">
            Quantity: ${productData.Stock}
            </span>
        `;
        selectedItemsPage.getElementsByClassName("selected--items--buttons")[0].innerHTML = `
            <button class="cancel--selection" onclick='hideSelection()' id="selected--close--button">Cancel</button>
            <button class="add--selection" onclick='addToCart(${JSON.stringify(productData)})'>Add to Cart</button>
        `
        
        ;
        selectedItemsPage.classList.add("selected--item--page--show")
    })
}

let numberOfItems= itemList.getElementsByTagName("li").length
if (numberOfItems > 0) {
    counterDisplay.forEach((counter) => {
        counter.style.background = "red";
        counter.textContent = numberOfItems;

    })
} else {
    counterDisplay.forEach((counter) => {
        counter.style.background = "#1F201F";
        counter.textContent = "0";
    })
}

searchBar.addEventListener("keyup", () => {
    if (searchBar.value === "" || searchBar.value === " ") {
        searchedList.style.display = "none";
        searchedList.innerHTML = "";
    } else {
        let searchValue = searchBar.value.toLowerCase();
        searchedList.innerHTML = "";
        let found = false;
        for (let i = 0; i < yourData.data.length; i++) {
            let productName = yourData.data[i].ItemName.toLowerCase();
            if (productName.includes(searchValue)) {
                found = true;
                let listItem = document.createElement("li");
                listItem.className = "searched--item";
                let itemName = document.createElement("span");
                itemName.className = "item--name";
                itemName.textContent = yourData.data[i].ItemName;
                let itemPrice = document.createElement("span");
                itemPrice.className = "item--price";
                itemPrice.textContent = `₵${yourData.data[i].Price}`;
                listItem.appendChild(itemName);
                listItem.appendChild(itemPrice);
                listItem.addEventListener("click", () => {
                    searchBar.value = itemName.textContent;
                    searchedList.style.display = "none";
                    selectItem(listItem);
                });
                searchedList.appendChild(listItem);
            }
        }
        searchedList.style.display = found ? "flex" : "none";
    }
})



