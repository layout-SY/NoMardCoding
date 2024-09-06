const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');
const greeting = document.querySelector('#greeting');

const link = document.querySelector('a');
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME = 'username';

// function onSubmit(info) {
// 	info.preventDefault();
// 	const value = loginInput.value;
// 	localStorage.setItem(USERNAME, value);
// 	loginForm.classList.add(HIDDEN_CLASSNAME);
// 	paintGreetings(value);
// }

// function paintGreetings(username) {
// 	greeting.innerText = `Hello ${username}`;
// 	greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem('username');

// if (localStorage.getItem(USERNAME) === null) {
// 	loginForm.classList.remove(HIDDEN_CLASSNAME);
// 	loginForm.addEventListener('submit', onSubmit);
// } else {
// 	paintGreetings(savedUsername);
// }
