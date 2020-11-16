


let starRating = Math.round(trail.stars)


for(let i=0; i < starRating; i++){
    let starChecked = document.createElement("span")
    starChecked.className = "fa fa-star checked"
    card.append(starChecked);
}





// <h2>Star Rating</h2>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star"></span>
// <span class="fa fa-star"></span>