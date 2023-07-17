const Mycol = require('./CRUD_ori.js')
const main = async () => {
  const t = await Mycol.find(
    {
      title: /맨$/
    },
    { _id: 0 }
  ).lean() //p349 설명 효율적 메소드
  console.log(t)
}
main()
