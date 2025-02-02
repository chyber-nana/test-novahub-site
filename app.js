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
        } else {    
            entry.target.classList.remove("section--play")
        }
    });
})

const section = document.querySelectorAll(".container--animated")
section.forEach((section) => observer.observe(section));
let cartList = []


const foreignSims = ["Australia SIM Cards",
                "Canada SIM Cards",
                "France SIM Cards",
                "Germany SIM Cards",
                "Lithuania SIM Cards",
                "Morocco SIM Cards",
                "Netherlands SIM Cards",
                "Poland SIM Cards",
                "Spain SIM Cards",
                "Sweden SIM Cards",
                "Switzerland SIM Cards",
                "Unites Kingdom SIM Cards",
                "Ukraine SIM Cards",
                "United States SIM Cards"]

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


const updateCart = (list) => {
    if (list.length === 0) {
        cart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 1.25 3 A 1.250125 1.250125 0 1 0 1.25 5.5 L 1.796875 5.5 C 1.9214018 5.5 2.0141793 5.574019 2.0410156 5.6953125 L 4.4316406 16.455078 C 4.760148 17.935789 6.0875402 19 7.6035156 19 L 18.75 19 A 1.250125 1.250125 0 1 0 18.75 16.5 L 7.6035156 16.5 C 7.2454911 16.5 6.9505395 16.263353 6.8730469 15.914062 A 1.250125 1.250125 0 0 0 6.8730469 15.912109 L 6.6699219 15 L 18.328125 15 C 19.856899 15 21.19278 13.918188 21.509766 12.423828 L 22.972656 5.5097656 A 1.250125 1.250125 0 0 0 21.75 4 L 3.9082031 4 C 3.3967732 3.3868132 2.6317903 3 1.796875 3 L 1.25 3 z M 4.7792969 6.5 L 20.207031 6.5 L 19.0625 11.904297 C 18.987486 12.257937 18.689351 12.5 18.328125 12.5 L 6.1132812 12.5 L 4.7792969 6.5 z M 8.5 20 A 1.5 1.5 0 0 0 8.5 23 A 1.5 1.5 0 0 0 8.5 20 z M 17.5 20 A 1.5 1.5 0 0 0 17.5 23 A 1.5 1.5 0 0 0 17.5 20 z"/></svg>`
    } else {
        document.getElementById("productsContent").innerHTML = ""
        // document.getElementById("info").innerHTML = "none"
        for (let i = 0; i < list.length; i++) {
            document.getElementById("productsContent").innerHTML += list[i]
        }
    }
}
updateCart(cartList)

const addProduct = (product) => {
    productNumber += 1
    if (cartList.length === 0) {
        cartList.push(`<div class="dummy--product">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" id="cancelButton"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            <div class="product--name">${product}</div>
        </div>`)
        cart.innerHTML = `<div id="productsContent"></div>
        <button id="order">Order</button>`
        
        
    } else {
        cartList.push(`<div class="dummy--product">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" id="cancelButton"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            <div class="product--name">${product}</div></div>`)
        }
        
    updateCart(cartList)
}

const removeProduct = (product) => {
    productNumber -= 1
    cartList.splice(product, 1)
    updateCart(cartList)
}

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


text = 0
t = 5000

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
        document.getElementById("sidebar").style.top = "-50rem"
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
            document.getElementById("sidebar").style.top = "-50rem"
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
    }, 500); // Adjust the delay as needed
});

// addButton.addEventListener("click", () => {
//     addProduct("Moii")
// })