// function insertionSort(arr) {
//
//   let temporaryNum = 0;
//   for (let i = 0; i < arr.length; ++i) {
//     for (let j = i + 1; j < arr.length; ++j) {
//       //if lest side number is greater than RSN
//       if (arr[i] > arr[j]) {
//         // console.log(arr)
//         //set temporary variable equal to LSN
//         temporaryNum = arr[i];
//         //make LSN equal to RSN
//         arr[i] = arr[j];
//         arr[j] = temporaryNum;
//         //make RSN equal to LSN
//       }
//     }
//   }
//   return arr
// }


function insertionSort(arr) {
  let startIdx = 0
  for (let startIdx = 0; startIdx < arr.length; startIdx++) {
    for(let currIdx = startIdx; currIdx > 0 && arr[currIdx-1] > arr[currIdx]; currIdx--) {
      let temp = arr[currIdx]
      arr[currIdx] = arr[currIdx-1]
      arr[currIdx-1] = temp
    }
  }
}
