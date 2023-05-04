const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
}

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));

window.onload = function() {
  var images = [
    "/images/wallpaper.jpg",
    "/images/wallpaper2.jpg",
    "/images/wallpaper3.jpg",
    "/images/wallpaper4.png",
    "/images/wallpaper5.jpg",
    "/images/wallpaper6.jpg",
    "/images/wallpaper7.jpg",
    "/images/wallpaper8.jpg",
    "/images/wallpaper9.jpg",
    "/images/wallpaper10.jpg",
    "/images/wallpaper11.jpg",
    "/images/wallpaper12.jpg",
    "/images/wallpaper13.jpg",
    "/images/wallpaper14.jpg"
    
  ];

  var randomIndex = Math.floor(Math.random() * images.length);

  var backgroundElement = document.getElementById("background-image");
  backgroundElement.style.setProperty('background-image', "url('" + images[randomIndex] + "')");
};
