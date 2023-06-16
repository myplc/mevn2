const express=require('express')
const app=express()
const PORT=3000
// ---1번 로직
app.use((req,res,next)=>{
console.log('1 Time:',Date.now())
next()
})
app.use((req,res,next)=>{
    //2번 로직
    console.log('2 Time:',Date.now())
    next()
})
app.listen(PORT,()=>{
    console.log(`서버가 생성되었습니다.${PORT}`)
})
/*
서버가 생성되었습니다.3000
1 Time: 1686796694364
2 Time: 1686796694364 */