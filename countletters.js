function countLetters(str) {
  let filterStr = str.toLowerCase().replace(/\s/g, '')
  let output = {}

  for (let currentL of filterStr) {
    if (output[currentL]) {
      output[currentL] += 1;
    } else {
      output[currentL] = 1;
    }
  }

  return output
}

console.log(countLetters("lighthouse in the house"))