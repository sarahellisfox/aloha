document.addEventListener("DOMContentLoaded", function () {

    const subForm = document.getElementById("subForm");
    const email = document.getElementById("email");

    subForm.addEventListener("submit", function (e) {
        e.preventDefault();

        if (!email.checkValidity()) {
            alert("Please enter a valid e-mail");
        } else {
            alert("Thanks for subscribing!");
            email.value = "";
        }
    });
});

