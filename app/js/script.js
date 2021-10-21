const user = document.querySelector('.card__text-user');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
  user.classList.toggle('active');
});
