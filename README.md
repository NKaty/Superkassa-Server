# Superkassa: Тестовое задание - Реализация серверной части

Приложение можно увидеть на Heroku: [https://superkassa-test-assignment.herokuapp.com/](https://superkassa-test-assignment.herokuapp.com/)

## Использованы

Node.js, Express, Socket.io

## Запуск

1. Клонируйте репозиторий

    ```git clone https://github.com/NKaty/Superkassa-Server.git server```
2. Перейдите в директорию с проектом

    ```cd server```
3. Установите зависимости

    ```npm install```
4. Запустите сервер (сервер запустится на порту 5000)

  - Для запуска в development mode (требуется отдельно запустить клиентскую часть приложения, которая находится в репозитории [https://github.com/NKaty/Superkassa-Client](https://github.com/NKaty/Superkassa-Client)):

    ```npm run server```

  - Для запуска в production mode (приложение можно увидеть в браузере по адресу [http://localhost:5000](http://localhost:5000)):

    ```npm start```  