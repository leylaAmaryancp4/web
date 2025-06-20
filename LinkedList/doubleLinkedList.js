/*Task: Իմպլեմենտել Doubly Linked List  հետևյալ ֆունկցիաներով
insert(value) =>ավելացում վերջից
removeLast => tail-ի ջնջում
removeFirst => head-ի ջնջում
insertFirst(value) => ավելացնել նոր head
search(value) => վերադարձնել true, եթե value-ն կա, այլապես՝ false
removeValue(val) => ջնջել այն node-երը, որոնց արժեքները val են:

*/




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

removeValueVal(val) {
    let curr = this.head;

    while (curr) {
        if (curr.val === val) {
            // Case: node is the head
            if (curr === this.head) {
                this.head = curr.next;
                if (this.head) this.head.prev = null;
                if (curr === this.tail) this.tail = null;
            }
            // Case: node is the tail
            else if (curr === this.tail) {
                this.tail = curr.prev;
                this.tail.next = null;
            }
            // Case: node is in the middle
            else {
                curr.prev.next = curr.next;
                curr.next.prev = curr.prev;
            }
            break; // remove only first occurrence
        }
        curr = curr.next;
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
res.insert(16);
res.insert(42);
res.insert(33);
console.log(res);
res.removeLast();
console.log(res);
res.removeFirst();
console.log(res);
res.insertFirst(100);
console.log(res);
let bool = res.search(100)
console.log(bool);
res.removeValueVal(42);
res.printList();


