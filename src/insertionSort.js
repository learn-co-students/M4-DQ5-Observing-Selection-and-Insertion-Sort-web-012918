function insertionSort(arr) {
  // your code here!
  // arr is an arr of unsorted integers (i.e. [3, 5, 1])
  for(var i = 0; i < arr.length; i++) {
    var temp = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;

}
