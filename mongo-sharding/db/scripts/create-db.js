sh.enableSharding("somedb")
sh.shardCollection("somedb.helloDoc", { _id: 1 })
