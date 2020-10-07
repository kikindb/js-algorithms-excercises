exports.binarySearch = (sortedArray, searchItem) => {
  let start = 0,
    end = sortedArray.length - 1,
    middle = Math.floor((start + end) / 2);

  while (sortedArray[middle] !== searchItem && start <= end) {
    if (searchItem < sortedArray[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  return sortedArray[middle] === searchItem ? middle : -1;
}