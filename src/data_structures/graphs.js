/*

This graph should implement an adjacency list

*/

class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(v) {
        if (this.adjList[v]) {
            throw error('Vertex already exists');
        }

        this.adjList[v] = [];
    }

    addEdge(v, w) {
        this.adjList[v].push(w);
    }

    bfs(node) {
        //add your code here

        return visited;
    }

    dfs(node, visited = []) {
        //add your code here

        return visited;
    }

    print() {
        console.log(this.adjList);
    }
}

module.exports = { Graph };

/*

    A
 /  |  \
B   D    E
|  /
 C  

*/
