import LinkedList from '../linked-list/LinkedList';

export default class GraphVertex {
  constructor(value) {
    if (value === undefined) {
      throw new Error('Graph vertex must have a value');
    }

    const edgeComparator = (edgeA, edgeB) => {
      if (edgeA.getKey() === edgeB.getKey()) {
        return 0;
      }

      return edgeA.getKey() < edgeB.getKey() ? -1 : 1;
    };
    this.value = value;
    this.edges = new LinkedList(edgeComparator);
  }

  addEdge(edge) {
    this.edges.append(edge);
    return this;
  }

  deleteEdge(edge) {
    this.edges.delete(edge);
  }


  getNeighbors() {
    const edges = this.edges.toArray();
    const neighborsConverter = (node) => {
      return node.value.startVertex === this ? node.value.endVertex : node.value.startVertex;
    };
    return edges.map(neighborsConverter);
  }

  getEdges() {
    return this.edges.toArray().map(linkedListNode => linkedListNode.value);
  }

  getDegree() {
    return this.edges.toArray().length;
  }

  hasEdge(requiredEdge) {
    const edgeNode = this.edges.find({
      callback: edge => edge === requiredEdge,
    });
    return !!edgeNode;
  }

  hasNeighbor(vertex) {
    const vertexNode = this.edges.find({
      callback: edge => edge.startVertex === vertex || edge.endVertex === vertex,
    });

    return !!vertexNode;
  }

  findEdge(vertex) {
    const edgeFinder = (edge) => {
      return edge.startVertex === vertex || edge.endVertex === vertex;
    };

    const edge = this.edges.find({ callback: edgeFinder });
    return edge ? edge.value : null;
  }

  getKey() {
    return this.value;
  }

  deleteAllEdges() {
    this.getEdges().forEach(edge => this.deleteEdge(edge));
    return this;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
