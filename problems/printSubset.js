function printSubSet(bufferIndex, startIndex, array, buffer) {
  console.log(buffer.slice(0, bufferIndex));
  if (bufferIndex === buffer.length) return;
  if (startIndex === array.length) return;
  for (let i = startIndex; i < array.length; i += 1) {
    buffer[bufferIndex] = array[i];
    printSubSet(bufferIndex + 1, i + 1, array, buffer);
  }
}
console.log(printSubSet(0, 0, [1, 2, 3], new Array(3)));
