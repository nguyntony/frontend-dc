

const makeCard = (trail)=>{
    let card = document.createElement("div")
    card.className = "card"
    let name = document.createElement("h3")
    name.className = "trail_name"
    name.innerText = `${trail.name}:`
    let summary = document.createElement("p")
    summary.innerText = `${trail.summary}:`
    summary.className = "summary"

    remove.addEventListener("click", (evt)=>{
        console.dir(evt.target)
        evt.target.parentNode.parentNode.removeChild(evt.target.parentNode)
    })
    card.append(name,summary)
    root.append(card)
}