// MinHeap class definition
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this._bubbleUp();
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return min;
  }

  size() {
    return this.heap.length;
  }

  _bubbleUp() {
    let idx = this.heap.length - 1;
    const val = this.heap[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] <= val) break;
      this.heap[idx] = this.heap[parentIdx];
      this.heap[parentIdx] = val;
      idx = parentIdx;
    }
  }

  _bubbleDown() {
    let idx = 0;
    const val = this.heap[0];
    const length = this.heap.length;

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let smallest = idx;

      if (leftIdx < length && this.heap[leftIdx] < this.heap[smallest]) {
        smallest = leftIdx;
      }

      if (rightIdx < length && this.heap[rightIdx] < this.heap[smallest]) {
        smallest = rightIdx;
      }

      if (smallest === idx) break;

      // Swap
      [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
      idx = smallest;
    }
  }
}

// mincost function
function mincost(arr) {
  if (arr.length <= 1) return 0;

  const heap = new MinHeap();

  for (const val of arr) {
    heap.insert(val);
  }

  let totalCost = 0;

  while (heap.size() > 1) {
    const first = heap.extractMin();
    const second = heap.extractMin();
    const cost = first + second;
    totalCost += cost;
    heap.insert(cost);
  }

  return totalCost;
}

console.log(mincost([4, 3, 2, 6]));         
console.log(mincost([1, 2, 3, 4, 5]));      
