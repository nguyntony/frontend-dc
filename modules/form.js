import ajax from "./ajax.js"
import {corsFix, google_api_key} from "../config.js"
export const userSearchButton = document.querySelector(".user-search")

export const userInput = (evt) => {    let form = document.querySelector("#form")
    let location = document.querySelector(".user-location")
    let userLocation = location.value
    console.log(userLocation)
    evt.preventDefault();
    form.reset();

    ajax(corsFix + `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${userLocation}&key=${google_api_key}`, (location) => {
        let parsedLocation = JSON.parse(location)
        console.log(parsedLocation)
        let userLat = parsedLocation.results[0].geometry.location.lat
        let userLng = parsedLocation.results[0].geometry.location.lng
        console.log(`${userLat}, ${userLng}`)
    })
}

userSearchButton.addEventListener("click", userInput)