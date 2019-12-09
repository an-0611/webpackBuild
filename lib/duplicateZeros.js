module.exports = arr => {
  var len = arr.length;
    var point = 0;
    var copy = arr.slice();
    for(let i = 0; i < len; i++) {
        if (arr[i] == 0 && copy[i-point] == 0) {
        	arr[i+1] = 0
        	point++
        	i++;
        	continue;
        } else if (copy[i-point] == 0) {
        	arr[i] = 0;
        	arr[i+1] = 0
        	point++
        	i++
        	continue;
        }
        arr[i] = copy[i-point];
    }
    arr.length = len;
    return arr;
}


// export function duplicateZeros(arr) {
//   var len = arr.length;
//     var point = 0;
//     var copy = arr.slice();
//     for(let i = 0; i < len; i++) {
//         if (arr[i] == 0 && copy[i-point] == 0) {
//         	arr[i+1] = 0
//         	point++
//         	i++;
//         	continue;
//         } else if (copy[i-point] == 0) {
//         	arr[i] = 0;
//         	arr[i+1] = 0
//         	point++
//         	i++
//         	continue;
//         }
//         arr[i] = copy[i-point];
//     }
//     arr.length = len;
//     return arr;
// }
