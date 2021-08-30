class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value) {
    this.adjacencyList[value] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1,v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      let adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[value];
  }

  depthFirstRecursive(startVertex) {
    const resultList = [];
    const visited = {};

    const dfsHelper = (vertex) => {
      if(!vertex) return;

      visited[vertex] = true;
      resultList.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if(!visited[neighbor]) {
          dfsHelper(neighbor);
        }
      })
    }
    dfsHelper(startVertex);
    
    return resultList;
  }

  depthFirstIterative(startVertex) {
    const stack = [startVertex]; // or we can push startVertex below;
    const resultList = [];
    const visited = {};
    let currentVertex;

    visited[startVertex] = true;

    while(stack.length) {
      currentVertex = stack.pop();
      resultList.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return resultList;
  }

  breadthDeepFirstSearch(startVertex) {
    const queue = [startVertex];
    const resultList = [];
    const visited = {};
    let currentVertex;
      
    visited[startVertex] = true;

    while(queue.length) {
      currentVertex = queue.shift();
      resultList.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    
    return resultList;
  }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.depthFirstRecursive('A')); //A B D E C F
console.log(graph.depthFirstIterative('A')); //A C E F D B 
console.log(graph.breadthDeepFirstSearch('A')); //A C E F D B 