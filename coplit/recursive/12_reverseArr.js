/**
 * 배열을 입력받아 순서가 뒤집힌 배열을 리턴
 * @param {임의의 요소를 갖는 배열} arr
 */
function reverseArr(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) {
    return [];
  }
  let head = arr[arr.length - 1];
  let tail = arr.slice(0, arr.length - 1);
  return [head].concat(reverseArr(tail));
}
