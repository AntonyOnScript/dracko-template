const FIXED_MENU = document.querySelector('.fixed-menu')
const TOP_MENU_LINKS = document.querySelectorAll('.nav-menu a')
const FIXED_MENU_LINKS = document.querySelector('.fixed-menu .nav-menu')
const FOOTER_MENU = document.querySelector('.footer-menu')

exportTopMenuLinks(FIXED_MENU_LINKS)
exportTopMenuLinks(FOOTER_MENU)

var scrollConstValue

window.onscroll = function () {
    if(document.documentElement.scrollTop < 580){
        FIXED_MENU.style.display ="none"
    }else if(document.documentElement.scrollTop < scrollConstValue){
        FIXED_MENU.style.display = "flex"
    }else if(document.documentElement.scrollTop > scrollConstValue){
        FIXED_MENU.style.display = "none"
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

alert("It was developed by github profiles: @AntonyOnScript and @AndreKaname. BSD 2-Clause Simplified License.")
