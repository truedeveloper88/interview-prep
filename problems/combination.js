function combination(startIndex, buffer, bufferIndex, array) {
  if (bufferIndex === buffer.length) {
    console.log(buffer);
    return;
  }
  if (startIndex === array.length) {
    return;
  }

  for (let i = startIndex; i < array.length; i += 1) {
    buffer[bufferIndex] = array[i];
    combination(i + 1, buffer, bufferIndex + 1, array);
  }
}

console.log(combination(0, new Array(3), 0, [1, 2, 3, 4, 5, 6, 7]));
