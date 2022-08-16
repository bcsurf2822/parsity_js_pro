/*

This graph should implement an adjacency list

*/

class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(v) {
        if (this.adjList[v]) {
            throw new Error('Vertex already exists');
        }

        this.adjList[v] = [];
    }

    addEdge(v, w) {
        this.adjList[v].push(w);
    }

    // implements breadth first search
    bfs(node, visited = []) {
        //add your code here

        return visited;
    }

    // implements depth first search
    dfs(node, visited = []) {
        //add your code here

        return visited;
    }

    print() {
        console.log(this.adjList);
    }
}

module.exports = { Graph };

/**
* @example Graph 
    A
 /  |  \
B   D    E
|  /
 C  

*/
