var mainMenu = document.getElementById("mainMenu");
function addChangeClass(x) {
  x.classList.toggle("change");
  if (mainMenu.style.display === "block") {
    mainMenu.style.display = "none";
  } else {
    mainMenu.style.display = "block";
  }
}


/***
 * 
 * 
 *
var menuHeight = document.querySelector("header nav .container").offsetHeight,
    hero = document.querySelector("header .hero");
hero.style.marginTop = menuHeight + "pxpx
*/