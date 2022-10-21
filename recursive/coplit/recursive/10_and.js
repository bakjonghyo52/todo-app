/** 
 * 배열을 입력받아 모든 요소의 논리곱(and)을 리턴해야 합니다.
 * @params arr:boolean 타입을 구성 요소로 갖는 배열

 */
function and(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) {
    return Boolean(true);
  }
  let head = arr[0];
  let tail = arr.slice(1);

  return head && and(tail);
}
