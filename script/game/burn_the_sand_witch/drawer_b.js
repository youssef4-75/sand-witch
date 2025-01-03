

function drawScene_BW(state) {
    drawHeader_BW(state);
    drawCore_BW();

}


function drawHeader_BW(state) {
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
    <h1 id="the-game-text">Burn the SandWi[T]ch</h1>
`

    write("game-header", res);

}