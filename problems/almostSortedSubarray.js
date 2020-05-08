function findDip(array) {
  let i = 0;
  while (i < array.length - 1) {
    if (array[i + 1] < array[i]) {
      return i;
    }
    i += 1;
  }
  return i;
}

function findBump(array) {
  let i = array.length - 1;
  while (i > 0) {
    if (array[i - 1] > array[i]) {
      return i;
    }
    i -= 1;
  }
  return i;
}

function findMinMax(dip, bump, array) {
  let i = dip > bump ? bump : dip;
  let j = dip > bump ? dip : bump;
  let min = Infinity;
  let max = -Infinity;
  let minIndex = i;
  let maxIndex = j;
  for (let z = i; z <= j; z += 1) {
    if (array[z] < min) {
      min = array[z];
      minIndex = z;
    }
    if (array[z] > max) {
      max = array[z];
      maxIndex = z;
    }
  }
  return [minIndex, maxIndex];
}

function almostSortedSubarray(array) {
  let dip = findDip(array);
  let bump = findBump(array);

  let [minIndex, maxIndex] = findMinMax(dip, bump, array);
  let i = minIndex;
  let j = maxIndex;
  while (i > 0) {
    if (array[i - 1] <= array[minIndex]) {
      break;
    }
    i -= 1;
  }

  while (j < array.length - 1) {
    if (array[j + 1] > array[maxIndex]) {
      break;
    }
    j += 1;
  }

  return [i, j];
}

console.log(almostSortedSubarray([1, 2, 4, 5, 3, 7, 5, 6, 8]));
