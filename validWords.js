function validWords(chars, start, memo, wordList, result) {
  if (start === chars.length) return true;
  if (memo[start] === "not_found") return false;

  for (let i = start; i < chars.length; i += 1) {
    const candidate = chars.slice(start, i + 1);
    if (wordList.includes(candidate)) {
      result.push(candidate);

      if (validWords(chars, i + 1, memo, wordList, result)) {
        return true;
      } else {
        result.pop();
        memo[i + 1] = "not_found";
      }
    }
  }

  return false;
}
function wordBreaks(str) {
  const memo = new Array(str.length).fill("unvisited");
  const result = [];
  if (
    validWords(
      str,
      0,
      memo,
      ["i", "like", "man", "go", "mango", "tan", "tango"],
      result
    )
  ) {
    return result;
  }
  return null;
}

console.log(wordBreaks("ilikemangotango"));
