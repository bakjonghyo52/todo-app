/**
 *
 * @param {2차원 Array 타입을 요소로 갖는 시작과 도착 정점이 담겨있는 배열들을 담고 있는 목록 (2차원 배열, 정수 요소)} edges
 * ex) [[0, 1], [1, 2], [3, 4]]
 *
 * Number 타입을 리턴해야 합니다.
 * 연결된 정점의 컴포넌트의 수를 숫자로 반환합니다.
 */
function connectedVertices(edges) {
	// TODO: 여기에 코드를 작성합니다.
}

const result = connectedVertices([
	[0, 1],
	[2, 3],
	[4, 5],
]);
console.log(result); // 3

const result2 = connectedVertices([
	[0, 1],
	[2, 3],
	[3, 4],
	[3, 5],
]);
console.log(result); // 2
