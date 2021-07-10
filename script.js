var menuButton = window.document.getElementById("check")
var menu = window.document.querySelector(".menumenu")
var menuImage = window.document.getElementById("imgMenu")

function abrir() {
    if(menuButton.checked){
        menu.style.display ="block"
        menuImage.src = "icons8_multiply_30px.png"
        window.document.querySelector("body").style.overflow ="hidden"
    }else{
        menu.style.display ="none"
        menuImage.src = "icons8_menu_24px_2.png"
        window.document.querySelector("body").style.overflow ="visible"
        
    }
    
}