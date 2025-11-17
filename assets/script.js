function filterCategory(category) {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.style.display = category === "all" || card.dataset.category === category
            ? "block"
            : "none";
    });
}

function searchCards() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.style.display =
            card.innerText.toLowerCase().includes(query)
                ? "block"
                : "none";
    });
}

function switchTheme() {
    const theme = document.getElementById("themeSelect").value;
    document.body.className = theme;
}
