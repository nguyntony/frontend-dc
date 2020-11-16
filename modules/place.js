import ajax from "./ajax.js";
import { google_api_key, corsFix } from "../config.js"

export let google = ajax(corsFix + `AIzaSyDalbPmW4QbIZb913EPmkGud6TsA6QsUjk=${google_api_key}`,)