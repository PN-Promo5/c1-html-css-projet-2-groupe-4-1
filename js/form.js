let eltRobotOrHuman = document.getElementById("robot-human");
let eltBtnHuman = document.getElementById("human-btn");
let eltBtnRobot = document.getElementById("robot-btn");
let eltBtnReturn = document.getElementsByClassName("return");
let eltFormRobot = document.getElementById("robot");
let eltFormHuman = document.getElementById("human");
eltBtnHuman.addEventListener("click", function(e) {
    displayForm("human");
}, false)
eltBtnRobot.addEventListener("click", function(e) {
    displayForm("robot");
}, false)
eltBtnReturn[0].addEventListener("click", function(e) {
    displayForm("return");
}, false)
eltBtnReturn[1].addEventListener("click", function(e) {
    displayForm("return");
}, false)

function displayForm(action) {
    eltRobotOrHuman.classList.add("d-none");
    if (action === "human") {
        eltFormHuman.classList.remove("d-none");
    } else if (action === "robot") {
        eltFormRobot.classList.remove("d-none")
    } else {
        eltRobotOrHuman.classList.remove("d-none");
        eltFormHuman.classList.add("d-none");
        eltFormRobot.classList.add("d-none");
    }
}
// Regex for mail
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
// test validity of mail
function validate() {
    var $result = $("#result");
    var email = eltInputMail.value;
    $result.text("");
    // if email is valide return true else return false
    if (validateEmail(email)) {
        return true;
    } else {
        return false;
    }
}
let eltRobotCheck = document.getElementById("robot-check")
let eltHumanCheck = document.getElementById("human-check")
let eltInputMail = document.getElementById("mail");
let eltInputName = document.getElementById("name");
let eltInputSurname = document.getElementById("surname");
eltHumanCheck.checked = false;
eltInputMail.value = "";
eltInputName.value = "";
eltInputSurname.value = "";
let eltHumanVerified = document.getElementById("human-verified");
let eltRobotVerified = document.getElementById("robot-verified");
let eltMapContainer = document.getElementsByClassName("map-container");
let eltErrorContainer = document.getElementsByClassName("error-container");
let eltErrorMessage = document.getElementsByClassName("error-message");
eltRobotCheck.addEventListener("click", function(e) {
    securityFormRobot();
}, false)
eltHumanCheck.addEventListener("click", function(e) {
    securityFormHuman();
}, false)

function securityFormRobot() {
    eltFormRobot.classList.add("d-none");
    eltRobotVerified.classList.remove("d-none");
}
eltInputMail.addEventListener("input", function(e) {
    securityFormHuman()
}, false)
eltInputName.addEventListener("input", function(e) {
    securityFormHuman()
}, false)
eltInputSurname.addEventListener("input", function(e) {
    securityFormHuman()
}, false)

function securityFormHuman() {
    let mail = eltInputMail.value;
    let name = eltInputName.value;
    let surname = eltInputSurname.value;
    if ((mail && name && surname !== "") && (validate() === true)) {
        if (eltHumanCheck.checked === true) {
            eltFormHuman.classList.add("d-none");
            eltHumanVerified.classList.remove("d-none");
        }
        errorMessage(false)
    } else {
        eltHumanCheck.checked = false;
        for (let i = 0; i < eltMapContainer.length; i++) {
            eltMapContainer[i].hidden = true;
            eltErrorContainer[i].classList.remove("d-none")
            eltErrorMessage[i].textContent = errorMessage(true)
        }
    }
}

function errorMessage(booleen) {
    if (booleen === true) {
        let mail = eltInputMail.value;
        let name = eltInputName.value;
        let surname = eltInputSurname.value;
        let message;
        if (mail && name && surname === "") {
            message = "Veuillez renseigner les champs";
            return message;
        } else if (mail === "") {
            message = "Veuillez renseigner un Mail";
            return message;
        } else if (validate() === false) {
            message = "Veuillez renseigner un Mail Valide";
            return message;
        } else if (name === "") {
            message = "Veuillez renseigner le champ Nom";
            return message;
        } else if (surname === "") {
            message = "Veuillez renseigner le champ Surnom";
            return message;
        } else {
            for (let i = 0; i < eltMapContainer.length; i++) {
                eltMapContainer[i].hidden = true;
                eltErrorContainer[i].classList.remove("d-none")
                eltErrorMessage[i].textContent = errorMessage()
            }
        }
    } else {
        for (let i = 0; i < eltMapContainer.length; i++) {
            eltMapContainer[i].hidden = false;
            eltErrorContainer[i].classList.add("d-none")
        }
    }
}