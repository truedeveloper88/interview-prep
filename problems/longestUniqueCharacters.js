function longestUniqueCharacters(chars) {
  let result = [0, 0];
  let start = 0;
  let end = 0;
  let record = { [chars[end]]: end };
  let longestLength = 1;
  while (end < chars.length - 1) {
    end += 1;
    const toAdd = chars[end];
    if (record[toAdd] && record[toAdd] >= start) {
      start = record[toAdd] + 1;
    }
    record[toAdd] = end;
    if (end - start + 1 > longestLength) {
      longestLength = end - start + 1;
      result[0] = start;
      result[1] = end;
    }
  }
  return result;
}
