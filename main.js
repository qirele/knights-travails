function knightMoves(from, to) {
  const visited = [];
  const queue = [from];
  const adjLists = [];

  while (queue.length !== 0) {
    const vertex = queue.shift();
    visited.push(vertex);
    const neighbors = legalMoves(vertex);
    const adj = [];

    let isFound = false;
    neighbors.forEach(n => {
      adj.push(n);

      // check n against visited
      let isNeighborInVisited = visited.findIndex(el => el[0] === n[0] && el[1] === n[1]);
      if (isNeighborInVisited === -1) {
        queue.push(n);
      }

      // check if n is `to`
      if (n[0] === to[0] && n[1] === to[1]) {
        // ladies und gentlemen, we got im
        isFound = true;
      }

    });

    adjLists.push(adj);
    if (isFound) {
      break;
    }
  }


  return adjLists;
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
  arr.push(outOfBounds([x + 2, y - 1]));
  arr.push(outOfBounds([x + 2, y + 1]));
  arr.push(outOfBounds([x - 1, y - 2]));
  arr.push(outOfBounds([x + 1, y - 2]));
  arr.push(outOfBounds([x - 2, y - 1]));
  arr.push(outOfBounds([x - 2, y + 1]));

  return arr.filter(el => el !== -1);
}

knightMoves([0, 0], [1, 6]);