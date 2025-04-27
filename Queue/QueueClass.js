class Node{
    constructor(val){
this.value = val;
this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size= 0;
    }

    enqueue=(val)=>{

        var newNode = new Node(val)
if(this.first===null){
    this.first=newNode
    this.last=newNode
}
else{
    this.last.next = newNode
    this.last = newNode
    
}
this.size+=1
    }

    dequeue=()=>{
        let temp = this.first
        if(this.first===null){
            return null
        }
        else if(this.first===this.last){
this.last=null
        }
        else{
            this.first = this.first.next
        }
        return temp.value
    }
}

const q1 = new Queue()
q1.enqueue('a');
q1.enqueue('b')
q1.enqueue('c');
console.log("dequeue val",q1.dequeue())
console.log("dequeue val2",q1.dequeue())
console.log("check q1",q1.first, q1.last)