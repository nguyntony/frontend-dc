export const userSearchButton = document.querySelector(".user-search")

export const userInput = (evt) => {
    let form = document.querySelector("#form")
    let location = document.querySelector(".user-location")
    let userLocation = location.value
    console.log(userLocation)
    evt.preventDefault();
    form.reset();
}

userSearchButton.addEventListener("click", userInput)