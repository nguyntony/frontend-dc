import {cardHolderElement} from "./form.js"

export const closeButton = document.querySelector(".close")
export const closeInput = (evt) => {
    const cards = document.querySelectorAll(".card")
    //cardHolderElement.innerHTML = '';
    cardHolderElement.remove(cards)
    cardHolderElement.classList.toggle("hidden")
}
closeButton.addEventListener("click", closeInput)

