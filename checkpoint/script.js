// Function to perform insertion sort
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;
  
      // Move elements of array[0..i-1] that are greater than key to one position ahead
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = key;
    }
    return array;
  }
  
  // Event listener for sorting button
  document.getElementById('sortButton').addEventListener('click', () => {
    const input = document.getElementById('arrayInput').value;
  
    // Parse input and validate
    let array = input.split(',').map(num => parseInt(num.trim()));
    if (array.some(isNaN)) {
      alert('Please enter valid numbers separated by commas!');
      return;
    }
  
    // Display unsorted array
    document.getElementById('unsortedArray').textContent = array.join(', ');
  
    // Sort and display sorted array
    const sortedArray = insertionSort(array);
    document.getElementById('sortedArray').textContent = sortedArray.join(', ');
  });
  