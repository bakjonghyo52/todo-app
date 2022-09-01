// range 모듈을 왜 이렇게 쓰는지 이유가 궁금함
const { range } = require('range'); // range 모듈을 불러옵니다x≈≈

function getListMultiplesOfTwo(upTo) {
  return range(2, upTo+1, 2);
}

module.exports = getListMultiplesOfTwo;
