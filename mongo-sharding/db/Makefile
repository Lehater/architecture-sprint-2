MONGO_HOST_MONGOS = mongos
MONGO_PORT_MONGOS = 27018

MONGO_HOST_CONFIG = configsrv
MONGO_PORT_CONFIG = 27017

MONGO_HOST_SHARD1 = shard1
MONGO_PORT_SHARD1 = 27019

MONGO_HOST_SHARD2 = shard2
MONGO_PORT_SHARD2 = 27020


# Настройка конфиг-сервера
.PHONY: init-config
init-config:
	@echo "Инициализация конфиг-сервера..."
	docker exec -it $(MONGO_HOST_CONFIG) sh -c "mongosh < /scripts/init-configsrv.js"

# Инициализация шардов
.PHONY: init-shards
init-shards:
	@echo "Инициализация шарда 1..."
	docker exec -it $(MONGO_HOST_SHARD1) sh -c "mongosh --port 27019 < /scripts/init-shard1.js"
	@echo "Инициализация шарда 2..."
	docker exec -it $(MONGO_HOST_SHARD2) sh -c "mongosh --port 27020 < /scripts/init-shard2.js"

# Добавление шардов через MongoS
.PHONY: add-shards
add-shards:
	@echo "Добавление шардов в кластер..."
	docker exec -it $(MONGO_HOST_MONGOS) sh -c "mongosh --port 27018 < /scripts/add-shards.js"

# Создание базы данных
.PHONY: create-db
create-db:
	@echo "Создание базы данных..."
	docker exec -it $(MONGO_HOST_MONGOS) sh -c "mongosh --port 27018 < /scripts/create-db.js"

# Вставка данных
.PHONY: insert-documents
insert-documents:
	@echo "Вставка документов в базу данных..."
	docker exec -it $(MONGO_HOST_MONGOS) sh -c "mongosh --port 27018 < /scripts/insert-documents.js"

# Проверка данных
.PHONY: check-status
check-status:
	@echo "Проверка количества документов в базе данных..."
	docker exec -it $(MONGO_HOST_MONGOS) sh -c "mongosh --port 27018 < /scripts/check-status.js"

# Полная инициализация кластера
.PHONY: setup-cluster
setup-cluster: init-config init-shards add-shards create-db insert-documents
	@echo "Кластер MongoDB успешно настроен!"
