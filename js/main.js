const menuList = document.getElementById("menu-list");
const listIcon = document.getElementById("list-icon");
const menuLinks = document.querySelectorAll("a");

listIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
    menuList.classList.toggle("hidden");
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
        }
    };
});