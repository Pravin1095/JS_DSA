class Node{
    constructor(val){
        this.value = val
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0

    }

    push = (num)=>{
        if(this.first ==null){
            this.first= new Node(num)
            this.first.next = new Node(num)
            this.last = this.first
        }
        else{
            // console.log("this.first", this.first)
            let temp = null
            temp= this.first
            this.first= new Node(num)
            this.first.next = temp
        }
        this.size+=1

    }
    
    pop =()=>{
        if(this.first===null){
            return null
        }
            let temp = this.first
        console.log("check first and last", this.first, this.last)
            if(this.first===this.last){
                this.last=null
            }
                this.first = this.first.next
            this.size-=1
            return temp.value
        
    }
}

const s1= new Stack()
s1.push(1)
s1.push(2)
s1.push(3)
s1.push(4)
s1.push(5)
console.log("check pop1",s1.pop())
console.log("check pop2",s1.pop())
console.log("check pop3",s1.pop())
console.log("s1", s1)