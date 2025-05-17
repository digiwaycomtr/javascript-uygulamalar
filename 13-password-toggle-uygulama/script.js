
const togglePassword = document.getElementById('togglePassword');

const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {

  const İsPasswordVisible = passwordInput.type === 'text';

  passwordInput.type = İsPasswordVisible ? 'password' : 'text';

  //console.log(İsPasswordVisible)

  if (İsPasswordVisible) {
    togglePassword.classList.remove('fa-eye');
    togglePassword.classList.add('fa-eye-slash');
  } else {
    togglePassword.classList.remove('fa-eye-slash');
    togglePassword.classList.add('fa-eye');
  }

})