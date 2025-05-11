class Node{
    constructor(val){
this.value = val;
this.right= null;
this.left = null;
this.next = null;
    }

}

class Queue{
    constructor(){
this.first = null
this.last =null
    }


    enqueue=(node)=>{
if(this.first === null){
    this.first = node
    this.last = node
}
else{
    this.last.next = node
    this.last = node

}
    }

    dequeue=()=>{
        let temp = this.first
        if(this.first===null){
            return null
        }
        else if(this.first === this.last){
            this.last = null
        }
        else{
           
            this.first = this.first.next
        }
        return temp
    }

    getFirst=()=>{
        return this.first
    }
}

class TreeTraversal{
    constructor(){
        this.root = null
        this.queue = new Queue()
    }
    insert = (val)=>{
        const newNode = new Node(val)
        
if(this.root===null){
    this.root=newNode
    this.queue.enqueue(newNode)

}
else{
const checkNode = this.queue.getFirst()
if(checkNode.left===null){
    checkNode.left = newNode
    this.queue.enqueue(newNode)
}
else if(checkNode.right===null){
    checkNode.right = newNode
    this.queue.enqueue(newNode)
    this.queue.dequeue()
}
}
    }
}

const t1 = new TreeTraversal()
t1.insert(10)
t1.insert(5)
t1.insert(8)
t1.insert(3)
t1.insert(1)
t1.insert(20)
console.log("check t1", t1.root.left)
