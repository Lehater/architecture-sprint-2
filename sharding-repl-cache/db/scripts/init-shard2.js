rs.initiate(
    {
      _id : "shard2",
      members: [
        { _id : 0, host : "shard2-1:27022" },
        { _id : 1, host : "shard2-2:27023" },
        { _id : 2, host : "shard2-3:27024" }
      ]
    }
);