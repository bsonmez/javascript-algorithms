import LinkedList from '../linked-list/LinkedList';

const hashTableSize = 64;

export default class HashTable {
  constructor(tableSize = hashTableSize) {
    // create fixed sized hash table with empty linkedlist
    this.blocks = Array(tableSize).fill(null).map(() => new LinkedList());
  }

  // Converts key string to hash number.
  hash(key) {
    const hash = Array.from(key).reduce(
      (hashCollector, keySymbol) => (hashCollector + keySymbol.charCodeAt(0)),
      0,
    );

    // Reduce hash number so it would fit hash table size.
    return hash % this.blocks.length;
  }

  insert(key, value) {
    const blockLinkedList = this.blocks[this.hash(key)];
    const node = blockLinkedList.find({
      callback: nodeValue => nodeValue.key === key,
    });

    if (!node) {
      blockLinkedList.append({
        key,
        value,
      });
    } else {
      node.value.value = value;
    }
  }

  delete(key) {
    const blockLinkedList = this.blocks[this.hash(key)];
    const node = blockLinkedList.find({
      callback: nodeValue => nodeValue.key === key,
    });

    if (node) {
      return blockLinkedList.delete(node.value);
    }

    return null;
  }

  get(key) {
    const blockLinkedList = this.blocks[this.hash(key)];
    const node = blockLinkedList.find({
      callback: nodeValue => nodeValue.key === key,
    });

    return node ? node.value.value : null;
  }
}
