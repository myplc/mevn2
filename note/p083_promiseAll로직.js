const asy = (message, ret) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message)
      console.log(new Date())
      resolve(ret)
    }, 2 * 1000)
  })
}

const pmAll = [asy('비동기함수1발동', 1), asy('비동기함수2발동', 2)]

const timeTest = async () => {
  console.time('promiseAll측정')
  await Promise.all(pmAll).then(console.log)
  console.timeEnd('promiseAll측정')
}
timeTest() // 시간측정 2초걸림
