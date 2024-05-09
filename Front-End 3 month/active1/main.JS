const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const mail = document.getElementById('mail');

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

function onInput() {
  if (isEmailValid(mail.value)) {
    mail.style.border = '1px solid green';
  } else {
    mail.style.border = '1px solid red';
  }
}

mail.addEventListener('input', onInput);

// Links

const URL_REGEXP = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,}(:\d{1,5})?(\/\S*)?$/;
const link = document.getElementById('link');

function isLinkValid(value) {
  return URL_REGEXP.test(value);
}

function onInput() {
  if (isLinkValid(link.value)) {
    link.style.border = '1px solid green';
  } else {
    link.style.border = '1px solid red';
  }
}

link.addEventListener('input', onInput);