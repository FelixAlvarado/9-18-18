const levenshteinDistance = (str1, str2) => {
    const small = str1.length < str2.length ? str1 : str2;
    const big = str1.length >= str2.length ? str1 : str2;
    const evenEdits = [];
    const oddEdits = new Array(small.length + 1);
    for (let j = 0; j < small.length + 1; j++) {
      evenEdits.push(j);
    }
    for (let i = 1; i < big.length + 1; i++) {
      let currentEdits, previousEdits;
      console.log('even edits', evenEdits);
      console.log('odd edits', oddEdits);
      if (i % 2 === 1) {
        currentEdits = oddEdits;
        previousEdits = evenEdits;
      } else {
        currentEdits = evenEdits;
        previousEdits = oddEdits;
      }
      currentEdits[0] = i;
      for (let j = 1; j < small.length + 1; j++) {
        if (big[i - 1] === small[j - 1]) {
          currentEdits[j] = previousEdits[j - 1];
        } else {
          currentEdits[j] = 1 + Math.min(previousEdits[j - 1], previousEdits[j], currentEdits[j - 1]);
        }
      }
    }
    return big.length % 2 === 0 ? evenEdits[small.length] : oddEdits[small.length];
  };

console.log(levenshteinDistance('abc','yabd'));

const maxSubsetSumNoAdjacent = (arr) => {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[0];
    let second = arr[0];
    let first = Math.max(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
      const curr = Math.max(maxSums[i - 1], maxSums[i - 2] + arr[i]);
      second = first;
      first = curr;
    }
    // return first;
  }