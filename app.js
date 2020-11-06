const navSlide = () => {
    const burger = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach((navLinks, index) => {
        navLinks.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;

    })
}

navSlide();