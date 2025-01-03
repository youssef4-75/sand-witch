let __Pointer;

function InitializeRecord(state) {
    const pointer = document.getElementById("the-game-pointer");
    pointer.style.setProperty("--max-points", getRecord())
    __Pointer = state;
}


function getRecord() {
    if (a = localStorage.getItem("Record")) {
        return a;
    }
    return 1;
}

function setRecord() {
    let p = __Pointer.currPoints;
    if (p < getRecord()) { return }
    localStorage.setItem("Record", __Pointer.currPoints);
}

function getPoint(state) {
    state.currPoints++;
    displayCurrentPoint(state.currPoints);
}


function displayCurrentPoint(p) {
    const pointer = document.getElementById("the-game-pointer");
    pointer.style.setProperty("--current-points", p);

}