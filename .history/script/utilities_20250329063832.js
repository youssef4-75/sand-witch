

function disableFunc(id) {
    const button = document.getElementById(id);
    button.onclick = () => { };
}


function redirect() {
    const a = document.getElementById("game-page");
    a.innerHTML = `

    <div id="main">
        <header id="game-header">
        </header>
        <div id="game-core">
 
        </div>
        <div id="game-console">
            <div>
            </div>
        </div>

    </div>

`;
    a.classList.remove("_");
}



function write(id, content, color, textC) {
    const bloc = document.getElementById(id);
    const c = bloc.innerHTML;
    bloc.innerHTML = content;
    if (color) {
        bloc.style.backgroundColor = color;
    }
    if (textC) {
        bloc.style.color = textC;
    }
    return c;
}