import throttle from 'lodash.throttle';

const formElem = document.querySelector('.feedback-form');
const emailElem = document.querySelector('.feedback-form input');
const textareaElem = document.querySelector('.feedback-form textarea');

const currentTime = 'feedback-form-state';
const saveForm = localStorage.getItem(currentTime);
let formData = {};

formElem.addEventListener('input', throttle(formInput, 500));
formElem.addEventListener('submit', formSubmit);

pasteFormData();

function pasteFormData(e) {
  if (saveForm) {
    formData = JSON.parse(saveForm);
    emailElem.value = formData.email || 0;
    textareaElem.value = formData.message || 0;
  }
}

function formInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(currentTime, JSON.stringify(formData));
}

function formSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.target.reset();
  localStorage.removeItem(currentTime);
  formData = {};
}
