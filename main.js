function knightMoves(from, to) {
  const neighbors = legalMoves(from);

  const visited = [from];
  const queue = [...neighbors];
  const isDestinationHere = el => el[0] === to[0] && el[1] === to[1];

  // see if the neighbors are equal to `to`
  if (queue.findIndex(isDestinationHere) === -1) {
    // continue looking

    while (queue.length > 0) {
      let pos = queue.shift();
      visited.push(pos)

      let posNeighbors = legalMoves(pos);

      // isDestination here?
      let result = posNeighbors.findIndex(isDestinationHere);
      if (result !== -1) {
        // we found it!
      } else {
        // push only thos which aren't in `visited` and aren't in `queue`
        const excludeVisited = removeElementsFromArray(posNeighbors, visited);
        const excludeQueue = removeElementsFromArray(excludeVisited, queue);
        queue.push(...excludeQueue);
      }
    }

  } else {
    return [from, to]
  }

  function removeElementsFromArray(array, elements) {
    const difference = array.filter(arrEl => {
      const [x, y] = arrEl;
      return elements.findIndex(el => el[0] === x && el[1] === y) === -1 ? true : false;
    });
    return difference;
  }
}


function outOfBounds(pos) {
  const [x, y] = pos;
  const isOut = x < 0 || x > 7 || y < 0 || y > 7;
  return isOut ? -1 : pos;
}

function legalMoves(pos) {
  const [x, y] = pos;

  const arr = [];

  arr.push(outOfBounds([x - 1, y + 2]));
  arr.push(outOfBounds([x + 1, y + 2]));
  arr.push(outOfBounds([x - 1, y - 2]));
  arr.push(outOfBounds([x + 1, y - 2]));
  arr.push(outOfBounds([x - 2, y - 1]));
  arr.push(outOfBounds([x - 2, y + 1]));
  arr.push(outOfBounds([x + 2, y - 1]));
  arr.push(outOfBounds([x + 2, y + 1]));

  return arr.filter(el => el !== -1);
}

console.log(knightMoves([3, 3], [5, 5]))