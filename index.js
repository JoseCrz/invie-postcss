var burgerButton = document.getElementById("burger-button")
var menu = document.getElementById("menu")
var consulta = window.matchMedia("(max-width: 500px)")
consulta.addListener(mediaQuery)


var bLazy = new Blazy({
  selector: 'img'
})


function mediaQuery () {
  if (consulta.matches) {
    console.log("Se cumplió la condición")
    burgerButton.addEventListener("touchstart", toggleMenu)
  } else {
    console.log("No se cumplió la condición")
    burgerButton.removeEventListener("touchstart", toggleMenu)
  }
}

function toggleMenu () {
  menu.classList.toggle("active")
}

function showMenu () {
  menu.classList.add("active")
}

function hideMenu () {
  menu.classList.remove("active")
}

mediaQuery()

var body = document.body
var gestos = new Hammer(body)
gestos.on('swipeleft', hideMenu)
gestos.on('swiperight', showMenu)