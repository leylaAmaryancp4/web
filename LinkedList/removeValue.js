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
    removeValueVal(val) {
    let curr = this.head;

    while (curr) {
        if (curr.val === val) {
            let nextNode = curr.next; // save next before delete

            // Case: only node
            if (curr === this.head && curr === this.tail) {
                this.head = this.tail = null;
            }
            // Case: head
            else if (curr === this.head) {
                this.head = curr.next;
                this.head.prev = null;
            }
            // Case: tail
            else if (curr === this.tail) {
                this.tail = curr.prev;
                this.tail.next = null;
            }
            // Case: middle
            else {
                curr.prev.next = curr.next;
                curr.next.prev = curr.prev;
            }

            curr = nextNode; // move forward safely
        } else {
            curr = curr.next;
        }
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
res.insert(8);
res.printList();
res.removeValueVal(8);
res.printList();

