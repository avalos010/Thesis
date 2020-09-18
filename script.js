document.querySelector('.eye-icon').addEventListener('click', function() {
const passwordElement = document.getElementById('password')
if(passwordElement.getAttribute('type') == 'password') {
  passwordElement.setAttribute('type', 'text')
}
else {
  passwordElement.setAttribute('type', 'password')

}
})
