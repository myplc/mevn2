const express = require('express');
const path = require('path');
const logger = require('morgan')
const fs = require('fs')
const app = express()
const _path = path.join(__dirname, '/')
app.use(express.static(_path))
app.use(logger('tiny'))

app.get('/data', (req, res) =>{
    const name = req.query.name
    const content = req.query.content
    fs.writeFile(_path+name+'.txt',content,(e)=>{
        if (e) console.log(e)
        console.log('파일 작성이 완료되었습니다.')
        res.send(`<script>alert('${name}파일로 저장합니다.');history.go(-1)</script>`)
    })
})


app.listen(3000,() => {console.log('listening on port 3000')})