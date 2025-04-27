class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right=null

    }

}

class Tree {
    constructor(){
        this.root = null
    }

    insert = (val)=>{
        const newNode = new Node(val)
if(this.root==null){
    this.root = newNode
    return
}

const insertRecurse =(root, currentNode)=>{
if(currentNode.val>root.val){
if(root.right===null){
root.right=currentNode
}
else{
    insertRecurse(root.right,currentNode)
}
}
else if(currentNode.val<root.val){
    // console.log("currentVal inside insertRecursion", currentNode.val, root.val)
    if(root.left===null){
        root.left=currentNode
        }
        else{
            insertRecurse(root.left,currentNode)
        }
}
}

insertRecurse(this.root, newNode)


    }

    find = (val) =>{

        console.log("check root", this.root)
        const findRecurse = (val, currentNode)=>{
            console.log("currentNode", currentNode)
            if(currentNode===null){
                return "Not Found"
            }
            else if(currentNode.val===val){
                return "Found"
            }
            else{
                if(val>currentNode.val){
                  return findRecurse(val, currentNode.right) 
                }
                else{
                   return findRecurse(val, currentNode.left)
                }
            
            }
        }

        return findRecurse(val, this.root)

    }
}

const t1 = new Tree()

t1.insert(10)
t1.insert(15)
t1.insert(8)
t1.insert(13)
t1.insert(7)
console.log("find", t1.find(14))
console.log("t1", t1.root)