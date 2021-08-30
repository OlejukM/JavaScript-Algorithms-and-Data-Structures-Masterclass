class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queu {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);

    if (!this.size) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
      this.size++;
    }

    return this.size;
  }
  
  dequeue() {  
    if (!this.size) return null;

      const temp = this.first;

      if (this.first === this.last) {
        this.last = null;
      }

      this.first = this.first.next;
      this.size--;
      
      return temp.value;
  }
}
