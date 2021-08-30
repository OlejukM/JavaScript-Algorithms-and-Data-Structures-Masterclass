class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;

            return this;
        }
        let current = this.root;

        while(true) {
            if(value === current.value) return undefined;
            if(value < current.value) {
                if(current.left === null){
                    current.left = newNode;

                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;

                    return this;
                } 
                current = current.right;
            }
        }
    }
    
    find(value) {
      if (this.root === null) return undefined;

      let current = this.root;

      while(current) {
        if(current.value === value) return current;

        if(value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      
      return undefined;
    }

    breadthFirstSearch() { 
      if(!this.root) return null;

      let queue = [this.root]; // Place a root node in the queue
      let visited = [];
      let node;

      while(queue && queue.length) {
        node = queue.shift();
        visited.push(node.value);

        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return visited;
  }

  depthFirstPreOder() {
    let visited = [];

    function traverse(node) {
      visited.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);

    return visited;
  }

  depthFirstPostOrder() {
    let visited = [];

    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(this.root);

    return visited;
  }

  depthFirstInOrder() {
    let visited = [];

    function traverse(node){
      if(node.left) traverse(node.left);
      visited.push(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);

    return visited;
  }
}


//      10
//   5     13
// 2  7  11  16

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.find(2) // returns node
tree.find(100) // returns undefined
tree.breadthFirstSearch();
tree.depthFirstPreOder();
tree.depthFirstPostOrder();
tree.depthFirstInOrder();



