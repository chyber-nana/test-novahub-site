const expandShrinkButton = document.getElementById("esb")
const sideBar = document.getElementById("sidebar")
const expandedLinks = document.getElementById("product--links").getElementsByTagName("li")
const shrinkedLinks = document.getElementById("shrinked-product--links").getElementsByTagName("li")
const cart = document.getElementById("cart")
const foreignPageAddButtons = document.querySelectorAll("#foreign--add")
const notificationPopup = document.querySelector(".notification")
const playText = document.querySelectorAll(".start")
let currentPage = null
let shrinkedPage = null
let productNumber = 0
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
        cart.innerHTML = `<span id="info">Products added will be shown here</span>
        <button class="send--button">Order</button>`
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




// addButton.addEventListener("click", () => {
//     addProduct("Moii")
// })