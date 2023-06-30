/* 에러발생 처리일때 */
function test(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof text === 'string'
        ? resolve('스트링입니다.')
        : reject('파악이 안됩니다.')
    }, time)
    console.log(text)
  })
}

/* 일반 비동기 에러처리 */
const testGo = async () => {
  console.time('일반비동기처리')
  try {
    await test('코딩', 3000)
    await test('Coding', 2000)
    await test(1314111, 1700)
    await test('자바스크립트', 1000)
  } catch (e) {
    console.log(e)
  }
  console.timeEnd('일반비동기처리')
}
testGo()
