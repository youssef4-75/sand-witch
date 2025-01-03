class Mode {
    constructor(name, img_src, description, color, lG, link, css) {
        this.name = name;
        this.img_src = img_src;
        this.description = description;
        this.color = color;
        this.launchGame = lG
        this.state = {};
        this.link = link;
        this.additionalCSS = css;
    }

    ModeIcon() {
        console.log(this.additionalCSS);
        let res = `
    <div class="mode" style="--value: ${this.color}; ${this.additionalCSS}" onclick="run('${this.name}')">
    <img src="static/${this.img_src}" alt="">
    <div class="text">
        <p>${this.name}</p>
        <h3>
            ${this.description}
        </h3>
    </div>
    </div>
    `;
        add(res);
    }

}
