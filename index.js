let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScoreVal = parseInt(homeScoreEl.textContent)
let guestScoreVal = parseInt(guestScoreEl.textContent)



function incrementHome1() {
    homeScoreVal += 1
    homeScoreEl.textContent = homeScoreVal
}
function incrementHome2() {
    homeScoreVal += 2
    homeScoreEl.textContent = homeScoreVal
}
function incrementHome3() {
    homeScoreVal += 3
    homeScoreEl.textContent = homeScoreVal
}


function incrementGuest1() {
    guestScoreVal += 1
    guestScoreEl.textContent = guestScoreVal
}
function incrementGuest2() {
    guestScoreVal += 2
    guestScoreEl.textContent = guestScoreVal
}
function incrementGuest3() {
    guestScoreVal += 3
    guestScoreEl.textContent = guestScoreVal
}