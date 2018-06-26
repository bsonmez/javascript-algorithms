import HashTable from '../HashTable';

describe('playground', () => {
  it('should create default hash table', () => {
    const hashTable = new HashTable();
    expect(hashTable.blocks.length).toBe(64);
  });

  it('should create extended hash table', () => {
    const hashTable = new HashTable(128);
    expect(hashTable.blocks.length).toBe(128);
  });

  it('should create hashtable sized 5 and insert,readt and delete data with collisions', () => {
    const converter = value => `${value.key}:${value.value}`;
    const hashTable = new HashTable(4);
    expect(hashTable.blocks.length).toBe(4);

    expect(hashTable.hash('1')).toBe(1);
    expect(hashTable.hash('2')).toBe(2);
    expect(hashTable.hash('3')).toBe(3);
    expect(hashTable.hash('4')).toBe(0);

    hashTable.insert('1', 'car');
    hashTable.insert('1', 'truck');
    hashTable.insert('2', 'apple');
    hashTable.insert('2', 'strawberry');
    hashTable.insert('3', 'headphones');
    hashTable.insert('4', 'phone');

    expect(hashTable.blocks[0].toString(converter)).toBe('4:phone');
    expect(hashTable.blocks[1].toString(converter)).toBe('1:truck');
    expect(hashTable.blocks[2].toString(converter)).toBe('2:strawberry');
    expect(hashTable.blocks[3].toString(converter)).toBe('3:headphones');

    expect(hashTable.get('1')).toBe('truck');
    expect(hashTable.get('2')).toBe('strawberry');
    expect(hashTable.get('3')).toBe('headphones');

    hashTable.delete('3');

    expect(hashTable.delete('5')).toBeNull();

    expect(hashTable.get('3')).toBeNull();
    expect(hashTable.get('4')).toBe('phone');

    hashTable.insert('4', 'television');
    expect(hashTable.get('4')).toBe('television');
  });
});
