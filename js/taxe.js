document.addEventListener("DOMContentLoaded", () => {
    console.log("salut");
    let prix_1, prix_2, total, taxe, total_TTC;
    printOut = document.querySelector("section");

    prix_1 = parseInt(prompt("le prix 1"));
    prix_2 = parseInt(prompt("le prix 2"));

    total = prix_1 + prix_2;
    taxe = 0.196;
    taxe *= total;

    total_TTC = total + taxe;

    printOut.innerText += `Votre prix TTC est de ${total_TTC}`;
});