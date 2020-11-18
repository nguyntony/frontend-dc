import { cardHolderElement } from "./form.js"

export const closeButton = document.querySelector(".close")
export const closeInput = () => {
    let cardsInCardHolder = document.querySelectorAll(".card")
    //cardHolderElement.innerHTML = '';
    // console.log(cards)
    // cardHolderElement.remove(cards)
    // cardsInCardHolder.parentNode.removeChild(cardsInCardHolder)
    // console.log(cardsInCardHolder)
    cardsInCardHolder.forEach((card) => {
        card.remove()
    })

    cardHolderElement.classList.toggle("hidden")
}
closeButton.addEventListener("click", closeInput)

