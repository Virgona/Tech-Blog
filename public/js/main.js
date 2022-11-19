// events when the buttons are clicked in the nav
function loginHandler() {
  document.location.replace('/login');
}

function logoutHandler() {
  document.location.replace('/logout');
}

function signupHandler() {
  document.location.replace('/signup');
}

function homeHandler() {
  document.location.replace('/');
}

function dashboardHandler() {
  document.location.replace('dashb');
}

document.querySelector('#login').addEventListener('click', loginHandler);
document.querySelector('#signup').addEventListener('click', signupHandler);
document.querySelector('#home').addEventListener('click', homeHandler);
document
  .querySelector('#dashboard')
  .addEventListener('click', dashboardHandler);
document.querySelector('#logout').addEventListener('click', logoutHandler);
