
// You should implement your task here.

module.exports = function towelSort (matrix=[]) {
  for (let i=1; i<matrix.length; i+=2) {
    matrix[i] = matrix[i].reverse()
  }
  return matrix.flat();
}
