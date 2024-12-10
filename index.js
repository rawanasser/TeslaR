function toggleMenu() {
    var sidenav = document.getElementById("sidenav");
    var menuIcon = document.getElementById("menu-icon-content");
    var closeIcon = document.getElementById("close-icon-content");
    
    if (sidenav.classList.contains("open")) {
        sidenav.classList.remove("open");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    } else {
        sidenav.classList.add("open");
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    }
}

document.querySelectorAll('.main-menu').forEach(menu => {
    menu.addEventListener('click', function () {
        var submenu = this.nextElementSibling;
        if (submenu.classList.contains('show')) {
            submenu.classList.remove('show');
            this.classList.remove('open');
        } else {
            document.querySelectorAll('.submenu').forEach(sub => sub.classList.remove('show'));
            document.querySelectorAll('.main-menu').forEach(menu => menu.classList.remove('open'));
            submenu.classList.add('show');
            this.classList.add('open');
        }
    });
});

document.querySelectorAll('.closebtn').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

