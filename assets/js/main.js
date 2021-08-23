const FIXED_MENU = document.querySelector('.fixed-menu')
const TOP_MENU_LINKS = document.querySelectorAll('.nav-menu a')
const FIXED_MENU_LINKS = document.querySelector('.fixed-menu .nav-menu')

exportTopMenuLinks(FIXED_MENU_LINKS)

var scrollConstValue
var already_animated=false

window.onscroll = function () {
    if(document.documentElement.scrollTop < 580){
        FIXED_MENU.style.display ="none"
    }else if(document.documentElement.scrollTop < scrollConstValue){
        FIXED_MENU.style.display = "flex"
    }else if(document.documentElement.scrollTop > scrollConstValue){
        FIXED_MENU.style.display = "flex"
    }
    setConstValueScroll()
}

function setConstValueScroll(){
    scrollConstValue = document.documentElement.scrollTop
}

function exportTopMenuLinks(element) {
    TOP_MENU_LINKS.forEach(link => {
        let a = document.createElement('a')
        a.innerHTML = link.innerHTML
        a.setAttribute('href', link.getAttribute('href'))
        element.appendChild(a) 
    })
}
