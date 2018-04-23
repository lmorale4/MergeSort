function split(array) {
  let midpoint = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, midpoint);
  let secondHalf = array.slice(midpoint);
  return [firstHalf, secondHalf];
}
function merge(array1, array2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }
  if (i < array1.length) {
    result = result.concat(array1.slice(i));
  } else if (j < array2.length) {
    result = result.concat(array2.slice(j));
  }
  return result;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    let splitted = split(array);
    let arr1 = mergeSort(splitted[0]);
    let arr2 = mergeSort(splitted[1]);
    return merge(arr1, arr2);
  }
}
