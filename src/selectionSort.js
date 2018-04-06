const findMinimum = (arr) => {
  let min = arr[0]
  for (let element of arr) {
    if (element < min) {
      min = element
    }
  }
  return min;
}

function selectionSort(arr) {
  let sortedArray = [];
  let counterMax = arr.length
  let counter = 0
  while (counter < counterMax) {
    currentMinimum = findMinimum(arr)
    sortedArray.push(currentMinimum)
    minimumIndex = arr.indexOf(currentMinimum)
    arr.splice(minimumIndex, 1)
    counter++
  }
  return sortedArray
}
