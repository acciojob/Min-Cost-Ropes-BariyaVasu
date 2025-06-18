function mincost(arr){

	if (ropes.length <= 1) return 0;

    // Sort ropes initially
    ropes.sort((a, b) => a - b);

    let totalCost = 0;

    while (ropes.length > 1) {
        // Take two smallest ropes
        let first = ropes.shift();
        let second = ropes.shift();

        let cost = first + second;
        totalCost += cost;

        // Insert back and keep array sorted
        let index = ropes.findIndex(r => r > cost);
        if (index === -1) ropes.push(cost);
        else ropes.splice(index, 0, cost);
    }


  
}

module.exports=mincost;
