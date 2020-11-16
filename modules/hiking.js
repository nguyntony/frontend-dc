import ajax from "./ajax.js";
import {hiking_api_key, corsFix} from "../config.js"

export let hiking = ajax(corsFix + `https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=${hiking_api_key}`, (trails => {
    console.log(trails)
}))

