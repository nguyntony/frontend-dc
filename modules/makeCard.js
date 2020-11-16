
export const makeCard = (trails) => {
    let parsedTrails = JSON.parse(trails)
    console.log(parsedTrails)

    const body = document.querySelector("body");

    parsedTrails.trails.forEach((trail) => {
        console.log(trail)
        let card = document.createElement("div")
        card.className = "card"

        // name of trail
        let h3 = document.createElement("h3")
        card.append(h3)
        h3.innerText = trail.name;

        //star rating
        let starRating = Math.round(trail.stars)     //Math.round(insert stars rating from parsed data here) 

        for(let i=0; i < starRating; i++){
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
        difficulty.append(color)
        color.style.display = "inline-block"
        color.style.backgroundColor = trail.difficulty;
        color.style.width = "10px"
        color.style.height = "10px"
        color.style.borderRadius = "50%"

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
        body.append(card)
    })
}