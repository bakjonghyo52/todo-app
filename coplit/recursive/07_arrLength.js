/**
 * 배열을 입력받아 그 길이를 리턴해야 합니다.
 */
function arrLength(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return 1 + arrLength(arr.slice(1));
}
