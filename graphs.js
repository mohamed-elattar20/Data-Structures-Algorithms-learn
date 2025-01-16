class Graph {
  constructor() {
    this.adjacencyList = {};
  }
}
Graph.prototype.addVertex = function (vertex) {
  if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
};
Graph.prototype.addEdge = function (vertex1, vertex2) {
  this.adjacencyList[vertex1]?.push(vertex2);
  this.adjacencyList[vertex2]?.push(vertex1);
};
Graph.prototype.removeEdge = function (vertex1, vertex2) {
  this.adjacencyList[vertex1] = this.adjacencyList[vertex1]?.filter(
    (v) => v !== vertex2
  );
  this.adjacencyList[vertex2] = this.adjacencyList[vertex2]?.filter(
    (v) => v !== vertex1
  );
};
Graph.prototype.removeVertex = function (vertex) {
  if (this.adjacencyList[vertex]) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertext = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertext);
    }
    delete this.adjacencyList[vertex];
  }
};

const graph = new Graph();
graph.addVertex("hi");
graph.addVertex("mo");
graph.addVertex("bye");
graph.addEdge("hi", "mo");
graph.addEdge("hi", "bye");
graph.addEdge("mo", "bye");
// graph.removeEdge("hi", "mo");
graph.removeVertex("hi");
console.log(graph);
