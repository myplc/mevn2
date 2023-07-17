require('dotenv').config()
const mongoose = require('mongoose')
const USER = process.env.dbid
const PWD = process.env.dbpw
const HOST = process.env.dbhost
const DB = 'd1'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}` //?authMechanism=SCRAM-SHA-1&authSource=
// mongoose.set('useFindAndModify', false) // 6.0 이후부터는 자동관리
console.log(mongodbURL)
mongoose.set(`strictQuery`, false) // 권장사항 추가
mongoose
  .connect(mongodbURL, { useNewUrlParser: true }) //
  .then(() => {
    console.log('Connection successful !!')
  })
  .catch((e) => console.error(e))
const Mycol = require('./schema.js')
module.exports = Mycol
