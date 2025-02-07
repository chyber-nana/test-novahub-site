const socialsButton = document.getElementById("socials--button")
const socialsPage = document.querySelector(".socials--page--hidden")
const socialsCloseButton = document.getElementById("socials--close--button")


socialsButton.addEventListener("click", () => {
    socialsPage.classList.add("socials--page--show")
})

socialsCloseButton.addEventListener("click", () => {
    socialsPage.classList.remove("socials--page--show")
})