function flattenArr(arr) {
  // base case
  if (arr.length === 0) {
    return [];
  }

  // recursive case
  const head = arr[0];
  const tail = arr.slice(1);
  if (Array.isArray(head)) {
    return flattenArr([...head, ...tail]);
  } else {
    return [head].concat(flattenArr(tail));
  }
}


