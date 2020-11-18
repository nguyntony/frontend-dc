
export const makeCard = (trails) => {
    let parsedTrails = JSON.parse(trails)
    console.log(parsedTrails)


    const cardHolder = document.querySelector(".cardholder")
    const noResults = document.querySelector(".no-results")


    if (parsedTrails["trails"].length == 0) {
        noResults.innerText = "No results found for this area."
    } else {
        noResults.innerText = ""
        cardHolder.classList.toggle("hidden")
    }



    parsedTrails.trails.forEach((trail) => {
        console.log(trail)

        // creating each card
        let card = document.createElement("div")
        card.classList.add("card")


        // name of trail
        let h3 = document.createElement("h3")
        card.append(h3)
        h3.innerText = trail.name;


        // location
        let h4 = document.createElement("h4")
        card.append(h4)
        h4.innerText = trail.location;


        //star rating
        let starRating = Math.round(trail.stars)
        for (let i = 0; i < starRating; i++) {
            let starChecked = document.createElement("span")
            starChecked.className = "fa fa-star checked"
            card.append(starChecked);
        }


        // trail length
        let length = document.createElement("p")
        card.append(length)
        length.innerText = `Length: ${trail.length} miles`


        // trail difficulty
        let difficulty = document.createElement("p")
        card.append(difficulty)
        difficulty.className = "difficulty"
        difficulty.innerText = "Difficulty"
        let color = document.createElement("span")
        let img = document.createElement("img")
        img.src = `../styles/images/${trail.difficulty}.PNG`
        img.style.width = "15px"
        color.append(img)
        difficulty.append(color)


        // trail summary
        let pSummary = document.createElement("p")
        card.append(pSummary)
        pSummary.innerText = trail.summary;
        pSummary.className = "summary"


        // visit website button
        let trailUrl = document.createElement("a")
        trailUrl.href = trail.url
        trailUrl.target = "_blank"
        trailUrl.innerText = "Visit Website"
        let button = document.createElement("button")
        button.append(trailUrl)
        card.append(button)


        // adding the card to the dom
        cardHolder.append(card)
    })
}