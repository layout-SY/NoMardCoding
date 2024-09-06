// const loginForm = document.querySelector('#login-form');
// const loginInput = loginForm.querySelector('input');
// const loginButton = loginForm.querySelector('input');
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');
const greeting = document.querySelector('#greeting');

const link = document.querySelector('a');
const HIDDEN_CLASSNAME = 'hidden';

function handleLoginBtnClick() {
	// console.log('hello', loginInput.value); 유효성 검사 필요
	// console.log('login success');
	const value = loginInput.value;
	if (value === '') {
		alert('Please write your name');
	} else if (value.length > 15) {
		alert('your name is too long');
	}
}

// 인자가 없어도 js가 필요한 데이터로 채워줌
function onSubmit(info) {
	info.preventDefault(); //submit이 되면 페이지가 새로고침 되는데 그걸 막는 함수
	// console.log(info);
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const value = loginInput.value;
	greeting.innerText = `Hello ${value}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
	event.preventDefault();
	console.log(event);
	alert('clicked'); //코드를 실행하기 전 항상 alert 먼저 실행됨
}

// loginButton.addEventListener('click', handleLoginBtnClick);

loginForm.addEventListener('submit', onSubmit);

//addEventListener의 첫 번째 인자는 무조건 발생한 이벤트에 대한 정보를 담고 있음
//click, submit 등

link.addEventListener('click', handleLinkClick);
