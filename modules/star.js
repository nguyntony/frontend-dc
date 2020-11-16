
let starRating = Math.round(3.7) //insert parsed data from stars attribute here
console.log(starRating)



//atttribute "stars" from JSON data
//need to add to css: 
// .checked {
//   color: orange;
// }

const makeStar = (star) => {
    let starChecked = document.createElement("span")
    card.append(starChecked)
    starChecked.className = "fa fa-star checked"
    
    let starNotChecked = document.createElement("span")
    card.append(starNotChecked)
    starNotChecked.className = "fa fa-star"

    i=0;
    while(i<starRating){
        card.append(starChecked);
        i++
    }
}





// <h2>Star Rating</h2>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star"></span>
// <span class="fa fa-star"></span>