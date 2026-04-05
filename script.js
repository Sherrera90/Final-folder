// 1. Select the elements
const gridBtn = document.getElementById('grid-btn');
const listBtn = document.getElementById('list-btn');
const wrapper = document.getElementById('content-wrapper');

// 2. Add Event Listeners
gridBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Stop the '#' link from jumping the page
    
    // Switch classes on the main container
    wrapper.classList.add('grid-view');
    wrapper.classList.remove('list-view');
    
    // Update active button state
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
});

listBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Switch classes on the main container
    wrapper.classList.add('list-view');
    wrapper.classList.remove('grid-view');
    
    // Update active button state
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
});

//Header Nav
const menuToggle = document.getElementById('menu-toggle');
const menuOverlay = document.getElementById('menu-overlay');

menuToggle.addEventListener('click', () => {
    // 1. Toggle the visibility class
    menuOverlay.classList.toggle('menu-open');

    // 2. Change the button text
    if (menuOverlay.classList.contains('menu-open')) {
        menuToggle.textContent = 'Close';
    } else {
        menuToggle.textContent = 'Menu';
    }
});

window.addEventListener('scroll', () => {
    const bigLogo = document.querySelector('.main-logo');
    const nav = document.querySelector('.sticky-nav');
    const scrollPosition = window.scrollY;
    
    // 1. Fade the big logo
    let opacity = 1 - (scrollPosition / 500);
    bigLogo.style.opacity = Math.max(0, Math.min(1, opacity));
    
    // 2. Show/Hide mini logo in nav
    if (scrollPosition > 200) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});