MONGO_HOST_CONFIG = configSrv
MONGO_PORT_CONFIG = 27017

MONGO_HOST_MONGOS = mongos_router
MONGO_PORT_MONGOS = 27018

MONGO_HOST_SHARD1-1 = shard1-1
MONGO_PORT_SHARD1-1 = 27019

MONGO_HOST_SHARD1-2 = shard1-2
MONGO_PORT_SHARD1-2 = 27020

MONGO_HOST_SHARD1-3 = shard1-3
MONGO_PORT_SHARD1-3 = 27021

MONGO_HOST_SHARD2-1 = shard2-1
MONGO_PORT_SHARD2-1 = 27022

MONGO_HOST_SHARD2-2 = shard2-2
MONGO_PORT_SHARD2-2 = 27023

MONGO_HOST_SHARD2-3 = shard2-3
MONGO_PORT_SHARD2-3 = 27024


# Настройка конфиг-сервера
.PHONY: init-config
init-config:
	@echo "Инициализация конфиг-сервера..."
	docker exec -it $(MONGO_HOST_CONFIG) sh -c "mongosh --port $(MONGO_PORT_CONFIG) < /scripts/init-configsrv.js"

# Инициализация шардов
.PHONY: init-shards
init-shards:
	@echo "Инициализация шарда 1..."
	docker exec -it $(MONGO_HOST_SHARD1-1) sh -c "mongosh --port $(MONGO_PORT_SHARD1-1) < /scripts/init-shard1.js"
	@echo "Инициализация шарда 2..."
	docker exec -it $(MONGO_HOST_SHARD2-1) sh -c "mongosh --port $(MONGO_PORT_SHARD2-1) < /scripts/init-shard2.js"

# Добавление шардов через MongoS
.PHONY: add-shards
add-shards:
	@echo "Добавление шардов в кластер..."
	docker exec -it $(MONGO_HOST_MONGOS) sh -c "mongosh --port $(MONGO_PORT_MONGOS) < /scripts/add-shards.js"

# Создание базы данных
.PHONY: create-db
create-db:
	@echo "Создание базы данных..."
	docker exec -it $(MONGO_HOST_MONGOS) sh -c "mongosh --port $(MONGO_PORT_MONGOS) < /scripts/create-db.js"

# Вставка данных
.PHONY: insert-documents
insert-documents:
	@echo "Вставка документов в базу данных..."
	docker exec -it $(MONGO_HOST_MONGOS) sh -c "mongosh --port $(MONGO_PORT_MONGOS) < /scripts/insert-documents.js"

# Проверка состояния
.PHONY: check-status
check-status:
	@echo "Получение состояния базы данных..."
	docker exec -it $(MONGO_HOST_MONGOS) sh -c "mongosh --port $(MONGO_PORT_MONGOS) < /scripts/check-status.js"

# Проверка количества записей
.PHONY: check-counts
check-counts:
	@echo "Проверка шард 1..."
	docker exec -it $(MONGO_HOST_SHARD1-1) sh -c "mongosh --port $(MONGO_PORT_SHARD1-1) < /scripts/check-counts.js"
	@echo "Проверка шард 2..."
	docker exec -it $(MONGO_HOST_SHARD2-1) sh -c "mongosh --port $(MONGO_PORT_SHARD2-1) < /scripts/check-counts.js"


# Полная инициализация кластера
.PHONY: setup-cluster
setup-cluster: init-config init-shards add-shards create-db insert-documents
	@echo "Кластер MongoDB успешно настроен!"

# Дефолтная команда: установка всего кластера
.PHONY: all
all: setup-cluster
