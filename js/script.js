function changeMode() {
    var element = document.getElementById("mainBody")
    if (element.classList.contains("bodyLight")){
        element.classList.remove("bodyLight")
        element.classList.add("bodyDark")
        this.changeColorLetters(true)
        this.changeClassButtons(true)
        return;
    }
    element.classList.remove("bodyDark")
    element.classList.add("bodyLight")
    this.changeColorLetters(false)
    this.changeClassButtons(false)
}

function changeColorLetters(darkMode){
    var elements = document.getElementsByClassName("divText")

    for (var i = 0; i < elements.length; i++){
        elements[i].classList.add(darkMode == true ? "letterLight" : "letterBlack")
        elements[i].classList.remove(darkMode == false ? "letterLight" : "letterBlack")
    }
}

function changeClassButtons(darkMode){
    var elements = document.getElementsByClassName("removeBorderAndBackgroundColor")

    for (var i = 0; i < elements.length; i++){
        elements[i].classList.add(darkMode == true ? "headerButtonDark" : "headerButtonLight")
        elements[i].classList.remove(darkMode == false ? "headerButtonDark" : "headerButtonLight")
    }
}