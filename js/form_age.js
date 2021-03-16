document.addEventListener("DOMContentLoaded", () => {
    console.log("salut");
    let warning, age, prenom;
    date = new Date();
    let submit = document.getElementsByTagName("input")[2];

    const User = {
        construct(age, prenom) {
            this.age = age;
            this.prenom = prenom;
        },
        printOut() {
            let target = `${this.age} ${this.prenom}`;
            return target;
        }
    };
    submit.addEventListener("click", event => {
        event.preventDefault();
        warning = document.querySelector(".warning");
        age = document.getElementsByTagName("input")[0];
        prenom = document.getElementsByTagName("input")[1];
        let user_1 = Object.create(User);
        if (!age && !prenom) {
            warning.innerText = "Champs vide ou votre âge n'est pas un nombre";
            warning.classList.add('warning');
        } else {

            warning.innerText = `Bonjour ${prenom}, vous êtes né(e) en ${date.getFullYear()}`;
            warning.classList.add('success');
        }
    });
});