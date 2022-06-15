function zipStrings(strA, strB) {
  let zippedString = [];
  if (strA.length > strB.length) {
    for (let i = 0; i < strA.length; i++) {
      zippedString.push(strA[i]);
      zippedString.push(strB[i]);
    }
  } else {
    for (let i = 0; i < strB.length; i++) {
      zippedString.push(strA[i]);
      zippedString.push(strB[i]);
    }
  }

  return zippedString.join("");
}
