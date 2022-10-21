/**
 * 수(num)와 배열을 입력받아 차례대로 num개의 요소만 포함된 새로운 배열을 리턴해야 합니다.
 * @params : number 타입의 정수 (num >= 0)
 * @params : 임의의 요소를 갖는 배열
 */
function take(num, arr) {
  if (num === 0) {
    return [];
  }
  if (num > arr.length) {
    return arr;
  }

  if (arr === []) return [];

  return [arr[0]].concat(take(num - 1, arr.slice(1)));
}

