function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(array) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for(var i = 0; i < array.length; i++) {
      var min = i;
      for(var j = i + 1; j < array.length; j++) {
        if(array[j] < array[min]) {
          min = j;
        }
      }
      if(i !== min) {
        swap(array, i, min);
      }
    }
    return array;
}
