let email = document.getElementById("email");
let submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    e.preventDefault();
    validateEmail(email);
});
email.addEventListener("blur", function() {
    validateEmail(email);
});

function validateEmail(input) {
    let inputArea = input.parentElement;
    let errorMessage = inputArea.querySelector(".error-text");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input.value.trim() === "") {
        inputArea.classList.add("hasError");
        errorMessage.textContent = `Please provide an email address`;
    } else if (!emailPattern.test(input.value.trim())) {
        inputArea.classList.add("hasError");
        errorMessage.textContent = "Please provide a valid email address";
    } else {
        inputArea.classList.remove("hasError");
        errorMessage.textContent = "";
    }
}