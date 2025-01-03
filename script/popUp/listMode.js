let listMode = [
    new Mode(`Normal game`, `red.jpg`, `the normal mode,you`, `red`, launchGame_NM),
    new Mode(`free game`, `red.jpg`, `you make what you want`, `blue`, launchGame_BW),
    // new Mode(`other game`, `red.jpg`, `filler`, `black`),
]


function getModeFromName(modeName) {
    for (mode of listMode) {
        if (mode.name == modeName) {
            return mode
        }
    }
}