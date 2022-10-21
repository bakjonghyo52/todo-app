/**
 * 배열을 입력받아 모든 요소의 논리합(or)을 리턴해야 합니다.
 * @param {boolean 타입을 구성 요소로 갖는 배열} arr
 */
function or(arr) {
  if (arr.length === 0) {
    return Boolean(false);
  }
  let head = arr[0];
  let tail = arr.slice(1);

  return head || or(tail);
}
