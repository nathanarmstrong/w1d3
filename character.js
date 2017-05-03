function countLetters(str) {
  let filterStr = str.toLowerCase().replace(/\s/g, '')
  let output = {}

  for (let i = 0; i < filterStr.length; i++) {

    let currentL = filterStr[i]

    if (output[currentL]) {
      output[currentL].push(i);
    } else {
      output[currentL] = [i];
    }
  }

  return output
}

console.log(countLetters("lighthouse in the house"))