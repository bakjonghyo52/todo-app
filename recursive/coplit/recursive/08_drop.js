/**
 * 수(num)와 배열을 입력받아 차례대로 num개의 요소가 제거된 새로운 배열을 리턴해야 합니다.
 */
function drop(num, arr) {
  if (num === 0) {
    return arr;
  }
  if (arr === []) {
    return arr;
  }
  if (num > arr.length) {
    return [];
  }

  return drop(num - 1, arr.slice(1));
}
