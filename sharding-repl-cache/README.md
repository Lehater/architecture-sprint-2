## Задание 4. Кэширование

### Шаги для инициализации шардирования, репликации и кеширования
#### Запуск проекта.
перейти в директорию sharding-repl-cache и запустить команды:
1. `docker compose up -d --build`
2. `make init-config` 
3. `make init-shards`
4. `make add-shards`
5. `make create-db`
6. `make insert-documents`

#### Проверка работы
1. `make check-status`
2. `make check-counts`
