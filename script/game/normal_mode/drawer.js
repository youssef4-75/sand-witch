const Ingredient = [
    ["Bread", "#f39c12"],
    ["Meat", "#e74c3c"],
    ["Cheese", "#f1c40f"],
    ["Lettuce", "#27ae60"],
    ["Tomate", "#c22f33"]
]




function drawHeader_NM(state) {
    res = `
    <div id="meta-data">
        <div id="the-game-timer"></div>
        <div id="the-max-pointer" >
            <div id="the-game-pointer" 
                style="--max-points:${state.maxPoint};
                    --current-points:${state.currPoints}">
            </div>
        </div>
        </div>
    <h1 id="the-game-text">Bread</h1>
`

    write("game-header", res);

}


function drawCore_NM(state) {

    res = `
    <div id="sandCont">
        <div id="sandwitch">
            <!-- *-* -->

        </div>
    </div>
`

    write("game-core", res);

}


function drawConsole_NM(state) {
    let res = ``;
    R = [];
    for (A of Ingredient) {
        R.push(A)
    }

    R = shuffleArray(R);
    for ([ing_name, color] of R) {
        res += `
        <button class="action-btn" value="${ing_name}"  id="${ing_name}" 
            onclick="selectIngred('${ing_name}')" 
            style="--color:${color}">${ing_name}</button>
`
    }

    write("game-console", res);

}


function drawScene_NM(state) {
    drawHeader_NM(state);
    drawCore_NM(state);
    drawConsole_NM(state);
}


function drawSandwich(state) {
    const area = document.getElementById("sandwitch");
    area.innerHTML = ``;
    let res = ``;
    for (block of genBlocks(state)) {
        res = block + res;
    }
    area.innerHTML = res;
}


function* genBlocks(state) {

    if (state.sandwich.length > 0) {
        yield `
        <div id="down-bread"></div>
        `;

    }
    let i = 1;

    for (i = 1; i < state.sandwich.length - 1; i++) {
        element = state.sandwich[i];
        yield `
        <div id="${element.toLowerCase()}"></div>
        `;
    }
    element = state.sandwich[i];

    if (element == Ingredient[0][0]) {
        yield `
        <div id="upper-bread"></div>
        `;
    } else if (element != undefined) {
        yield `
        <div id="${element.toLowerCase()}"></div>
        `;
    }
}


function shuffleArray(R) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}