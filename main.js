import { closeButton, closeInput } from "./modules/closebutton.js"
import ajax from "./modules/ajax.js"
import { googleUrl, hikingUrl } from "./config.js"
import { makeCard } from "./modules/makeCard.js"

export const userSearchButton = document.querySelector(".user-search")
export const cardHolderElement = document.querySelector('.cardholder');

export const userInput = (evt) => {

    let form = document.querySelector("#form")
    let location = document.querySelector(".user-location")
    let userLocation = location.value
    console.log(userLocation)
    evt.preventDefault();
    form.reset();

    ajax(googleUrl + `&query=${userLocation}`, (location) => {
        let parsedLocation = JSON.parse(location)
        console.log(parsedLocation)
        let userLat = parsedLocation.results[0].geometry.location.lat
        let userLng = parsedLocation.results[0].geometry.location.lng
        console.log(`${userLat}, ${userLng}`)

        ajax(hikingUrl + `&lat=${userLat}&lon=${userLng}&maxResults=5`, makeCard)
    })

}

userSearchButton.addEventListener("click", userInput)
closeButton.addEventListener("click", closeInput)
