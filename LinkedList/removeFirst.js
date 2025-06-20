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

removeFirst(){
    if(!this.head)return;
    if(this.head === this.tail){
        this.head = null;
        this.tail = null;
    }else{
        this.head = this.head.next;
        this.head.prev = null;
    }
    
    }

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
res.insert(10);
res.insert(9);
res.insert(8);
res.insert(7);
res.printList();
res.removeFirst();
res.printList();