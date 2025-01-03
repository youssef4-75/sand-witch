let mName;


function run(modeName) {
    redirect();  // done
    const mode = getModeFromName(modeName);
    mName = modeName;
    mode.launchGame(mode.state);

}


function getCurrentMode() {
    return getModeFromName(mName);
}
