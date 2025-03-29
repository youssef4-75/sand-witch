
function setOpacity(n) {
    const popUp = document.getElementById(`popUp`);
    popUp.style.opacity = n;
    popUp.style.zIndex = n - 1;


    
function add(block) {
    const container = document.getElementById(`container`);
    container.innerHTML += block;
}

function clear() {
    const container = document.getElementById(`container`);
    container.innerHTML = ``;
}

function fill(block) {
    clear();
    add(block)
}


function _reviveButton(id, _function) {
    const button = document.getElementById(id);
    button.onclick = _function;
}

function reviveButtons() {
    for ([id, funct] of [
        ["start-game", startGame],
        ["account", goToAccount],
        ["description", showDescription]
    ]) {
        _reviveButton(id, funct);
    }
}