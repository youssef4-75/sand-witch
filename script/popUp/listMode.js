let listMode = [
    new Mode(`Sandwich Tower`, `mode_images/sandwich_tower.jpeg`, `made by Youssef Haddadi`, `#38e0a3`, launchGame_NM),
    new Mode(`burn The Witch`, `mode_images/burn_the_wich.jpeg`, `mode built with help of AI`, `#16529a`, ``, `https://youssef4-75.github.io/burn_the_witch`),
    new Mode(`Hasbulla Burger`, `mode_images/Hasbulla.jpeg`, `made by OTHMANE WINA`, `#f5e42a`, ``, `https://othmane-wina.github.io/sandwich-maker/`, `background: linear-gradient(to left, black, rgb(3, 18, 56));`),
    new Mode(`krabbypattymaker`, `mode_images/krabby_patty.jpg`, `made by Ertil Riyad`, `#08284b`, ``, `https://krabbypattymaker.vercel.app/HomePage.html`),
    new Mode(`Flapping Sandwitch`, `mode_images/flying_burger.jpeg`, `made by Yassine Lamsaaf`, `green`, ``, `https://yassinelamsaaf.github.io/SandwichMaker/flappySandwich/index.html`),
    new Mode(`sandwich sprint`, `mode_images/sandwich_sprint1.jpg`, `made by Mohammed Mehdi Bahri`, `#23C7E0`, ``, `https://itsmhido.github.io/sandwich-sprint/`),
    new Mode(`burger train`, `mode_images/sandwich_train.jpg`, `made by Mohsine Chkirida`, `#F0E68C`, ``, `https://mohssine-chkirida.github.io/Sandwich-Maker/`),
]


function getModeFromName(modeName) {
    for (mode of listMode) {
        if (mode.name == modeName) {
            return mode
        }
    }
}