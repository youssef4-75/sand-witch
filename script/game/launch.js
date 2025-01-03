let mName;


function run(modeName) {
    redirect();  // done
    const mode = getModeFromName(modeName);
    mName = modeName;
    try{mode.launchGame(mode.state);}
    catch(error){
        window.location.href = mode.link
    }

}


function getCurrentMode() {
    return getModeFromName(mName);
}
