const express = require('express');
const path = require('path');
const logger = require('morgan');
const fs = require('fs');

const app = express();
const PORT = 3000
const _path = path.join(__dirname, '/')
console.log(_path)
app.use('/',express.static(_path))
app.use(logger('tiny'))

app.get('/files',(req,res)=>{
    fs.readdir(_path,'utf-8',(err,data)=>{
        // console.log(Array.isArray(data))
        let list = '<ul>'
        data.forEach(v=>{
            if(v.indexOf('.')===-1){
                list += `<li><a href="#">[${v}]</a></li>`    
            }else{
                list += `<li><a href="/${v}">${v}</a><button onclick="location.href='del/${v}'" >삭제</button></li>`
            }
        })
        list += '</ul>'
         res.send(list);
    })
})
app.get('/del/:fname',(req,res)=>{
    const fname = req.params.fname
    fs.unlink(_path+'/'+fname,(err)=>{
        if(err)console.log(err)
        console.log('삭제 성공하였습니다.')
    })
    res.send(`<script>alert('${fname}를 삭제 하였습니다.');location.href = document.referrer;</script>`) //history.go(-1)
})

app.listen(PORT,()=>console.log('listening on port'+PORT))