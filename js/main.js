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