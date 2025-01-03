let __Bridge;


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
        let rIndex = 1 + Math.floor(Math.random() * (Ingredient.length - 1));
        state.currentIngredient = Ingredient[rIndex][0];
    } while (
        state.currentIngredient == state.lastIngred
    )
    state.lastIngred = state.currentIngredient;
    write("the-game-text", state.currentIngredient, color1, color2);
}


function selectIngred(Ingredient) {
    if (!__Bridge.canAdd) {
        return;
    }

    console.log(Ingredient);
    console.log(__Bridge.started);

    fillSandwich(__Bridge, Ingredient);

    if (Ingredient == "Bread" && __Bridge.started) {
        console.log(200)
        EndSession(__Bridge, `you ended`);
        setRecord()
    }

    else if (Ingredient == "Bread" ||
        __Bridge.currentIngredient == Ingredient) {

        showNextIngredient(__Bridge);
        getPoint(__Bridge);
        resetTime(__Bridge);
        __Bridge.started = true;
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

