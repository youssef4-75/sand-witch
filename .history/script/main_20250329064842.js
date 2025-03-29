
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
    add(`<h1 id="description">
        The history of sandwiches traces back to 18th-century
        England, attributed to John Montagu, the fourth Earl 
        of Sandwich, who is said to have invented it to avoid
        leaving his gaming table. The concept evolved from 
        ancient fare to a global emblem of convenience, 
        influenced by cultural exchanges and technological 
        advancements. Over time, sandwiches have transformed into various forms, becoming a popular and portable food option worldwide. Today, they encompass a wide range of ingredients and styles, reflecting culinary innovation across different cultures.
        </h1>`);
}
