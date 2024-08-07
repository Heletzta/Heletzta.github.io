function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;

}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}


function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__mesaage--success", "form__message--error");
    messageElement.classList.add('form__message--${type}');
}


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        createAccountForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        setFormMessage(loginForm, "error", "Invalid username/ password combination");

    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id == "SignUpUsername" && e.target.value.length > 0 && e.target.value.length < 7) {
                setInputError(inputElement, "Username must be at least 7 characters in length");
            }
            
        });

        inputElement.addEventListener("input", e=> {
            clearInputError(inputElement);
        });
    });
});

