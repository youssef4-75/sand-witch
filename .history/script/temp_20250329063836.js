

let box = ``;

function add(block) {
    const container = document.getElementById(`container`);
    container.innerHTML = block;
}


function addChoice(List) {
    let res = ``;
    for (let i = 0; i < List.size(); i++) {
        res += `<select class="selectBox">
        <option value="${i}">${List[i]}</option>`;
    }
    res += `
    </select>`;
    add(res);

}

function ModeIcon(mode) {
    res += `
<div class="mode" style="--value: ${mode.color}" onclick="run(${mode.name})">
<img src="static/${mode.img_src}" alt="">
<div class="text">
    <p>${mode.name}</p>
    <h3>
        ${mode.description}
    </h3>
</div>
</div>
`
    add(res);
}



