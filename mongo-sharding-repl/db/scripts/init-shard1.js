rs.initiate(
    {
      _id : "shard1",
      members: [
        { _id : 0, host : "shard1-1:27019" },
        { _id : 1, host : "shard1-2:27020" },
        { _id : 2, host : "shard1-3:27021" }
      ]
    }
);