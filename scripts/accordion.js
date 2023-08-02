const accordions = document.querySelectorAll(".accordion-container");

accordions.forEach(function(accordion) {
    accordion.addEventListener("click", function() {
        const data = this.nextElementSibling;
        data.classList.toggle("show");
        const icon = this.querySelector("i");
        icon.classList.toggle("animate");
    });
});
