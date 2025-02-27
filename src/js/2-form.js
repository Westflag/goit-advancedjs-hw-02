const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

// Початковий об'єкт з порожніми значеннями
let formData = { email: '', message: '' };

// Функція для збереження у локальне сховище
const saveToLocalStorage = () => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
};

// Функція для завантаження даних із локального сховища
const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
};

// Відстеження введення користувача
form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value.trim();
  saveToLocalStorage();
});

// Відправлення форми
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Перевірка на заповненість всіх полів
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Form Data Submitted:', formData);

  // Очистка форми та локального сховища
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
});

// Завантаження даних при завантаженні сторінки
document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
