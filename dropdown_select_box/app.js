const dropdownMenu = document.querySelector('.lang-list');
const dropdownButton = document.querySelector('.favorite-lang');

dropdownButton.addEventListener('click', function (event) {
  if (this.active) {
    dropdownMenu.classList.remove('active');
    dropdownButton.classList.remove('active');
  } else {
    dropdownMenu.classList.add('active');
    dropdownButton.classList.add('active');
  }

  this.active = !this.active;
});

dropdownButton.active = false;
