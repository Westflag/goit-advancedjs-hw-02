// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault();

  const delay = parseInt(event.target.delay.value, 10);
  const state = event.target.state.value;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled after ${delay}ms`);
      } else {
        reject(`❌ Rejected after ${delay}ms`);
      }
    }, delay);
  })
    .then((message) => {
        console.log(message);
        iziToast.show({
          message: message,
        });
      },
    )
    .catch((error) => {
      console.error(error);
      iziToast.error({
        message: error,
      });
    });
});
