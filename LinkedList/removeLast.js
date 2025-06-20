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


    removeLast(){
 if(!this.tail)return;
 if(this.head === this.tail){
    this.head = null;
    this.tail = null
 } else{
    this.tail= this.tail.prev;
    this.tail.next = null;
 }
}
//tpelList zangvaci nman:
printList() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        console.log(result);
    }
        
}
let res = new MyLinkedList();
res.insert(1);
res.insert(2);
res.insert(3);
res.insert(4);
res.printList();
res.removeLast();
res.printList();