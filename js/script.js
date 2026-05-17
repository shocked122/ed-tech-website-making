document.addEventListener("DOMContentLoaded", function(){
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {

        const updateCounter = () => {

            const target = Number(counter.getAttribute('data-target'));

            const current = Number(counter.innerText);

            const increment = target / 100;

            if (current < target) {

                counter.innerText = Math.ceil(current + increment);

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });


    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function(){
            const isOpen = menu.classList.toggle("active");
            menuToggle.setAttribute("aria-expanded", isOpen);
        });

        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function(){
                menu.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }
});
