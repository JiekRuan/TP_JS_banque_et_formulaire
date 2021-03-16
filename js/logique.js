document.addEventListener("DOMContentLoaded", () => {
    console.log("salut");
    let enfant, text, lang_list;
    enfant = prompt("Avez-vous des enfant ?");
    printOut = document.querySelector("section");

    if (enfant == "non") {
        printOut.innerText = `Eh bien alors, vous n'avez pas d'enfants ?`;
    }
    if (enfant == "oui") {
        console.log("Vous avez des enfants, Bravo!");
    } else {}
});