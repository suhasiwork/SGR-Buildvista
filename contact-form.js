/*=========================================
    CONTACT FORM VALIDATION
=========================================*/

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        if (!form.checkValidity()) {
            e.preventDefault();
            form.reportValidity();
        }
    });
}
