function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show-menu');
    
    
    console.log("Menu classes are now: " + menu.className);
}