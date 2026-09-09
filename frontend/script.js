console.log("JavaScript is working!");
// ===============================
// ACTIVE PAGE NAVIGATION
// ===============================

const currentPage =
    window.location.pathname.split("/").pop();

const navigationLinks =
    document.querySelectorAll("nav a");

navigationLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");

    if (linkPage === currentPage) {

        link.classList.add("active");

    }

});
// ===============================
// SCROLL TO TOP
// ===============================

const scrollTopButton =
    document.getElementById("scroll-top-button");

if (scrollTopButton) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            scrollTopButton.classList.add("show");

        } else {

            scrollTopButton.classList.remove("show");

        }

    });


    scrollTopButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
// ===============================
// DARK MODE
// ===============================

const themeButton = document.getElementById("theme-button");

if (themeButton) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-theme");

        themeButton.textContent = "☀️";
        themeButton.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    }

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {

            themeButton.textContent = "☀️";

            themeButton.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

            localStorage.setItem("theme", "dark");

        } else {

            themeButton.textContent = "🌙";

            themeButton.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

            localStorage.setItem("theme", "light");

        }

    });

}
// ===============================
// MOBILE NAVIGATION
// ===============================

const menuButton = document.getElementById("menu-button");
const mainNav = document.getElementById("main-nav");

if (menuButton && mainNav) {

    // Open and close the menu
    menuButton.addEventListener("click", function () {

        mainNav.classList.toggle("active");

        if (mainNav.classList.contains("active")) {

            menuButton.textContent = "✕";

            menuButton.setAttribute(
                "aria-label",
                "Close navigation menu"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );

        } else {

            menuButton.textContent = "☰";

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    // Close menu after clicking a navigation link
    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");

            menuButton.textContent = "☰";

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    // Close menu when clicking outside navigation
    document.addEventListener("click", function (event) {

        if (
            !mainNav.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            mainNav.classList.remove("active");

            menuButton.textContent = "☰";

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

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
// ===============================
// TYPING ANIMATION
// ===============================

const typingText = document.getElementById("typing-text");

if (typingText) {

    const roles = [
        "AI & Machine Learning Developer",
        "Python Developer",
        "Full Stack Developer",
        "AI Engineer"
    ];

    let roleIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;

    function typeRole() {

        const currentRole = roles[roleIndex];

        if (isDeleting) {

            typingText.textContent =
                currentRole.substring(0, characterIndex);

            characterIndex--;

        } else {

            typingText.textContent =
                currentRole.substring(0, characterIndex);

            characterIndex++;

        }

        let typingSpeed = isDeleting ? 60 : 100;

        if (!isDeleting && characterIndex > currentRole.length) {

            isDeleting = true;

            typingSpeed = 1500;

        }

        else if (isDeleting && characterIndex < 0) {

            isDeleting = false;

            characterIndex = 0;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

            typingSpeed = 500;

        }

        setTimeout(typeRole, typingSpeed);

    }

    typeRole();

}
// ===============================
// SHOW MORE / SHOW LESS
// ===============================
const aboutButton = document.getElementById("about-button");
const moreAbout = document.getElementById("more-about");

if (aboutButton && moreAbout) {
  aboutButton.addEventListener("click", function () {
    if (moreAbout.classList.contains("hidden")) {
      moreAbout.classList.remove("hidden");
      aboutButton.textContent = "Show Less";
    } else {
      moreAbout.classList.add("hidden");
      aboutButton.textContent = "Show More";
    }
  });
}
