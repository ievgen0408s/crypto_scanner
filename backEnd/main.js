const express = require('express');
const { LinearClient } = require('bybit-api');
const app = express();


// Настройки API Bybit
const client = new LinearClient({
								key    : '<redacted>',   // Ваш API-ключ
								secret : '<redacted>',   // Ваш секретный ключ
								testnet: true,           // true для тестовой среды
});


// Включаем CORS для работы с фронтендом
const cors = require('cors');
app.use(cors());


// Маршрут для получения баланса
app.get('/balance', async (req, res) => {
    try {
        const response = await client.getWalletBalance();
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// simple function
app.get('/getCoin', async (req, res) => {
    try {
        const response = await 'super';
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Статические файлы для клиентской стороны (HTML)
app.use(express.static('public'));


// Запуск сервера
app.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000');
});