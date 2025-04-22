rs.initiate({
  _id: 'rs-shard2',
  members: [
    { _id: 0, host: 'shard2:27020' }
  ]
})
