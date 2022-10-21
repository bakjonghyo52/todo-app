/**
 * 배열을 입력받아 모든 요소의 곱을 리턴
 * number 타입을 리턴해야 합니다.
 * arr[0] * arr[1] * ... * arr[n-1]
 * arr.length는 n
 */
function arrProduct(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * arrProduct(arr.slice(1));
}
