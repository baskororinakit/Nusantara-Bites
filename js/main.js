const menuList = document.getElementById("menu-list");
const listIcon = document.getElementById("list-icon");
const menuLinks = document.querySelectorAll("a");


listIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
    menuList.classList.toggle("hidden");
    listIcon.classList.toggle("open");
});


menuLinks.forEach(link => {
    link.onclick = function(e) {
        const href = link.getAttribute("href");
        if (href && href[0] === "#") {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
            menuList.classList.remove("show");
            menuList.classList.add("hidden");
            listIcon.classList.remove("open");
        }
    };
});

// Handle contact form submission with validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Use built-in form validation
        if (!contactForm.checkValidity()) {
            // Show browser validation messages
            contactForm.reportValidity();
            return;
        }

        // All fields valid — show SweetAlert and clear the form
        if (typeof swal === 'function') {
            swal({
                title: 'Berhasil!',
                text: 'Pesan berhasil dikirim',
                icon: 'success',
                button: true
            });
        } else {
            // Fallback if SweetAlert isn't loaded
            alert('Pesan berhasil dikirim');
        }

        contactForm.reset();
    });
}