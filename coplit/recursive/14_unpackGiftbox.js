/**
 * 선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴
 * @param { ,문자열, 배열을 요소로 갖는 재귀적으로 정의된 배열} giftBox
 * @param { ,string 타입의 문자열} wish
 * @return { ,boolean 타입을 리턴}
 */
function unpackGiftbox(giftBox, wish) {
  // recursive case

  //   if (giftBox[0] === wish) {
  //     return true;
  //   } else if (giftBox[0] !== wish && !Array.isArray(giftBox[0])) {
  //     console.log(giftBox);
  //     return unpackGiftbox(giftBox.slice(1), wish);
  //   } else if (Array.isArray(giftBox[0])) {
  //     console.log(giftBox);
  //     return unpackGiftbox(giftBox[0].slice(1), wish);
  //   }
  if (giftBox.length === 0) {
    return [];
  }

  const head = giftBox[0];
  const tail = giftBox.slice(1);
  if (Array.isArray(head)) {
    return unpackGiftbox([...head, ...tail], wish);
  } else {
    return [head].concat(unpackGiftbox(tail, wish));
  }
}
