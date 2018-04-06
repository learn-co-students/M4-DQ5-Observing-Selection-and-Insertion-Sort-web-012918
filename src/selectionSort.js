// const findMinimum = (arr) => {
//   let min = arr[0]
//   for (let element of arr) {
//     if (element < min) {
//       min = element
//     }
//   }
//   return min;
// }
//
// function selectionSort(arr) {
//   let sortedArray = [];
//   let counterMax = arr.length
//   let counter = 0
//   while (counter < counterMax) {
//     currentMinimum = findMinimum(arr)
//     sortedArray.push(currentMinimum)
//     minimumIndex = arr.indexOf(currentMinimum)
//     arr.splice(minimumIndex, 1)
//     counter++
//   }
//   return sortedArray
// }

function selectionSort(arr) {
  for (let oIdx = 0; oIdx < arr.length-1; oIdx++) {
    let minIdx = oIdx
    for (var iIdx = oIdx; iIdx < arr.length; iIdx++) {
      if (arr[iIdx] < arr[minIdx])
        minIdx = iIdx
    }
    let temp = arr[oIdx]
    arr[oIdx] = arr[minIdx]
    arr[minIdx] = temp
  }
}
