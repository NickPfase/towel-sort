
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let p = [];
if(Array.isArray(matrix) && matrix.length !== 0){
  let k = matrix.slice()
  for (let i = 0; i < k.length; i += 1) {
    if ( i > 0){
        if (i % 2 !== 0) {
            p.push(k[i].reverse());
          } else {
            p.push(k[i]);
          }
        } else {
          p.push(k[i])
        }
      } return p.flat(Infinity);
} else {
  return []
}
}