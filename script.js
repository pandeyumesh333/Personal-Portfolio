// Initialize AOS Animation Library
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// Typing Animation
const typed = new Typed(".typing-text", {
  strings: ["Web Developer", "Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar Background Change on Scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "transparent";
    navbar.style.boxShadow = "none";
  }
});

// Form Submission Handler
const form = document.querySelector(".contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // Add your form submission logic here
  alert("Thank you for your message!");
  form.reset();
});

// Skill Bars Animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".progress");
  skillBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
}

// Trigger skill bars animation when section is in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateSkillBars();
    }
  });
});

observer.observe(document.querySelector(".skills"));

document.addEventListener("DOMContentLoaded", function () {
  // Number counter animation
  const expNumber = document.querySelector(".exp-number");
  const targetNumber = parseInt(expNumber.getAttribute("data-count"));
  let currentNumber = 0;

  const counterAnimation = setInterval(() => {
    if (currentNumber < targetNumber) {
      currentNumber++;
      expNumber.textContent = currentNumber;
    } else {
      clearInterval(counterAnimation);
    }
  }, 100);

  // Navbar color change on scroll
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section");

  function updateNavigation() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === currentSection) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", function () {
    updateNavigation();

    // Change navbar background opacity on scroll
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Stat counter animation
  const statCounts = document.querySelectorAll(".stat-count");

  const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const endValue = parseInt(element.getAttribute("data-count"));
          animateValue(element, 0, endValue, 2000);
          observer.unobserve(element);
        }
      });
    },
    { threshold: 0.5 }
  );

  statCounts.forEach((stat) => observer.observe(stat));

  // Mouse move effect for sections
  document.querySelectorAll("section").forEach((section) => {
    section.addEventListener("mousemove", (e) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty("--x", `${x}%`);
      section.style.setProperty("--y", `${y}%`);
    });
  });

  // Parallax effect for cards
  document
    .querySelectorAll(".project-card, .contact-card, .stat-box")
    .forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform =
          "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
      });
    });

  // Typed.js initialization
  const typed = new Typed(".typed-text", {
    strings: ["Full Stack Developer", "Web Developer", "Problem Solver"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
  });

  // Interactive floating elements
  const floatItems = document.querySelectorAll(".float-item");
  floatItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.transform = "scale(1.1)";
      item.style.background = "rgba(255, 215, 0, 0.2)";
    });

    item.addEventListener("mouseout", () => {
      item.style.transform = "scale(1)";
      item.style.background = "rgba(255, 215, 0, 0.1)";
    });
  });

  // Tech stack icons interaction
  const techIcons = document.querySelectorAll(".tech-icons i");
  techIcons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
      icon.style.transform = "translateY(-5px) rotate(360deg)";
    });

    icon.addEventListener("mouseout", () => {
      icon.style.transform = "translateY(0) rotate(0deg)";
    });
  });

  // Form validation and submission with email functionality
  const contactForm = document.getElementById("contactForm");

  // Form handling with animations
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitButton = this.querySelector(".submit-button");
    const buttonText = submitButton.querySelector(".button-text");
    const buttonIcon = submitButton.querySelector(".button-icon");

    // Get form values
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    };

    // Validation checks
    if (!validateForm(formData)) return;

    // Animation: Start sending
    submitButton.disabled = true;
    buttonText.textContent = "Sending...";
    buttonIcon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

    try {
      // Simulate sending (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success animation
      buttonText.textContent = "Sent Successfully!";
      buttonIcon.innerHTML = '<i class="fas fa-check"></i>';
      submitButton.style.background = "#28a745";

      // Reset form
      contactForm.reset();

      // Reset button after delay
      setTimeout(() => {
        buttonText.textContent = "Send Message";
        buttonIcon.innerHTML = '<i class="fas fa-paper-plane"></i>';
        submitButton.style.background = "";
        submitButton.disabled = false;
      }, 3000);
    } catch (error) {
      // Error animation
      buttonText.textContent = "Failed to Send";
      buttonIcon.innerHTML = '<i class="fas fa-times"></i>';
      submitButton.style.background = "#dc3545";

      setTimeout(() => {
        buttonText.textContent = "Send Message";
        buttonIcon.innerHTML = '<i class="fas fa-paper-plane"></i>';
        submitButton.style.background = "";
        submitButton.disabled = false;
      }, 3000);
    }
  });

  // Form validation
  function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!data.name.trim()) {
      showError("Please enter your name");
      return false;
    }

    if (!emailRegex.test(data.email)) {
      showError("Please enter a valid email address");
      return false;
    }

    if (!phoneRegex.test(data.phone)) {
      showError("Please enter a valid 10-digit phone number");
      return false;
    }

    if (!data.message.trim()) {
      showError("Please enter your message");
      return false;
    }

    return true;
  }

  // Error notification
  function showError(message) {
    const notification = document.createElement("div");
    notification.className = "error-notification";
    notification.innerHTML = `
      <i class="fas fa-exclamation-circle"></i>
      <span>${message}</span>
    `;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
});
