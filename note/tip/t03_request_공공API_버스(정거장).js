require('dotenv').config()
const request = require('request')
const { XMLParser } = require('fast-xml-parser')
const parser = new XMLParser()

const url = 'http://apis.data.go.kr/6260000/BusanBIMS/busStopList?serviceKey='
const key = process.env.okey
const bstop = encodeURI('서면역') // <-> decodeURL()
const opt = '&pageNo=1&numOfRows=100&bstopnm=' + bstop

const urlTotal = url + key + opt

console.log(urlTotal)

request(urlTotal, (e, res, body) => {
  const rst = parser.parse(body)
  const _ = rst.response.body.items
  console.log(_)
})
