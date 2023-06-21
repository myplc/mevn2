class Queue{
    constructor(){
        this.a=[]
    }
    front(){
        if(this.a.length===0){
            console.log("Queue is empty(front)")
            return
        }else return console.log(this.a[0])
    }
    enq(value){
        this.a.push(value)
    }
    deq(){
        if(this.a.length===0){
            console.log("Queue is empty(deq)")
            return
        }
        this.a.shift() // 배열의 맨 앞 지우기
    }
}
const q = new Queue()
q.enq(11)
q.enq(2)
q.enq(333)
q.enq(44)
q.enq(555555)
for(let i =0;i<6;i++){
    q.front() // a에 있는 데이터중 첫번째를 보여줌
    q.deq() // a에 있는 첫번째 데이터를 삭제.
}