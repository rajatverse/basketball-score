homeEl = document.getElementById('home-score')
awayEl = document.getElementById('away-score')

homeScore = 0
awayScore = 0

function homeButtonOne() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function homeButtonTwo() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function homeButtonThree() {
    homeScore += 3
    homeEl.textContent = homeScore
}

function awayButtonOne() {
    awayScore += 1
    awayEl.textContent = awayScore
}

function awayButtonTwo() {
    awayScore += 2
    awayEl.textContent = awayScore
}

function awayButtonThree() {
    awayScore += 3
    awayEl.textContent = awayScore
}