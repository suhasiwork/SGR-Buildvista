/*=========================================
    COUNTER ANIMATION (home page only)
=========================================*/

const counters = document.querySelectorAll(".count");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const increment = target / 80;

            function updateCounter() {
                count += increment;

                if (count < target) {
                    counter.innerText = target === 100
                        ? Math.ceil(count) + "%"
                        : Math.ceil(count) + "+";
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target === 100 ? target + "%" : target + "+";
                }
            }

            updateCounter();
            counterObserver.unobserve(counter);
        }

    });

}, { threshold: 0.5 });

counters.forEach((counter) => counterObserver.observe(counter));
