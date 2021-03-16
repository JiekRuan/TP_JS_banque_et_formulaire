document.addEventListener("DOMContentLoaded", () => {
    console.log("bank !");

    let printOut = document.querySelector('p');
    let somme = parseInt(prompt("Faites votre retrait"));
    let confirmer = confirm("Voulez-vous confirmer votre retrait ?");
    let solde = 1000 - somme;
    let warning = document.querySelector(".warning");

    if (somme >= 20 && somme <= 100) {
        if (confirmer) {
            printOut.innerText += `Votre retrait est de : ${somme}€`;
            printOut.innerHTML += ` <br> Votre nouveau solde est : ${solde}€`;
            warning.classList.add("success");
            warning.classList.remove("warning");
        } else {
            warning.innerText += `Opération annulée`;
        }
    } else if (!somme) {
        alert("Veuillez saisir une somme");
        document.location.reload();
    } else if (montant == "") {
        alert("Votre retrait doit être entre 20€ et 100€");
        document.location.reload();
    } else {
        alert("Veuillez saisir des chiffres");
        document.location.reload();
    }
});