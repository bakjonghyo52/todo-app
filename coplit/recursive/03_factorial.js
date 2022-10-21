/**
 * 수를 입력받아 n-factorial(n!; 엔-팩토리얼) 값을 리턴한다
 * n! 은 1부터 n까지 1씩 증가한 모든 값의 곱이다
 */
function factorial(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 별도의 최적화 기법(memoization)은 금지됩니다.
  //만약 1이면 리턴 1
  if (num === 1 || num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}
