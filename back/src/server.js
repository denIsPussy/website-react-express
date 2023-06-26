const { Pool } = require('pg');

// Создайте пул соединений
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'website-db',
  password: 'postgres',
  port: 5432,
});

// Передайте пул соединений ваши контроллеры
const usersController = new UsersController(pool);

// Здесь добавьте код для настройки маршрутов Express и других конфигураций
// ...

// Запуск сервера
app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});