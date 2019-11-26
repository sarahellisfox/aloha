document.addEventListener("DOMContentLoaded", function () {

    const email=document.getElementById("email");
        if (!email.checkValidity()) {
            alert("Please enter a valid e-mail");
        } else {
            alert("Thanks for subscribing!");
            email.value = null;
        }
});
