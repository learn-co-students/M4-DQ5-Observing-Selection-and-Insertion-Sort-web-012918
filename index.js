function genRandomArr(size) {
  const arr = new Array(size)
  for (let idx = 0; idx < size; idx++)
    arr[idx] = idx + 1

  // shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (size))
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}

function genWatchedArrays(sorts, cassette) {
  const baseArray = genRandomArr(config.arrSize)

  return sorts.map(wSort => {
    const arrCopy = baseArray.slice()
    return new WatchedArray(arrCopy, wSort.func, wSort.id, cassette)
  })
}

function main() {
  const cassette = new Cassette()
  const watchedArrays = genWatchedArrays(config.sorts, cassette)
  watchedArrays.forEach(arr => {
    arr.runSort()
    arr.displayBenchmark()
  })
  cassette.play()
}

function insertionSort(arr) {

  let temporaryNum = 0;
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      //if lest side number is greater than RSN
      if (arr[i] > arr[j]) {
        // console.log(arr)
        //set temporary variable equal to LSN
        temporaryNum = arr[i];
        //make LSN equal to RSN
        arr[i] = arr[j];
        arr[j] = temporaryNum;
        //make RSN equal to LSN
      }
    }
  }

  return arr
}





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

main()
