function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
}

function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);



function openNavbar() {
    document.getElementById("join-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
}

function closeNavbar() {
    document.getElementById("join-responsive").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("join-open").addEventListener("click", openNavbar);
document.getElementById("join-close").addEventListener("click", closeNavbar);

// Project read more    main js media**********************
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  header.classList.toggle('open');
});