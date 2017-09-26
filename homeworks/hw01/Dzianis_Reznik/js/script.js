let button = document.getElementById('showMoon');
let modal = document.getElementById('modal');

function displayMoon(){
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function hideMoon(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

button.addEventListener('click', displayMoon);
window.addEventListener('click', hideMoon);
