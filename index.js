// window.addEventListener('load', function () {
window.addEventListener('DOMContentLoaded', function () {
    const page = document.getElementById("page");
    console.log(page);
    page.style.backgroundPositionY = Math.floor(Math.random() * 100) + 1 + '%';
    console.log( page.style.backgroundPositionX);
})



