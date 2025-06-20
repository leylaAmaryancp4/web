class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;

    }
}
class MyLinkedList{
    constructor(){
this.head = null;
this.tail = null;
    }
    insert(val){
    const node = new Node(val);
    if(!this.head){
        this.head = node;
        this.tail = node;
    }else{
        //crkular referens vor infinit loop changecni
        this.tail.next =node;
       node.prev = this.tail;
        this.tail = node;
    }
}


    insertFirst(val){
        const node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
             }
    
    }

    search(val){
        if(!this.head)return false;
        let current = this.head;
        while(current){
            if(current.val === val){
                return true;
            }
            current = current.next;
        }
        return false;
        

}

}

let res = new MyLinkedList();
res.insert(1);
res.insert(2);
res.insert(3);
res.insert(4);
console.log(res.search(3));

