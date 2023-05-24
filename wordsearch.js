const wordSearch = (letters, word) => {
  // Check horizontally
  for (const row of letters) {
    const horizontalWord = row.join('');
    if (horizontalWord.includes(word)) {
      return true;
    }
  }
  
  // Check vertically
  const numRows = letters.length;
  const numCols = letters[0].length;
  
  for (let col = 0; col < numCols; col++) {
    let verticalWord = '';
    for (let row = 0; row < numRows; row++) {
      verticalWord += letters[row][col];
    }
    if (verticalWord.includes(word)) {
      return true;
    }
  }
  
  return false;
};
  
module.exports = wordSearch;
  