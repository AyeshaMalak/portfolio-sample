
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const socialIcons = document.getElementById("socialIcons");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  socialIcons.classList.toggle("active");
});

// -----------------------------
// Counter Animation
// -----------------------------
const counters = document.querySelectorAll('.counter');

const options = { threshold: 0.5 };
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const increment = target / 200;

      const updateCounter = () => {
        count += increment;
        if(count < target){
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      }
      updateCounter();
      observer.unobserve(counter);
    }
  });
}, options);

counters.forEach(counter => observer.observe(counter));


// -----------------------------
// Skill Card Hover Animation
// -----------------------------
document.querySelectorAll(".skill-card").forEach(card => {
  card.addEventListener("mousemove", () => {
    card.style.transform = "translateY(-6px) scale(1.03)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});


const slider = document.querySelector('.testimonial-slider');
const slides = document.querySelectorAll('.testimonial-card');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  slider.style.transform = `translateX(${-i * 100}%)`;
}

prev.addEventListener('click', () => {
  index = (index === 0) ? slides.length - 1 : index - 1;
  showSlide(index);
});

next.addEventListener('click', () => {
  index = (index === slides.length - 1) ? 0 : index + 1;
  showSlide(index);
});

// Auto-slide every 5 seconds
setInterval(() => {
  index = (index === slides.length - 1) ? 0 : index + 1;
  showSlide(index);
}, 5000);
// read more btn 
const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.parentElement;
    const moreText = card.querySelector('.more');
    const dots = card.querySelector('.dots');

    if (moreText.style.display === "inline") {
      moreText.style.display = "none";
      dots.style.display = "inline";
      btn.textContent = "READ MORE →";
    } else {
      moreText.style.display = "inline";
      dots.style.display = "none";
      btn.textContent = "SHOW LESS ↑";
    }
  });
});




