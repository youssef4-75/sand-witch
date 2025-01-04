const DELAY = 400;
let interID;


function runTimer(state) {
    interID = setInterval(() => { decrease(state) }, 1);
}

function set(state, time) {
    state.time = time;
}

function resetTime(state) {
    state.time = DELAY
}

function decrease(state) {
    if (state.time <= 0) {
        if (checkIngredient(SPECIALS[1])) {
            NextIngredient();
            return;
        }
        EndSession(state, `timeEnded`);
    }
    state.time--;
    updateChrono(state);

}

function updateChrono({ time }) {
    const chrono = document.getElementById("the-game-timer");
    let percent = Math.round(360 * (1 - time / DELAY))
    chrono.style.setProperty("--degree", `${percent}deg`)
}


