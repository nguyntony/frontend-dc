// const makeCard = (trail) => {
//     let card = document.createElement("div")
//     card.className = "card"
//     let name = document.createElement("h3")
//     name.className = "trail_name"
//     name.innerText = `${trail.name}:`
//     let summary = document.createElement("p")
//     summary.innerText = `${trail.summary}:`
//     summary.className = "summary"

//     remove.addEventListener("click", (evt) => {
//         console.dir(evt.target)
//         evt.target.parentNode.parentNode.removeChild(evt.target.parentNode)
//     })
//     card.append(name, summary)
//     root.append(card)
// }

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


        // trail summary
        let pSummary = document.createElement("p")
        card.append(pSummary)
        pSummary.innerText = trail.summary;


        // trail length
        let length = document.createElement("p")
        card.append(length)
        length.innerText = `Length: ${trail.length} miles`


        // trail difficulty
        let difficulty = document.createElement("p")
        card.append(difficulty)
        difficulty.innerText = "Difficulty"

        let color = document.createElement("span")
        difficulty.append(color)
        color.setAttribute("style", `background-color: ${trail.difficulty}`)

        body.append(card)
    })
}