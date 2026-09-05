console.log("JavaScript is working!");
// ===============================
// MOBILE NAVIGATION
// ===============================

const menuButton = document.getElementById("menu-button");
const mainNav = document.getElementById("main-nav");

if (menuButton && mainNav) {

    menuButton.addEventListener("click", function () {

        mainNav.classList.toggle("active");

        if (mainNav.classList.contains("active")) {

            menuButton.textContent = "✕";
            menuButton.setAttribute("aria-label", "Close navigation menu");
            menuButton.setAttribute("aria-expanded", "true");

        } else {

            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Open navigation menu");
            menuButton.setAttribute("aria-expanded", "false");

        }

    });

}

// ===============================
// PROJECTS PAGE
// ===============================

const title = document.getElementById("projects-title");
const button = document.getElementById("change-button");

if (title && button) {

    button.addEventListener("click", function () {

        title.textContent = "Welcome to Abhilash's Projects";

    });

}


// ===============================
// ABOUT PAGE
// ===============================

const moreAbout = document.getElementById("more-about");
const aboutButton = document.getElementById("about-button");

if (moreAbout && aboutButton) {

    aboutButton.addEventListener("click", function () {

        moreAbout.classList.toggle("hidden");

        if (moreAbout.classList.contains("hidden")) {

            aboutButton.textContent = "Show More";

        } else {

            aboutButton.textContent = "Show Less";

        }

    });

}


// ===============================
// CONTACT PAGE
// ===============================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const messageError = document.getElementById("message-error");
        const formSuccess = document.getElementById("form-success");

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        formSuccess.textContent = "";

        let isValid = true;

        if (name.trim() === "") {

            nameError.textContent = "Please enter your name.";
            isValid = false;

        }

        if (email.trim() === "") {

            emailError.textContent = "Please enter your email.";
            isValid = false;

        }

        if (message.trim() === "") {

            messageError.textContent = "Please enter your message.";
            isValid = false;

        }

        if (isValid) {

            formSuccess.textContent = "Message sent successfully!";

            contactForm.reset();

        }

    });

}