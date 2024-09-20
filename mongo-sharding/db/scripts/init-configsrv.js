rs.initiate({
  _id: 'rs-config',
  configsvr: true,
  members: [
    { _id: 0, host: 'configsrv:27017' }
  ]
})

