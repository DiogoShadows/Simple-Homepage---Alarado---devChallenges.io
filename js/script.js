function changeMenuMobileVisibility(visible) {
    var element = document.getElementById("menuMobile")
    element.classList.remove(visible ? "invisible" : "visible")
    element.classList.add(visible ? "visible" : "invisible")
}

function changeMode() {
    var element = document.getElementById("mainBody")
    if (element.classList.contains("bodyLight")) {
        this.changeBodyTheme(false)
        this.changeModeOfItens(true)
        return;
    }
    this.changeBodyTheme(true)
    this.changeModeOfItens(false)
}

function changeBodyTheme(light) {
    var element = document.getElementById("mainBody")
    element.classList.remove(light ? "bodyDark" : "bodyLight")
    element.classList.add(light ? "bodyLight" : "bodyDark")
}

function changeModeOfItens(darkMode) {
    this.changeColorLetters(darkMode)
    this.changeClassButtons(darkMode)
    this.changeButtonsThemeColor(darkMode)
    this.changeMenuMobileTheme(darkMode)
    this.changeButtonsMobileThemeColor(darkMode)
}

function changeColorLetters(darkMode) {
    var elements = document.getElementsByClassName("divText")

    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add(darkMode == true ? "letterLight" : "letterBlack")
        elements[i].classList.remove(darkMode == false ? "letterLight" : "letterBlack")
    }
}

function changeClassButtons(darkMode) {
    var elements = document.getElementsByClassName("removeBorderAndBackgroundColor")

    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add(darkMode == true ? "headerButtonDark" : "headerButtonLight")
        elements[i].classList.remove(darkMode == false ? "headerButtonDark" : "headerButtonLight")
    }
}

function changeButtonsMobileThemeColor(darkMode) {
    var moonElement = document.getElementById("moonButtonMobile")
    var sunElement = document.getElementById("sunButtonMobile")
    var divMoonElement = document.getElementById("divMoonButtonMobile")
    var divSunElement = document.getElementById("divSunButtonMobile")

    if (darkMode) {
        sunElement.classList.add("svgWhite")
        moonElement.classList.remove("svgWhite")

        addClassLightFromButton(divMoonElement)
        addClassDarkFromButton(divSunElement)
        return
    }

    addClassLightFromButton(divSunElement)
    addClassDarkFromButton(divMoonElement)
    moonElement.classList.add("svgWhite")
    sunElement.classList.remove("svgWhite")
}

function changeButtonsThemeColor(darkMode) {
    var moonElement = document.getElementById("moonButton")
    var sunElement = document.getElementById("sunButton")
    var divMoonElement = document.getElementById("divMoonButton")
    var divSunElement = document.getElementById("divSunButton")

    if (darkMode) {
        sunElement.classList.add("svgWhite")
        moonElement.classList.remove("svgWhite")

        addClassLightFromButton(divMoonElement)
        addClassDarkFromButton(divSunElement)
        return
    }

    addClassLightFromButton(divSunElement)
    addClassDarkFromButton(divMoonElement)
    moonElement.classList.add("svgWhite")
    sunElement.classList.remove("svgWhite")
}

function addClassLightFromButton(element) {
    element.classList.remove("buttonDark")
    element.classList.add("buttonLight")
}

function addClassDarkFromButton(element) {
    element.classList.add("buttonDark")
    element.classList.remove("buttonLight")
}

function changeMenuMobileTheme(darkMode) {
    element = document.getElementById("buttonOpenMenu")

    if (darkMode) {
        element.classList.add("svgWhite")
        return
    }

    element.classList.remove("svgWhite")
}

var visibilityMenuMobile = function () {

    if (window.innerWidth > 800) {
        this.changeMenuMobileVisibility(false)
    }
};

window.addEventListener("resize", visibilityMenuMobile);
window.addEventListener("onload", visibilityMenuMobile);