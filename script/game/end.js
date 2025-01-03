let modeName;


function EndSession(state, type) {
    state.canAdd = false;
    clearInterval(interID);
    notify(type, state.currPoints);
}


function notify(msg, points) {
    switch (msg) {
        case `you ended`:
            mM = `You won! 🎉`;
            sM = `that was DELICIOUS!!! :)`;
            p = points;
            break;
        case `you lost`:
            mM = `That was surely a mistake`;
            sM = `dont worry, you can make it next time`;
            p = 0;
            break;
        case `timeEnded`:
            mM = `you were a little bit too late`;
            sM = `dont worry, you can make it next time`;
            p = 0;
    }


    createScreen(mM, sM, p);

}


function createScreen(mainMessage, secondaryMessage, myPoints) {
    const layer = document.getElementById("popUps");
    layer.style.opacity = 1;
    layer.style.visibility = "visible";
    const mainMsg = document.getElementById("main-text");
    const nmainMsg = document.getElementById("non-main-text");
    mainMsg.innerHTML = mainMessage;
    nmainMsg.innerHTML = secondaryMessage;

    const mPoints = document.getElementById("my-points");
    const Record = document.getElementById("the-best");

    mPoints.innerHTML = `point: ${myPoints}`;
    Record.innerHTML = `record: ${getRecord()}`;

}

function clearNotif() {
    const layer = document.getElementById("popUps");
    layer.style.opacity = 0;
    layer.style.visibility = "hidden";
}


function restartGame() {
    const mode = getCurrentMode();

    clearNotif();
    mode.launchGame(mode.state);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}