function getLongestWord(str) {
    let biggestStr;
    let countIndex;
    
    let myArray = str.split(' ');
  
    biggestStr = myArray[0].length;
  
    // str.length 구하고 길이를 값을 받아서 전에 값과 바교하면 됨
    for (let i = 1; i < myArray.length; ++i) {
      if (myArray[i].length >= biggestStr) {
        biggestStr = myArray[i].length;
        countIndex = myArray[i];
      }
    }
    return myArray[countIndex];
  }