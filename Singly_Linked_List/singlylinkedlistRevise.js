class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
this.length=0;
this.head=null;
this.tail=null;
    }
    push(val){

        let node= new Node(val);
if(!this.head){
   
    this.head=node;
    this.tail=node
 
}
else{
this.tail.next=node;
this.tail=node
}
this.length+=1
return this
    }

pop(){
    let prev
    let current=this.head
    if(!this.head){
        return undefined
    }
    else{
        while(current){
            console.log("current", current.next.next)
            if(!current.next.next){
                prev=current
                break
            }
            
            current=current.next
        }
    prev.next=null;
    this.tail=prev
    this.length--
    if(this.length==0){
        this.head=null;
        this.tail=null;
    }
    }
    return this
}

shift(val){
    let node=new Node(val);
    let nextVal
if(!this.head){
   
    this.head=node
    this.tail=node
}
else{
    nextVal=this.head
this.head=node
this.head.next=nextVal

}
return this
}

}

list=new SinglyLinkedList()
list.push('Hello')
list.push('there')
list.push("How")
list.push("are")
console.log(list.push("you"))
console.log(list.pop())
list.push("they")
list.shift("Hey")
console.log(list)
