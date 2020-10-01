// Validate Email.
function validateMail(value, input) {
  var result = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/.test(value);
  input.classList.remove('valid');
  input.classList.remove('invalid');

  if (result) {
    input.classList.add('valid');
    return true;
  }
  else {
    input.classList.add('invalid');
    return false;
  }
}

// Validate Name.
function validateName(value, input) {
  var result = /^[A-Za-zА-Яа-я]{1,15}$/i.test(value);
  input.classList.remove('valid');
  input.classList.remove('invalid');

  if (result) {
    input.classList.add('valid');
    return true;
  }
  else {
    input.classList.add('invalid');
    return false;
  }
}

// Validate phone number.
function validatePhone(value, input) {
  var result = /^\d[\d(\)\-]{4,14}\d$/.test(value);
  input.classList.remove('valid');
  input.classList.remove('invalid');

  if (result) {
    input.classList.add('valid');
    return true;
  }
  else {
    input.classList.add('invalid');
    return false;
  }
}

// Validare form. 
function validateForm(e) {
  var inputs = document.querySelectorAll('input[data-rules],textarea[data-rules]');
  for (var input of inputs) {
    var rules = input.dataset.rules;
    var value = input.value;
    var regName;
    var regPhone;
    var regMail;

    switch (rules) {
      case 'name':
        regName = validateName(value, input);
        break;

      case 'email':
        regMail = validateMail(value, input);
        break;

      case 'phone':
        regPhone = validatePhone(value, input);
        break;
    }
  }

  if (regName === true && regMail === true && regPhone === true) {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    clearErrors();
    return false;
  }

  return false;
}

function clearErrors() {
  var inputs = document.querySelectorAll('input[data-rules],textarea[data-rules]');
  for (var input of inputs) {
    input.classList.remove('valid');
    input.classList.remove('invalid');
  }
}
//popup

document.addEventListener('DOMContentLoaded', function () {
  var popup = document.getElementById('popup');
  var closePopup = document.getElementById('close-popup');
  closePopup.addEventListener('click', function (event) {
    event.preventDefault();
    popup.style.display = 'none';
  });
});
