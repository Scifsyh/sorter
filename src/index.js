class Sorter {
  constructor() {
    this.array = [];
    this.array.length = 0;
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    var k;
    var newArray = [];
    indices.sort((a, b) => a - b);
    for (var i = 0; i < indices.length; i++) {
      k = indices[i];
      newArray[i] = this.array[k];
    }
    newArray.sort(this.compareFunction);
    for (var i = 0; i < indices.length; i++) {
      k = indices[i];
      this.array[k] = newArray[i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;