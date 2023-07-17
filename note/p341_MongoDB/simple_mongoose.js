const mongoose = require('mongoose')
const Photos = require('./photo.js')
const fs = require('fs')
const path = require('path')
const mongoDB = 'mongodb://127.0.0.1/my_database1'

mongoose.set('strictQuery', false) // 필수 추가
mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => {
    console.log('Connection successfull !!!')
  })
  .catch((err) => {
    console.error(err)
  })

const _path = path.join(__dirname, './photos.json')
const main = async () => {
  const t = JSON.parse(fs.readFileSync(_path).toString())
  console.time('5000건의 데이터 삽입')
  Photos.insertMany(t).then(() => {
    // insertMany가 deprecated되서 프라미스형태로 바뀜
    console.timeEnd('5000건의 데이터 삽입')
  })
}
main()
