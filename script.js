// DOM Elements
const loadingScreen = document.getElementById("loading-screen")
const fireworksContainer = document.getElementById("fireworks-container")
const menuToggle = document.getElementById("menu-toggle")
const menuOverlay = document.getElementById("menu-overlay")
const menuIcon = document.getElementById("menu-icon")
const backToTopBtn = document.getElementById("back-to-top")
const floatingSocial = document.getElementById("floating-social")
const filterBtns = document.querySelectorAll(".filter-btn")
const portfolioItems = document.querySelectorAll(".portfolio-item")
const menuLinks = document.querySelectorAll(".menu-link")
const downloadBtns = document.querySelectorAll(".download-btn")

// Loading Screen and Fireworks
window.addEventListener("load", () => {
  setTimeout(() => {
    loadingScreen.style.opacity = "0"
    setTimeout(() => {
      loadingScreen.style.display = "none"
      createFireworks()
    }, 500)
  }, 2000)
})

// Create Fireworks Effect
function createFireworks() {
  const colors = ["#ff6b35", "#00d4aa", "#ffd23f", "#ff4757", "#3742fa"]

  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const firework = document.createElement("div")
      firework.className = "firework"
      firework.style.left = Math.random() * 100 + "%"
      firework.style.top = Math.random() * 100 + "%"
      firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

      fireworksContainer.appendChild(firework)

      setTimeout(() => {
        firework.remove()
      }, 2000)
    }, i * 100)
  }

  // Remove fireworks container after animation
  setTimeout(() => {
    fireworksContainer.style.display = "none"
  }, 8000)
}

// Menu Toggle
let isMenuOpen = false

menuToggle.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen

  if (isMenuOpen) {
    menuOverlay.classList.add("active")
    menuIcon.className = "fas fa-times"
    document.body.style.overflow = "hidden"

    // Animate menu items
    const menuItems = document.querySelectorAll(".menu-list li")
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.transitionDelay = `${index * 0.1}s`
      }, 100)
    })
  } else {
    menuOverlay.classList.remove("active")
    menuIcon.className = "fas fa-bars"
    document.body.style.overflow = "auto"
  }
})

// Menu Link Navigation
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Close menu
      isMenuOpen = false
      menuOverlay.classList.remove("active")
      menuIcon.className = "fas fa-bars"
      document.body.style.overflow = "auto"
    }
  })
})

// Scroll Effects
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY

  // Show/hide floating social icons
  if (scrollY > 300) {
    floatingSocial.classList.add("visible")
  } else {
    floatingSocial.classList.remove("visible")
  }

  // Show/hide back to top button
  if (scrollY > 500) {
    backToTopBtn.classList.add("visible")
  } else {
    backToTopBtn.classList.remove("visible")
  }
})

// Back to Top Button
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Portfolio Filter
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"))
    // Add active class to clicked button
    btn.classList.add("active")

    const filter = btn.getAttribute("data-filter")

    portfolioItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block"
        item.style.animation = "fadeInUp 0.5s ease"
      } else {
        item.style.display = "none"
      }
    })
  })
})

// Download Buttons
downloadBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault()
    const fileName = btn.getAttribute("data-file")

    // Create a temporary download link
    const link = document.createElement("a")
    link.href = `#` // Replace with actual file URLs
    link.download = fileName
    link.style.display = "none"

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Show download notification
    showNotification(`Downloading ${fileName}...`)
  })
})

// Contact Form Submission
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    // Netlify handles the form submission automatically
    showNotification("Message sent successfully!")
  })
}

// Notification System
function showNotification(message) {
  const notification = document.createElement("div")
  notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: var(--primary);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `
  notification.textContent = message

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease"
    setTimeout(() => {
      notification.remove()
    }, 300)
  }, 3000)
}

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add CSS animations for notifications
const style = document.createElement("style")
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  console.log("Mati Duma Portfolio loaded successfully!")
})
