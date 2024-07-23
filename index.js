let cntHome = 0, cntAway = 0;

let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");

let quater = 0;

function homePoints(n) {
    n = Number(n);
    cntHome += n;
    homeScore.textContent = cntHome;
}

function awayPoints(n) {
    n = Number(n);
    cntAway += n;
    awayScore.textContent = cntAway;
}

document.getElementById("reset").addEventListener('click', function() {

    results();
    cntHome = 0;
    cntAway = 0;
    homeScore.textContent = cntHome;
    awayScore.textContent = cntAway;
})

let res = document.getElementById("results");

function results() {
    if (cntHome > cntAway) {
        alert("Home WON!")
        res.textContent = `Home won with ${cntHome} points`;
    } else if (cntHome < cntAway) {
        alert("Away WON!")
        res.textContent = `Away won with ${cntAway} points`;
    } else if (cntAway === 0 && cntHome === 0){
        alert("Start the match")
        res.textContent = ``;
    } else {
        alert("Match Draw!")
        res.textContent = `Match draw`;
    }
}