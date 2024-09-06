function onGeoSuccess(position) {
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=API KEY&units=metric`;
	//fetch : 대신 url을 불러줌
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weatherContainer = document.querySelector('#weather span:first-child');
			const city = document.querySelector('#weather span:last-child');
			const name = data.name;
			const weather = data.weather[0].main;
			weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
			city.innerText = name;
		});
}
function onGeoError() {
	alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
