# Knights Travails

Function `knightMoves` outputs the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

## Program short summary

Take starting position, calculate legal moves, store the position and its legal moves inside array `adjLists`

Search for the destination using `breadth first search`. On every traversed position, store the position and its legal moves inside array `adjLists`. When destination is found, the search is done.

#### After the BFS, we have to call `findPath()`:

- The last item in `adjLists` contains valuable information: it is the `lastVertex`.
- We can use `lastVertex` to find our way back by assinging `lastVertex` to `currentVertex` and comparing `currentVertex` to all the adjacent lists in reverse order.

- Everytime we find `currentVertex` in an adjacent list, store `currentVertex` in `between` array, as its our path being generated

Now its time to join it all together and return the shortest path by combining it all together : `return [from, ...findPath(), to]`

## Algorithm explanation

1. Used `breadth first search` to search by level.
2. Used `adjacency lists` to store neighbors of the traversed vertices(squares), e.g. vertex = `[3, 3]`, adjacency list = `[[2, 5], [4, 5], [5, 2], [5, 4], [2, 1], [4, 1], [1, 2], [1, 4]]`
3. Stored every traversed vertex and its adjacency list inside `adjLists` array,

4. After the destination has been found, stop `breadth first searching`.

5. Now we have to follow the trail back to the starting position in a function `findPath`.

- Set index = adjLists.length - 1
- Set between = [], to store the path between `from` and `to`
- Get the vertex of the last item in `adjLists`, store the value in `currentVertex`
- index--, so that we search for currentVertex inside the next item in `adjLists`

### repeat until index === 0

- Search for currentVertex inside `adjLists[index]`
- if found, set `currentVertex = adjLists[index].vertex`, store `currentVertex` in `between`
- index--

after loop, don't forget to include the last vertex, since its adjacency list includes our destination square

- return `[...between, lastVertex]`

6. Call the function findPath, which outputs all the steps the knight has to make, put the output between `from` and `to`, and return final answer `[from, ...findPath(), to]`
