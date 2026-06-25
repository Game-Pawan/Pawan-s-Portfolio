document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-remain');
    const navLinks = document.querySelectorAll('.nav-links li a');

    if (menuToggle && navMenu) {
        // Toggle mobile slide menu layout panel open/closed
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Auto-collapse slide menu panel when any link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});





// Initialize EmailJS
emailjs.init("__ytpktHvf4BykAg6");

// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_94fk1gv",
        "template_f7pzml8",
        this
    )
        .then(function () {

            alert("✅ Message sent successfully!");

            contactForm.reset();

        })
        .catch(function (error) {

            console.error(error);

            alert("❌ Failed to send message.");

        });

});