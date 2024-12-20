const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const images = document.querySelectorAll('.portfolio-img');
let currentIndex = 0;

// Open lightbox and display the clicked image
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        openLightbox(img.src, img.alt || "Photo");
    });
});

// Open lightbox
function openLightbox(src, caption) {
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
    lightboxCaption.innerText = caption;
}

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Navigate to previous image
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    const img = images[currentIndex];
    openLightbox(img.src, img.alt || "Photo");
});

// Navigate to next image
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    const img = images[currentIndex];
    openLightbox(img.src, img.alt || "Photo");
});

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const cursor = document.querySelector(".cursor");

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = "white";
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    cursor.style.top = x;
    cursor.style.left = y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();
