for (let i = 0; i < 1000; i++) {
  db.getSiblingDB("somedb").helloDoc.insert({ msg: "Hello World " + i })
}
