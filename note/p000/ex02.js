// 1부터 100까지의 수를 차례로 배열에 담으세요.
// 담은 그 수를 모두 더 하시오.
// 결과값을 출력하시오.
const arr = Array(100).fill(0).reduce((a,c,i)=>{
     c=i+1
     console.log(`${a}+${c}=${a+c}`)
    return a+c 
},0)
console.log(arr)