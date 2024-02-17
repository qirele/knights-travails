function knightMoves(from, to) {

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

console.log(legalMoves([0, 0]))