/* Wait until the page is ready */
document.addEventListener("DOMContentLoaded", () => {
    // Select page elements
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelectorAll(".nav-link");
    const typedRole = document.getElementById("typed-role");
    const currentYear = document.getElementById("current-year");
    const contactForm = document.getElementById("contact-form");
    const formNote = document.getElementById("form-note");
    const backToTop = document.getElementById("back-to-top");

    // Update the copyright year automatically
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    /* Mobile navigation */

    // Close the mobile navigation menu
    function closeMenu() {
        if (!sidebar || !menuToggle) return;

        sidebar.classList.remove("open");
        document.body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.innerHTML = '<i class="bi bi-list"></i>';
    }

    // Open and close the mobile navigation menu
    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            
            const isOpen = sidebar.classList.toggle("open");

            document.body.classList.toggle("menu-open", isOpen);
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            menuToggle.innerHTML = isOpen
                ? '<i class="bi bi-x-lg"></i>'
                : '<i class="bi bi-list"></i>';
        });

        // Close the menu after selecting a navigation link
        navLinks.forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        // Close the menu when Escape is pressed
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") closeMenu();
        });

        // Close the menu when clicking outside it
        document.addEventListener("click", (event) => {
            if (
                window.innerWidth <= 900 &&
                sidebar.classList.contains("open") &&
                !sidebar.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                closeMenu();
            }
        });

        // Close the mobile menu when returning to desktop width
        window.addEventListener("resize", () => {
            if (window.innerWidth > 900) closeMenu();
        });
    }

    /* Animated job titles */

    // Display different professional roles in the hero section
    if (typedRole) {
        const roles = [
            "Software Developer",
            "Web Developer",
            "Tech Enthusiast",
            "Problem Solver"
        ];

        let roleIndex = 0;
        let characterIndex = roles[0].length;
        let deleting = true;

        function typeRole() {
            const currentRole = roles[roleIndex];

            // Remove or add one character at a time
            characterIndex += deleting ? -1 : 1;

            typedRole.textContent = currentRole.substring(
                0,
                Math.max(0, characterIndex)
            );

            let delay = deleting ? 45 : 85;

            // Move to the next role after deleting the current one
            if (characterIndex <= 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                delay = 300;
            } else if (
                characterIndex >= roles[roleIndex].length &&
                !deleting
            ) {
                deleting = true;
                delay = 1500;
            }

            window.setTimeout(typeRole, delay);
        }

        // Start the typing animation after a short delay
        window.setTimeout(typeRole, 1800);
    }

    /* Active navigation links */

    // Find all main page sections that have an ID
    const sections = document.querySelectorAll("main section[id]");

    // Highlight the navigation link for the visible section
    if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;

                        navLinks.forEach((link) => {
                            link.classList.toggle(
                                "active",
                                link.getAttribute("href") === `#${sectionId}`
                            );
                        });
                    }
                });
            },
            {
                rootMargin: "-30% 0px -55% 0px",
                threshold: 0
            }
        );

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });
    }

    /* Project category filters */

    // Select the category buttons and project cards
    const projectFilters = document.querySelectorAll(".project-filter");
    const galleryProjects = document.querySelectorAll(".gallery-project");

    // Filter projects according to the selected category
    if (projectFilters.length > 0 && galleryProjects.length > 0) {
        projectFilters.forEach((button) => {
            button.addEventListener("click", () => {
                // Read the selected category from the button
                const selectedCategory = (
                    button.dataset.filter || "all"
                ).toLowerCase();

                // Update the active category button
                projectFilters.forEach((filterButton) => {
                    const isActive = filterButton === button;

                    filterButton.classList.toggle("active", isActive);
                    filterButton.setAttribute(
                        "aria-pressed",
                        String(isActive)
                    );
                });

                // Show projects matching the selected category
                galleryProjects.forEach((project) => {
                    // Support projects assigned to more than one category
                    const categories = (
                        project.dataset.category || "uncategorized"
                    )
                        .toLowerCase()
                        .split(",")
                        .map((category) => category.trim());

                    // The "all" category displays every project
                    const matchesCategory =
                        selectedCategory === "all" ||
                        categories.includes(selectedCategory);

                    // Update the project visibility classes
                    project.classList.toggle("hidden", !matchesCategory);
                    project.classList.toggle(
                        "filter-hidden",
                        !matchesCategory
                    );

                    // Keep the hidden state available to assistive technology
                    project.setAttribute(
                        "aria-hidden",
                        String(!matchesCategory)
                    );
                });
            });
        });
    }

    /* Reveal cards on scroll */

    // Select cards that should animate into view
    const revealTargets = document.querySelectorAll(
        ".stat-card, .skill-card, .resume-item, .leadership-card, " +
        ".gallery-project, .interest-item, .contact-card, .testimonial-slide"
    );

    // Reveal each card when it enters the viewport
    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.08
            }
        );

        revealTargets.forEach((element) => {
            element.classList.add("reveal");
            revealObserver.observe(element);
        });
    } else {
        // Display all cards if IntersectionObserver is unavailable
        revealTargets.forEach((element) => {
            element.classList.add("visible");
        });
    }

    /* Back-to-top button */

    // Show the button after scrolling down the page
    function updateBackToTop() {
        if (backToTop) {
            backToTop.classList.toggle("visible", window.scrollY > 450);
        }
    }

    // Update the button when the visitor scrolls
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    updateBackToTop();

    // Return to the top when the button is clicked
    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* Testimonials carousel */

    // Select the carousel and its controls
    const carousel = document.getElementById("testimonial-carousel");
    const track = document.getElementById("testimonial-track");
    const previousButton = document.getElementById("testimonial-prev");
    const nextButton = document.getElementById("testimonial-next");
    const dotsContainer = document.getElementById("testimonial-dots");

    if (
        carousel &&
        track &&
        previousButton &&
        nextButton &&
        dotsContainer
    ) {
        const slides = Array.from(
            track.querySelectorAll(".testimonial-slide")
        );

        let currentPage = 0;
        let slidesPerView = 3;
        let pageCount = 1;
        let autoSlideTimer = null;
        let touchStartX = 0;
        let touchEndX = 0;

        // Determine the number of testimonials shown per page
        function getSlidesPerView() {
            if (window.innerWidth <= 650) return 1;
            if (window.innerWidth <= 1200) return 2;
            return 3;
        }

        // Create pagination dots for the carousel
        function buildDots() {
            dotsContainer.innerHTML = "";

            for (let i = 0; i < pageCount; i++) {
                const dot = document.createElement("button");

                dot.type = "button";
                dot.className = "carousel-dot";
                dot.setAttribute(
                    "aria-label",
                    `Show testimonial page ${i + 1}`
                );
                dot.setAttribute("aria-current", "false");

                // Navigate to the selected page
                dot.addEventListener("click", () => {
                    goToPage(i);
                    restartAutoSlide();
                });

                dotsContainer.appendChild(dot);
            }
        }

        // Update the carousel position and controls
        function updateCarousel() {
            const maxPage = Math.max(0, pageCount - 1);
            currentPage = Math.min(Math.max(currentPage, 0), maxPage);

            const slideWidth = 100 / slidesPerView;

            track.style.transform =
                `translateX(-${currentPage * slidesPerView * slideWidth}%)`;

            // Highlight the active pagination dot
            Array.from(dotsContainer.children).forEach((dot, index) => {
                const isActive = index === currentPage;

                dot.classList.toggle("active", isActive);
                dot.setAttribute("aria-current", String(isActive));
            });

            // Disable navigation buttons at the beginning and end
            previousButton.disabled = currentPage === 0;
            nextButton.disabled = currentPage >= maxPage;

            previousButton.setAttribute(
                "aria-label",
                currentPage === 0
                    ? "No previous testimonial page"
                    : "Previous testimonials"
            );

            nextButton.setAttribute(
                "aria-label",
                currentPage >= maxPage
                    ? "No next testimonial page"
                    : "Next testimonials"
            );
        }

        // Recalculate the carousel when the screen size changes
        function refreshCarousel() {
            const oldSlidesPerView = slidesPerView;

            slidesPerView = getSlidesPerView();
            pageCount = Math.max(
                1,
                Math.ceil(slides.length / slidesPerView)
            );

            currentPage = Math.min(currentPage, pageCount - 1);

            if (
                oldSlidesPerView !== slidesPerView ||
                dotsContainer.children.length !== pageCount
            ) {
                buildDots();
            }

            updateCarousel();
        }

        // Navigate to a specific carousel page
        function goToPage(page) {
            currentPage = (page + pageCount) % pageCount;
            updateCarousel();
        }

        // Move to the next carousel page
        function showNext() {
            goToPage(currentPage + 1);
        }

        // Move to the previous carousel page
        function showPrevious() {
            goToPage(currentPage - 1);
        }

        /* Automatic carousel movement */

        // Stop automatic movement
        function stopAutoSlide() {
            if (autoSlideTimer) {
                window.clearInterval(autoSlideTimer);
                autoSlideTimer = null;
            }
        }

        // Start automatic movement when appropriate
        function startAutoSlide() {
            stopAutoSlide();

            if (
                pageCount > 1 &&
                !window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ) {
                autoSlideTimer = window.setInterval(showNext, 5000);
            }
        }

        // Restart the timer after manual navigation
        function restartAutoSlide() {
            startAutoSlide();
        }

        // Handle the previous button
        previousButton.addEventListener("click", () => {
            showPrevious();
            restartAutoSlide();
        });

        // Handle the next button
        nextButton.addEventListener("click", () => {
            showNext();
            restartAutoSlide();
        });

        // Pause automatic movement while the visitor interacts
        carousel.addEventListener("mouseenter", stopAutoSlide);
        carousel.addEventListener("mouseleave", startAutoSlide);
        carousel.addEventListener("focusin", stopAutoSlide);

        carousel.addEventListener("focusout", (event) => {
            if (!carousel.contains(event.relatedTarget)) {
                startAutoSlide();
            }
        });

        /* Touch swipe support */

        // Record where the touch begins
        carousel.addEventListener("touchstart", (event) => {
            touchStartX = event.changedTouches[0].screenX;
        }, { passive: true });

        // Detect a left or right swipe
        carousel.addEventListener("touchend", (event) => {
            touchEndX = event.changedTouches[0].screenX;

            const swipeDistance = touchEndX - touchStartX;

            if (Math.abs(swipeDistance) > 50) {
                if (swipeDistance < 0) {
                    showNext();
                } else {
                    showPrevious();
                }

                restartAutoSlide();
            }
        }, { passive: true });

        /* Keyboard navigation */

        // Allow visitors to navigate with the arrow keys
        carousel.addEventListener("keydown", (event) => {
            if (event.key === "ArrowRight") {
                showNext();
                restartAutoSlide();
            }

            if (event.key === "ArrowLeft") {
                showPrevious();
                restartAutoSlide();
            }
        });

        // Refresh the carousel layout when the window is resized
        window.addEventListener("resize", refreshCarousel);

        // Initialize the carousel
        refreshCarousel();
        startAutoSlide();
    }

    /* Contact form */

    // Prepare an email using the visitor's default email application
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            // Validate required form fields
            if (!contactForm.reportValidity()) return;

            // Collect and clean the visitor's details
            const visitorName =
                document.getElementById("visitor-name").value.trim();

            const visitorEmail =
                document.getElementById("visitor-email").value.trim();

            const subject =
                document.getElementById("visitor-subject").value.trim();

            const message =
                document.getElementById("visitor-message").value.trim();

            // Prepare the email subject and message
            const emailSubject = encodeURIComponent(subject);

            const emailBody = encodeURIComponent(
                `Hello Deogracia,\n\n${message}\n\n` +
                `Regards,\n${visitorName}\n${visitorEmail}`
            );

            // Explain what happens when the form is submitted
            if (formNote) {
                formNote.textContent =
                    "Your email application should open with your message prepared. Please send it from there.";
            }

            // Open the visitor's default email application
            window.location.href =
                `mailto:deograciaolweny@gmail.com` +
                `?subject=${emailSubject}&body=${emailBody}`;
        });
    }
});