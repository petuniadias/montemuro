const loginBtn = document.querySelector('.js-login-btn');

loginBtn.addEventListener('click', () => {
  console.log('botão clicado');
  store();
});

async function store() {
  const username = document.querySelector('.js-username').value;
  const password = document.querySelector('.js-password').value;
  const errorMessage = document.querySelector('.login-error-message');

  const response = await fetch('assets/backend/users.json');
  const data = await response.json();

  const admin = data.users[0];
  
  if (username === admin.username && password === admin.password) {
    console.log('Logged In');
  } else {
    errorMessage.style.display = `block`;
  }
}
