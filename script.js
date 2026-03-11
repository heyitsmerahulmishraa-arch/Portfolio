// =========================
// Navigation Menu Toggle
// =========================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// =========================
// Active Navigation Links
// =========================
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// =========================
// Navbar Scroll Effect
// =========================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// =========================
// Scroll to Top Button
// =========================
const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// =========================
// Smooth Scrolling for Links
// =========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// =========================
// Contact Form Handling - REMOVED
// Contact now uses direct mailto: and tel: links
// =========================
/*
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Validate form
  if (
    !formData.name ||
    !formData.email ||
    !formData.subject ||
    !formData.message
  ) {
    showNotification("Please fill in all fields", "error");
    return;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    showNotification("Please enter a valid email address", "error");
    return;
  }

  // Simulate form submission
  // In a real application, you would send this data to a server
  console.log("Form submitted:", formData);
  showNotification(
    "Message sent successfully! I will get back to you soon.",
    "success",
  );

  // Reset form
  contactForm.reset();
});

// =========================
// Notification System
// =========================
function showNotification(message, type = "success") {
  // Remove existing notifications
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === "success" ? "check-circle" : "exclamation-circle"}"></i>
            <span>${message}</span>
        </div>
    `;

  // Add styles
  const style = document.createElement("style");
  style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: white;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            z-index: 9999;
            animation: slideIn 0.3s ease-out;
            max-width: 400px;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .notification.success {
            border-left: 4px solid #10b981;
        }
        
        .notification.success i {
            color: #10b981;
        }
        
        .notification.error {
            border-left: 4px solid #ef4444;
        }
        
        .notification.error i {
            color: #ef4444;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;

  if (!document.querySelector("style[data-notification]")) {
    style.setAttribute("data-notification", "true");
    document.head.appendChild(style);
  }

  // Add notification to page
  document.body.appendChild(notification);

  // Remove notification after 4 seconds
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease-out";
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 4000);
}
*/

// =========================
// Intersection Observer for Animations
// =========================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
  ".skill-card, .project-card, .contact-card",
);
animateElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// =========================
// Typing Effect for Hero Subtitle
// =========================
const subtitleElement = document.querySelector(".hero-subtitle");
const subtitles = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
  "MongoDB Expert",
];
let subtitleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeSubtitle() {
  const currentSubtitle = subtitles[subtitleIndex];

  if (isDeleting) {
    subtitleElement.textContent = currentSubtitle.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    subtitleElement.textContent = currentSubtitle.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentSubtitle.length) {
    // Pause at the end
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    subtitleIndex = (subtitleIndex + 1) % subtitles.length;
    typingSpeed = 500;
  }

  setTimeout(typeSubtitle, typingSpeed);
}

// Start typing effect after page loads
window.addEventListener("load", () => {
  setTimeout(typeSubtitle, 500);
});

// =========================
// Skill Cards Hover Effect
// =========================
const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.05)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// =========================
// Project Cards Animation
// =========================
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});

// =========================
// Dynamic Year in Footer
// =========================
const currentYear = new Date().getFullYear();
const footerText = document.querySelector(".footer-bottom p");
if (footerText) {
  footerText.textContent = `© ${currentYear} MERN Stack Developer. All rights reserved.`;
}

// =========================
// Prevent Context Menu on Images
// =========================
document.querySelectorAll(".image-placeholder").forEach((img) => {
  img.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
});

// =========================
// Parallax Effect for Hero Section
// =========================
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const heroImage = document.querySelector(".hero-image");

  if (heroImage) {
    heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// =========================
// Loading Animation
// =========================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  // Add fade-in animation to sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    setTimeout(() => {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, index * 100);
  });
});

// =========================
// Console Message
// =========================
console.log(
  "%c👋 Welcome to My Portfolio!",
  "font-size: 20px; font-weight: bold; color: #2563eb;",
);
console.log(
  "%cInterested in the code? Check out the repository!",
  "font-size: 14px; color: #6b7280;",
);
console.log(
  "%cBuilt with ❤️ using HTML, CSS, and JavaScript",
  "font-size: 12px; color: #10b981;",
);
