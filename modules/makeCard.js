
export const makeCard = (trails) => {
    let parsedTrails = JSON.parse(trails)
    console.log(parsedTrails)

    const body = document.querySelector("body");
    const cardHolder = document.querySelector(".card-holder")

    if (parsedTrails["trails"].length == 0) {
        let noResults = document.createElement("div")
        noResults.className = "no-results"
        noResults.innerText = "No results found for this area."
        cardHolder.append(noResults)
        console.log(parsedTrails["trails"].length)
    }

    parsedTrails.trails.forEach((trail) => {
        console.log(trail)


        let card = document.createElement("div")
        card.className = "card"


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
        difficulty.innerText = "Difficulty  "
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


        // visit website button
        let trailUrl = document.createElement("a")
        trailUrl.href = trail.url
        trailUrl.innerText = "Visit Website"
        let button = document.createElement("button")
        button.append(trailUrl)
        card.append(button)


        // adding the card to the dom
        cardHolder.append(card)
    })
}