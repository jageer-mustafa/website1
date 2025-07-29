// Theme switcher functionality
const themeSwitcher = document.getElementById('theme-switcher');

themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Toggle the emoji based on the theme
    if (document.body.classList.contains('dark-mode')) {
        themeSwitcher.innerText = '🌕'; // Sun emoji for light mode
    } else {
        themeSwitcher.innerText = '🌙'; // Moon emoji for dark mode
    }
});

// Changing Wallpaper Every Few Seconds
const wallpapers = ['images/bmg1.jpg', 'images/bmg2.jpg', 'images/bmg3.jpg'];
let wallpaperIndex = 0;

setInterval(() => {
    wallpaperIndex = (wallpaperIndex + 1) % wallpapers.length;
    document.getElementById('wallpaper').src = wallpapers[wallpaperIndex];
}, 5000); // Change wallpaper every 5 seconds

let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.gallery-slide');
    slideIndex += step;

    // Loop back to the first image if we go past the last
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    // Loop back to the last image if we go before the first
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    // Move the gallery container to show the correct image
    const galleryContainer = document.querySelector('.gallery-container');
    galleryContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom > 0) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

document.getElementById('loadButton').addEventListener('click', () => {
    document.getElementById('loader').style.display = 'block';
    // Simulate loading time
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 3000); // Hide loader after 3 seconds
});

document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('active');
});
