var menuIcon=document.querySelector(".hamburger");
var sidebar=document.querySelector(".sidebar");
menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
}