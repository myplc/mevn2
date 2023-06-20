const func1 = (e,i) => {
    console.log(`${i}번째 요소는 ${e}입니다.`);
}
const func2 = (e,i) => e*2
const func3 =(a,c,i)=>a+c
const func4 = e=>e%2
const arr = [1,2,3,4,5]
const a = arr.forEach(func1)
console.log('forEach:',a)
const b = arr.map(func2)
console.log('map:',b)
const c = arr.reduce(func3)
console.log('reduce:',c)
const d = arr.filter(func4)
console.log('filter:',d)