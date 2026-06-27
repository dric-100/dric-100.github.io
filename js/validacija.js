document.addEventListener("DOMContentLoaded", () => {
    const forma = document.getElementById("kontaktForma");

    if (!forma) return;

    forma.addEventListener("submit", function (e) {

        const ime = document.getElementById("ime").value.trim();
        const email = document.getElementById("email").value.trim();
        const poruka = document.getElementById("poruka").value.trim();

        let greske = [];

        // Ime
        if (ime.length < 2) {
            greske.push("Ime mora imati najmanje 2 karaktera.");
        }

        // Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            greske.push("Unesite ispravnu email adresu.");
        }

        // Poruka
        if (poruka.length < 10) {
            greske.push("Poruka mora imati najmanje 10 karaktera.");
        }

        if (greske.length > 0) {
            e.preventDefault();
            alert(greske.join("\n"));
        } else {
            alert("Forma je uspešno validirana.");
        }

    });
});