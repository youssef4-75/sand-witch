
function setState_NM(state) {
    state.currPoints = 0;
    state.maxPoint = getRecord();
    state.time = 4000;
    state.sandwich = [];
    state.lastIngred = ``;
    state.currentIngredient = ``;
    state.started = false;
    state.canAdd = true;

}