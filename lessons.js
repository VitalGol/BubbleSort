//Concept 1
function bubbleSortConcept1(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

//Concept 2
function bubbleSortConcept2(arr) {
  let swapped;

  do {
    swapped = false;
    console.log(arr);
    arr.forEach((item, index) => {
      if (item > arr[index + 1]) {
        // Save the value to a variable so we don't lose it
        let temp = item;
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        swapped = true;
      }
    });
  } while (swapped);
}

let arr12 = [1, 22, 88, 99, 158, 6, 887, 148, 3255];

bubbleSortConcept1(arr12);
console.log(bubbleSortConcept1(arr12));
