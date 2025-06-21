function mincost(arr) {
  // Create a min heap using a priority queue pattern
  let heap = [...arr];
  heap.sort((a, b) => a - b); // Initial sort

  let totalCost = 0;

  while (heap.length > 1) {
    // Always take the two smallest ropes
    let first = heap.shift();
    let second = heap.shift();

    let cost = first + second;
    totalCost += cost;

    // Insert the new rope back into the sorted array
    // and maintain the sorted order
    let index = heap.findIndex(x => x > cost);
    if (index === -1) heap.push(cost);
    else heap.splice(index, 0, cost);
  }

  return totalCost;
}
