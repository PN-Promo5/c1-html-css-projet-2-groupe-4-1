    // When Dom is loaded
    document.addEventListener('DOMContentLoaded', function(e) {
        // I set the form variables
        let eltRobotOrHuman = document.getElementById("robot-human");
        let eltBtnHuman = document.getElementById("human-btn");
        let eltBtnRobot = document.getElementById("robot-btn");
        let eltBtnReturn = document.getElementsByClassName("return");
        let eltFormRobot = document.getElementById("robot");
        let eltFormHuman = document.getElementById("human");
        // Adding event listener to all btn
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
        // display the good form
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
                for (let i = 0; i < eltMapContainer.length; i++) {
                    eltMapContainer[i].hidden = false;
                    eltErrorContainer[i].classList.add("d-none")
                }
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
        // I set the form elt variables
        let eltRobotCheck = document.getElementById("robot-check")
        let eltHumanCheck = document.getElementById("human-check")
        let eltInputMail = document.getElementById("mail");
        let eltInputName = document.getElementById("name");
        let eltInputSurname = document.getElementById("surname");
        eltHumanCheck.checked = false;
        eltInputMail.value = "";
        eltInputName.value = "";
        eltInputSurname.value = "";
        let etlInputId = document.getElementById("id");
        let etlInputSerieNbr = document.getElementById("serieNbr");
        let etlInputVersion = document.getElementById("version");
        eltRobotCheck.checked = false;
        etlInputId.value = "";
        etlInputSerieNbr.value = "";
        etlInputVersion.value = "";
        let eltHumanVerified = document.getElementById("human-verified");
        let eltRobotVerified = document.getElementById("robot-verified");
        let eltMapContainer = document.getElementsByClassName("map-container");
        let eltErrorContainer = document.getElementsByClassName("error-container");
        let eltErrorMessage = document.getElementsByClassName("error-message");

        // Adding event listener to robot elt
        eltRobotCheck.addEventListener("click", function(e) {
            securityFormRobot();
        }, false)
        etlInputId.addEventListener("input", function(e) {
            securityFormRobot()
        }, false)
        etlInputSerieNbr.addEventListener("input", function(e) {
            securityFormRobot()
        }, false)
        etlInputVersion.addEventListener("input", function(e) {
            securityFormRobot()
        }, false)
        // security before sending form
        function securityFormRobot() {
            let idValue = etlInputId.value;
            let serieNbrValue = etlInputSerieNbr.value;
            let versionValue = etlInputVersion.value;
            // if form is good sending it else display error message
            if (idValue && serieNbrValue && versionValue !== "") {
                if (eltRobotCheck.checked === true) {
                    eltFormRobot.classList.add("d-none");
                    eltRobotVerified.classList.remove("d-none");
                }
                errorMessageRobot(false)
            } else {
                eltRobotCheck.checked = false;
                for (let i = 0; i < eltMapContainer.length; i++) {
                    eltMapContainer[i].hidden = true;
                    eltErrorContainer[i].classList.remove("d-none")
                    eltErrorMessage[i].textContent = errorMessageRobot(true)
                }
            }
        }
        // choose the good error message to return
        function errorMessageRobot(booleen) {
            if (booleen === true) {
                let idValue = etlInputId.value;
                let serieNbrValue = etlInputSerieNbr.value;
                let versionValue = etlInputVersion.value;
                if (idValue && serieNbrValue && versionValue !== "") {
                    message = "Veuillez renseigner les champs";
                    return message;
                } else if (idValue === "") {
                    message = "Veuillez renseigner un Id";
                    return message;
                } else if (serieNbrValue === "") {
                    message = "Veuillez renseigner un Numéro de série";
                    return message;
                } else if (versionValue === "") {
                    message = "Veuillez renseigner un Numéro de version";
                    return message;
                }
            } else {
                for (let i = 0; i < eltMapContainer.length; i++) {
                    eltMapContainer[i].hidden = false;
                    eltErrorContainer[i].classList.add("d-none")
                }
            }
        }
        // Adding event listener to Human elt
        eltHumanCheck.addEventListener("click", function(e) {
            securityFormHuman();
        }, false)
        eltInputMail.addEventListener("input", function(e) {
            securityFormHuman()
        }, false)
        eltInputName.addEventListener("input", function(e) {
            securityFormHuman()
        }, false)
        eltInputSurname.addEventListener("input", function(e) {
            securityFormHuman()
        }, false)
        // security before sending form
        function securityFormHuman() {
            let mailValue = eltInputMail.value;
            let nameValue = eltInputName.value;
            let surnameValue = eltInputSurname.value;
            // if form is good sending it else display error message
            if ((mailValue && nameValue && surnameValue !== "") && (validate() === true)) {
                if (eltHumanCheck.checked === true) {
                    eltFormHuman.classList.add("d-none");
                    eltHumanVerified.classList.remove("d-none");
                }
                errorMessageHuman(false)
            } else {
                eltHumanCheck.checked = false;
                for (let i = 0; i < eltMapContainer.length; i++) {
                    eltMapContainer[i].hidden = true;
                    eltErrorContainer[i].classList.remove("d-none")
                    eltErrorMessage[i].textContent = errorMessageHuman(true)
                }
            }
        }
        // choose the good error message to return
        function errorMessageHuman(booleen) {
            if (booleen === true) {
                let mailValue = eltInputMail.value;
                let nameValue = eltInputName.value;
                let surnameValue = eltInputSurname.value;
                let message;
                if (mailValue && nameValue && surnameValue === "") {
                    message = "Veuillez renseigner les champs";
                    return message;
                } else if (mailValue === "") {
                    message = "Veuillez renseigner un Mail";
                    return message;
                } else if (validate() === false) {
                    message = "Veuillez renseigner un Mail Valide";
                    return message;
                } else if (nameValue === "") {
                    message = "Veuillez renseigner le champ Nom";
                    return message;
                } else if (surnameValue === "") {
                    message = "Veuillez renseigner le champ Surnom";
                    return message;
                }
            } else {
                for (let i = 0; i < eltMapContainer.length; i++) {
                    eltMapContainer[i].hidden = false;
                    eltErrorContainer[i].classList.add("d-none")
                }
            }
        }
    }, false);