function mincost(arr) {
  if (arr.length === 0) return 0;

  // Convert array into a min heap
  arr.sort((a, b) => a - b);

  let cost = 0;

  while (arr.length > 1) {
    // Always take two shortest ropes
    let first = arr.shift();
    let second = arr.shift();

    let sum = first + second;
    cost += sum;

    // Insert the sum back in a sorted position
    // (simulate priority queue behavior)
    let index = arr.findIndex(x => x > sum);
    if (index === -1) {
      arr.push(sum);
    } else {
      arr.splice(index, 0, sum);
    }
  }

  return cost;
}

console.log(mincost([4, 3, 2, 6]));      
console.log(mincost([1, 2, 3, 4, 5]));   
