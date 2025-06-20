/*get(index) => տվյալ index-ում գտնվող value-ն կամ null
set(index, value) => update անել index-րդ node-ի value-ն
insertAt(index, value) — ավելացնել node index-րդ դիրքում
removeAt(index) — ջնջել index-րդ դիրքի node-ը
indexOf(value) — վերադարձնել value-ի ինդեքսը կամ -1
** Doubly Linked List-ը դարձնել Circular*/

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList{
    constructor(){
    this.head = null;
    this.tail = null;
    }
    insert(val){
       let node = new Node(val);
       if(!this.head){
        this.head = node;
        this.tail = node;
       }else{
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
 }
}
getVal(index){
    let i = 0;
    let current = this.head;
 while(current){
    if(i === index){
        return current.data;
    }
        current = current.next;
        i++;
} 
    return null;
 
 }

 set(index, val){
    let current = this.head;
    let i = 0;
    while(current){
        if(i === index){
            current.data = val;
            }
            current = current.next;
            i++;
    }

 }

 insertAt(index,val){
    let node = new Node(val);
    if(index === 0){
    if(!this.head){
        this.head = node;
        this.tail = node;
    }else{
        node.next = this.head;
        this.head.prev = node;
        this.tail = node;
        this.head = node;
        
    }
    return;
}
let current = this.head;
let i = 0;
while(current && i < index - 1){
    current = current.next;
    i++;
}
if(!current){
    return;
}
node.next = current.next;
node.prev = current;

if(current.next){
    current.next.prev = node;
}else{
    this.tail = node;
}
current.next = node;
 }

 
    removeAt(index) {
    if (!this.head || index < 0) return null;

    let current = this.head;
    let i = 0;

    // Remove head
    if (index === 0) {
        let removedData = current.data;
        this.head = current.next;

        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null; // list became empty
        }

        return removedData;
    }

    // Traverse to the index
    while (current && i < index) {
        current = current.next;
        i++;
    }

    // Index out of bounds
    if (!current) return null;

    let removedData = current.data;

    if (current.prev) {
        current.prev.next = current.next;
    }

    if (current.next) {
        current.next.prev = current.prev;
    } else {
        // Removing tail
        this.tail = current.prev;
    }

    return removedData;
}

 
    indexOf(val) {
    let current = this.head;
    let index = 0;

    while (current) {
        if (current.data === val) {
            return index;
        }
        current = current.next;
        index++;
    }

    return -1; // Value not found
}
 


print(){
    let current = this.head;
    let result = [];
    while(current){
        result.push(current.data);
        current = current.next;
}
console.log(result);

    }
}

    let res = new LinkedList();
    res.insert(10);
    res.insert(20);
    res.insert(30);
    res.print();
    let val = res.getVal(1);
    console.log(val);
    res.set(1,50);
    res.print();
    res.insertAt(3,40);
    res.print();
    res.removeAt(1);
    res.print();
    let ind = res.indexOf(40);
    console.log(ind);
