/** 배열을 입력받아 모든 요소의 합을 리턴해야 합니다.
 *  number 타입을 요소로 갖는 배열

 */

function arrSum(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + arrSum(arr.slice(1));
}
