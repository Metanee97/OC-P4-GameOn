//DOM elements
const submit = document.querySelector(".btn-submit");
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const dateOfBirth = document.getElementById('birthdate');
const numberOfChampionships = document.getElementById('quantity');
const checkboxesLocations = document.querySelectorAll('[type="radio"]');
const locations = document.getElementById('championships-locations');
const checkboxTOU = document.getElementById('checkbox1');
const closeBtn = document.querySelector(".close-btn");


//function validate is called on form onsubmit
function validate() {
//we will check if all inputs are corrects to show the thanks message
//we start with a variable sets to true
  let isSuccessful = true;
  // Checking if the input of the first then last name has at least 2 characters
  //function trim() is used to avoid answers made only with blanks
  const resultFirstName = firstName.value.trim();
  if(resultFirstName.length < 2) {
    isSuccessful = false;
    //firstName.parentElement.setAttribute("data-error-visible", true);
    toggleError(firstName, true);
  } else {
    //firstName.parentElement.setAttribute("data-error-visible", false);
    toggleError(firstName, false);
  }
  const resultLastName = lastName.value.trim();
  if (resultLastName.length < 2) {
    isSuccessful = false;
    //lastName.parentElement.setAttribute("data-error-visible", true);
    toggleError(lastName, true);
  } else {
    //lastName.parentElement.setAttribute("data-error-visible", false);
    toggleError(lastName, false);
  }
// Checking if the input of the email is not empty and if the answer is a valid email with regex
  const resultEmail = email.value.trim();
  const regexEmail = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;
  if (resultEmail == "") {
    isSuccessful = false;
    //email.parentElement.setAttribute("data-error-visible", true)
    toggleError(email, true);
  }
  else if (regexEmail.exec(resultEmail) == null) {
    isSuccessful = false;
    //email.parentElement.setAttribute("data-second-error-visible", true)
    toggleError(email, true);
  }
  else {
    //email.parentElement.setAttribute("data-error-visible", false)
    toggleError(email, false);
  }
// Checking if the user gives its birthdate
  const resultDateOfBirth = dateOfBirth.value;
  if (resultDateOfBirth == "") {
    isSuccessful = false;
    //dateOfBirth.parentElement.setAttribute("data-error-visible", true)
    toggleError(dateOfBirth, true);
  } else {
    //dateOfBirth.parentElement.setAttribute("data-error-visible", false)
    toggleError(dateOfBirth, false);
  }
// Checking if the input of number of Championships is not empty
  const resultOfNumberOfChampionships = numberOfChampionships.value;
  if (resultOfNumberOfChampionships == "") {
    isSuccessful = false;
    //numberOfChampionships.parentElement.setAttribute("data-error-visible", true)
    toggleError(numberOfChampionships, true);
  } else {
    //numberOfChampionships.parentElement.setAttribute("data-error-visible", false)
    toggleError(numberOfChampionships, false);
  }
// Checking if user choose a location
  const totalCheckboxesLocations = checkboxesLocations.length;
  let isChecked = false;
  for (let i = 0; i < totalCheckboxesLocations; i++) {
    const actualInputChecked = checkboxesLocations[i];
    if (actualInputChecked.checked) {
      isChecked = true;
    }
  }
  if (isChecked) {
    //locations.setAttribute("data-error-visible", false)
    toggleError(locations, true);
  } else {
    isSuccessful = false;
    //locations.setAttribute("data-error-visible", true)
    toggleError(locations, false);
  }
// Checking if the user is agree with the Terms Of Use (TOU)
  if (checkboxTOU.checked==true) {
    //checkboxTOU.parentElement.setAttribute("data-error-visible", false)
    toggleError(checkboxTOU, true);
  } else {
    isSuccessful = false;
    //checkboxTOU.parentElement.setAttribute("data-error-visible", true)
    toggleError(checkboxTOU, false);
  }
  // if all the inputs are corrects, variable isSuccessful is true and the thanks message will appears
  if (isSuccessful === true) {
    showSuccessMsg();
  }
  return false;
};

//function that creates the thanks message after registration
function showSuccessMsg() {
  const body = document.querySelector(".modal-body");
  //creation of a new div with its class
  let newModal = document.createElement("div");
  newModal.classList.add('thanks-content');
  //creation of a tag <p> with its class and its content
  let thanks = document.createElement("p");
  thanks.classList.add('thanks-text')
  let thanksText = document.createTextNode("Merci pour votre inscription");
  newModal.appendChild(thanks);
  thanks.appendChild(thanksText);
  body.appendChild(newModal);
  //form is not display anymore
  form.style.display = "none";
  //creation of the button "Fermer"
  let newBtn = document.createElement("button");
  newBtn.classList.add('close-btn');
  let btnText = document.createTextNode("Fermer");
  newBtn.appendChild(btnText);
  newBtn.addEventListener("click", function () {
    modalbg.style.display = "none";
  });
  body.appendChild(newBtn);
}

/**
 *
 * @param {HTMLElement} input
 * @param {bool} show
 */
function toggleError(input, show) {
  if (input.getAttribute("data-error-visible") !== null) {
    input.setAttribute("data-error-visible", show);
  } else {
    input.parentElement.setAttribute("data-error-visible", show);
  }
}
