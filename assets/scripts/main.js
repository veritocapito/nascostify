const nav = document.querySelector('.nav-list');
const hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
})

document.querySelectorAll('.nav-list').forEach(n=>
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    }))