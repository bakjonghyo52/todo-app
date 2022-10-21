/**
 * 러시아 전통인형 마트료시카에 대한 정보를 담은 객체와 수를 입력받아 조건에 맞는 인형이 있는지 여부를 리턴
 * 속성을 갖는 재귀적으로 정의된 객체
 * @param {'matryoshka', 'size' 속성을 갖는 재귀적으로 정의된 객체 (입출력 예시 참고)matryoshka.matryoshka는 null 또는 matryoshka 객체matryoshka.size는 중첩될수록 작아집니다.} matryoshka
 * @param {number} size
 */
function findMatryoshka(matryoshka, size) {
  // recursive case
  if (matryoshka.size === size) {
    return true;
  } else if (matryoshka.matryoshka && matryoshka.size > size) {
    return findMatryoshka(matryoshka.matryoshka, size);
  }

  // base case
  return false;
}
