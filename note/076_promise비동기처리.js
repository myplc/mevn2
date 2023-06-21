const job1 = ()=>{
    return new Promise((resolve, reject)=>{
        const random = Math.random()*1000
        setTimeout(()=>{
            console.log('job1')
            resolve('job1')
        },random)
    })    
}
const job2 = ()=>{
    return new Promise((resolve, reject)=>{
        const random = Math.random()*1000
        setTimeout(()=>{
            console.log('job2')
            resolve('job2')
        },random)
    })    
}
const job3 = ()=>{
    return new Promise((resolve, reject)=>{
        const random = Math.random()*1000
        setTimeout(()=>{
            console.log('job3')
            resolve('job3')
        },random)
    })    
}

// job1().then(ret=>job2()).then(ret=>job3())
job1().then(job2).then(job3)