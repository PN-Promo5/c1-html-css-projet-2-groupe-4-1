let para = document.getElementById("error")
para.hidden = true;
para.style.color = "red";

let msg_valid = document.getElementById("sub-valid")
msg_valid.hidden = true

let button = document.getElementById("btn-valid");
button.addEventListener("click", confirmed, false);

function confirmed() {
  let forename = document.getElementById("firstName");
  let name = document.getElementById("lastName");
  let mail = document.getElementById("email");
  let checkJ1 = document.getElementById("days1")
  let checkJ2 = document.getElementById("days2")
  let formulaire = document.getElementById("formm");

  if ((forename.value === "") || (name.value === "") || (mail.value === "") || (checkJ1.checked === false) || (checkJ2.checked === false)) {
    para.hidden = false;
  } else {
    formulaire.style.display = "none";
    button.style.display = "none";
    msg_valid.hidden = false;
  }
}
