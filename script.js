function toggleBurger(){
    const navMenu = document.getElementsByClassName('nav-menu')[0];
    const nav = document.getElementsByTagName('nav')[0];
    navMenu.classList.toggle("active");
    nav.classList.toggle('open');
}