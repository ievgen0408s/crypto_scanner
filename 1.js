"use strict";

//window.onload = function() {
	// все, что должно произойти после загрузки:
	// например, добавление прослушивателя
//	document.getElementById("square").addEventListener("click", changeColor);
//}

//const { LinearClient } = require('bybit-api');
//import { LinearClient } from 'bybit-api';
//const API_KEY = "<redacted>";
//const API_SECRET = "<redacted>";


async function getCoin() {
	try {
		const response = await fetch('http://localhost:3000/getCoin');
		const data = await response.json();
		if (data) {
			document.getElementById('balance').innerText = JSON.stringify(data, null, 2);
			alert('get coin work!');
		} else {
			document.getElementById('balance').innerText = `Error: ${data.error}`;
		}
	} catch (error) {
		document.getElementById('balance').innerText = `Error connection: ${error.message}`;
	}
}

 async function getConnection() {
	try {
		const response = await fetch('http://localhost:3000/balance');
		const data = await response.json();
		if (data.result) {
			document.getElementById('balance').innerText = JSON.stringify(data.result, null, 2);
		} else {
			document.getElementById('balance').innerText = `Error: ${data.error}`;
		}
	} catch (error) {
		document.getElementById('balance').innerText = `Error connection: ${error.message}`;
	}
}

/*
function getConnection() {

	// Создание клиента
	const client = new LinearClient({
		key: API_KEY,
		secret: API_SECRET,
		testnet: false, // Установите true для песочницы (testnet)
	});

	// Пример запроса баланса
	client.getWalletBalance()
		.then(response => {
			console.log('Ваш баланс:', response);
		})
		.catch(error => {
			console.error('Ошибка:', error);
		});
}
*/