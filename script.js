const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80, 
            behavior: 'smooth'
        });
    });
});

const modal = document.getElementById("imageModal");
const fullImg = document.getElementById("fullImage");
const closeBtn = document.querySelector(".close-modal");
const portfolioImages = document.querySelectorAll(".portfolio-img");

portfolioImages.forEach(img => {
    img.addEventListener("click", function() {
        modal.classList.add("show");
        fullImg.src = this.src;
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});