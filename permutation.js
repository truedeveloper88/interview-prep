function permutation(bufferIndex, buffer, array, isInBuffer) {
  if (bufferIndex === buffer.length) {
    console.log(buffer);
    return;
  }
  for (let i = 0; i < array.length; i += 1) {
    if (!isInBuffer[i]) {
      buffer[bufferIndex] = array[i];
      isInBuffer[i] = true;
      permutation(bufferIndex + 1, buffer, array, isInBuffer);
      isInBuffer[i] = false;
    }
  }
}

console.log(permutation(0, new Array(3), [1, 2, 3], new Array(3).fill(false)));
