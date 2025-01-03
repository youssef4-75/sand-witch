function appearPopUp() {
    setOpacity(1)
}

function back() {
    setOpacity(0);
    clear();
    reviveButtons();
}


function showMode() {
    listMode.forEach(e => {
        e.ModeIcon();
    })
}


function showAccount() {
    showPerson();
    showMaxPoints();
    showZoneToWriteYourDescription();
};

function showPerson() {
    res = `
    <div>
        <div id="data">
            <div id="div-for-img">
                <img src="static/accIcon.png" alt="" id="accImg">
            </div>
            <div id="written-data">
                <h3 id="name">Eiean</h1>
                <h4 id="status">a Player</h2>
            </div>
        </div>
        <p id="descriptif">something to be writen here, doesnt matter at this point</p>
    </div>
`
    write("container", res)
}