import ajax from "./ajax.js";
import { google_api_key, corsFix } from "../config.js"

export let google = ajax(corsFix + `https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&key=${google_api_key}`)

//need to pass ${search} in place of 123+main+street in above url, removed extra '=' from before api key insertion