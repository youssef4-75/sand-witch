
function startGame() {
    clear()
    appearPopUp();  // done
    showMode();  // done
}



function goToAccount() {
    clear();
    appearPopUp();
    showAccount();
    disableFunc("account");

}

function showDescription() {
    clear();
    appearPopUp();
    add(`<h1 id="description">Description</h1>`);
}
