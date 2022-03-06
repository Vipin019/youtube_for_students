var menuIcon=document.querySelector(".hamburger");
var sidebar=document.querySelector(".sidebar");
var main=document.querySelector(".main");
menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    main.classList.toggle("large-main");
}
var searchIcon=document.querySelector(".search-btn");

var main=document.querySelector(".main");
searchIcon.onclick = function () {
    
    main.classList.toggle("notfound-main");
}