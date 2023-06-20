const arr = Array(100).fill(0).reduce((a,c,i,arr)=>{
    arr[i]=i*2+1
    return arr
},0)
console.log(arr)