document.getElementById("myForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passError = document.getElementById("passError");
    let success = document.getElementById("success");

    nameError.textContent = "";
    emailError.textContent = "";
    passError.textContent = "";
    success.textContent = "";

    let valid = true;

    if (name === "") {
        nameError.textContent = "Name required";
        valid = false;
    }

    if (!email.includes("@")) {
        emailError.textContent = "Valid email required";
        valid = false;
    }

    if (password.length < 6) {
        passError.textContent = "Min 6 characters";
        valid = false;
    }

    if (valid) {
        success.textContent = "Form submitted successfully!";
    }

});