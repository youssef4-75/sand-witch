let __Bridge;
var counterProba = 0;
const SPECIALS = [
    "Anything",
    "Nothing",
    "Destroy",
]



function genRanList(size, range, offset) {
    L = [];
    for (let _ = 0; _ < size; _++) {
        L.push(offset + Math.random() * range)
    }
    return L;
}

function getProba() {
    return Math.min(2 * (1 / (1 + Math.exp(-counterProba))) - 1, .3);
}

function getIngrediant(index) {
    if (index < Ingredient.length) return Ingredient[index][0]
    return SPECIALS[index - Ingredient.length];

}

function InitializeSandwich(state) {
    __Bridge = state;
}

function showNextIngredient(state) {
    let rColor1 = 1 + Math.floor(Math.random() * (Ingredient.length - 1));
    color1 = Ingredient[rColor1][1];
    do {
        let rColor2 = 1 + Math.floor(Math.random() * (Ingredient.length - 1));
        color2 = Ingredient[rColor2][1];
    }
    while (color2 == color1)

    do {
        let rIndex = 1 + Math.floor(Math.random() * (Ingredient.length + SPECIALS.length - 1));
        state.currentIngredient = getIngrediant(rIndex) // Ingredient[rIndex][0];
    } while (
        state.currentIngredient == state.lastIngred
    )
    state.lastIngred = state.currentIngredient;
    write("the-game-text", state.currentIngredient, color1, color2);
}

function moveButton(button) {
    if ("translated" in button) {
        button.style.translate = null;
        delete button.translated;
    } else if ( counterProba > 20 && Math.random() < getProba()) {
        button.translated = true;
        let new_x = -200 + Math.random() * 400;
        let new_y = -200 + Math.random() * 40;
        button.style.translate = `${new_x}px ${new_y}px`;

        return true;
    }
}

function checkIngredient(ing_name) {
    return (ing_name == "Bread" ||
        __Bridge.currentIngredient == SPECIALS[0] ||
        __Bridge.currentIngredient == ing_name)
}

function NextIngredient() {
    showNextIngredient(__Bridge);
    getPoint(__Bridge);
    resetTime(__Bridge);
    __Bridge.started = true;
}

function selectIngred(Ingredient) {
    if (!__Bridge.canAdd) {
        return;
    }
    counterProba++;

    const button = document.getElementById(Ingredient);
    if (moveButton(button)) { return }

    fillSandwich(__Bridge, Ingredient);
    
    if (Ingredient == "Bread" && __Bridge.started) {
        EndSession(__Bridge, `you ended`);
        setRecord();
    }
    else if (checkIngredient(Ingredient)) {
        NextIngredient();
    }
    else if(__Bridge.currentIngredient == SPECIALS[2]){
        __Bridge.sandwich.pop();
        let i = __Bridge.sandwich.lastIndexOf(Ingredient);
        if(i>0){
            __Bridge.sandwich.splice(i, 1);
        }
        NextIngredient();

    }
    else {
        __Bridge.sandwich.pop();
        EndSession(__Bridge, `you lost`);
    }
    drawSandwich(__Bridge);

}


function fillSandwich(state, Ingredient) {
    state.sandwich.push(Ingredient);
}

