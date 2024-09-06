const clock = document.querySelector('h2#clock');

//padStart(num, 'string') : 문자열의 메서드로 사용되며 해당 문자열 앞에 num만큼 해당 문자열 추가
//padEnd(num, 'string') : 문자열의 메서드로 사용되며 해당 문자열 뒤에 num만큼 해당 문자열 추가
function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setTimeout(sayHello, 1000); //interval로 실행할 함수, interval 간격(ms)
getClock();
setInterval(getClock, 1000);
