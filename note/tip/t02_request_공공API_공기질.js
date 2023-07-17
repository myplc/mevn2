const request = require('request')

const url =
  'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=oUQKydR5Va%2BZHhX322gRHaUqFPBhodTiidQzTV7xyuFBr75AwNnR5hyf%2FDtEV6YGi4PmUmvoP5Qj9m7yKctSXA%3D%3D&sidoName=%EB%B6%80%EC%82%B0&returnType=json'

request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const junpo = rst.response.body.items
  junpo.forEach((v) => {
    console.log(
      `지역:${v.stationName}, 오존:${v.o3Value}, 일산화탄소:${v.coValue}, 미세먼지:${v.pm10Value}`
    )
  })
})
