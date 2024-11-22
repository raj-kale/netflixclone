document.addEventListener("DOMContentLoaded", () => {
    // Scroll Animation for Content Rows
    const contentRows = document.querySelectorAll(".content-row");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    });

    contentRows.forEach((row) => {
        observer.observe(row);
    });

    // Carousel Interaction
    const carousels = document.querySelectorAll(".content-row");

    carousels.forEach((carousel) => {
        const items = carousel.querySelector(".content-row-items");
        const indicators = carousel.querySelectorAll(".carousel-indicators span");

        let currentIndex = 0;

        const updateCarousel = () => {
            indicators.forEach((ind, idx) => {
                ind.classList.toggle("active", idx === currentIndex);
            });

            const itemWidth = items.children[0].offsetWidth + 10; // 10px gap
            items.scrollLeft = currentIndex * itemWidth;
        };

        // Auto-scroll every 3 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % items.children.length;
            updateCarousel();
        }, 3000);

        indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", () => {
                currentIndex = index;
                updateCarousel();
            });
        });
    });

    // Button Interaction
    const startButton = document.querySelector(".start-button");

    startButton.addEventListener("click", () => {
        alert("Welcome to Netflix Clone! Please sign in to continue.");
    });

    // Dark Mode Toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.textContent = "Toggle Dark Mode";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.bottom = "20px";
    darkModeToggle.style.right = "20px";
    darkModeToggle.style.padding = "10px 20px";
    darkModeToggle.style.backgroundColor = "white";
    darkModeToggle.style.color = "black";
    darkModeToggle.style.border = "none";
    darkModeToggle.style.cursor = "pointer";

    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Search Functionality
    const searchBar = document.createElement("input");
    searchBar.setAttribute("type", "text");
    searchBar.setAttribute("placeholder", "Search...");
    searchBar.style.position = "fixed";
    searchBar.style.top = "20px";
    searchBar.style.right = "20px";
    searchBar.style.padding = "10px";
    searchBar.style.border = "2px solid white";
    searchBar.style.borderRadius = "5px";

    document.body.appendChild(searchBar);

    searchBar.addEventListener("input", (event) => {
        const query = event.target.value.toLowerCase();
        const images = document.querySelectorAll(".content-row-items img");

        images.forEach((img) => {
            const altText = img.alt.toLowerCase();
            img.style.display = altText.includes(query) ? "block" : "none";
        });
    });

        // FAQ Section Toggle
        const faqQuestions = document.querySelectorAll(".faq-question");

        faqQuestions.forEach((question) => {
            question.addEventListener("click", () => {
                const answer = question.nextElementSibling;
    
                // Toggle visibility
                answer.style.display = answer.style.display === "block" ? "none" : "block";
    
                // Change button appearance
                question.classList.toggle("active");
            });
        });
    

    // Star Rating Functionality
    const stars = document.querySelectorAll('.movie-rating .star');

    stars.forEach(star => {
        star.addEventListener('click', (e) => {
            const selectedIndex = e.target.getAttribute('data-index');
            updateStarRating(selectedIndex);
        });
    });

    function updateStarRating(selectedIndex) {
        stars.forEach(star => {
            const index = star.getAttribute('data-index');
            if (index <= selectedIndex) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }
});
