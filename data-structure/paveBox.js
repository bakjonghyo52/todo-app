/**
 * 인자 1 : boxes
Number 타입을 요소로 갖는, 포장해야 하는 박스가 담긴 배열
1 ≤ 사람 수 ≤ 10,000
1 ≤ 박스 ≤ 10,000
출력
Number 타입을 리턴해야 합니다.
주의 사항
먼저 포장을 전부 끝낸 사람이 있더라도, 앞사람이 포장을 끝내지 않았다면 나갈 수 없습니다.

 * @param {Number 타입을 요소로 갖는, 포장해야 하는 박스가 담긴 배열 1 ≤ 사람 수 ≤ 10,000 1 ≤ 박스 ≤ 10,000} boxes 
 */
function paveBox(boxes) {
	let endpoint = boxes[0];

	let excapeArr = [];
	let lengthArr = [];

	for (let i = 0; i <= boxes.length; ++i) {
		if (endpoint >= boxes[i]) {
			excapeArr.push(boxes[i]);
		} else {
			lengthArr.push(excapeArr.length);
			excapeArr = [];
			endpoint = boxes[i];
		}
	}
	return Math.max(...lengthArr);
}

const result4 = paveBox([95, 90, 99, 99, 80, 99]);
expect(result4).to.equal(4);

// function paveBox(boxes) {
// 	let answer = [];

// 	// boxes 배열이 0보다 클 때까지 반복합니다.
// 	while (boxes.length > 0) {
// 		let finishIndex = boxes.findIndex((fn) => boxes[0] < fn);

// 		if (finishIndex === -1) {
// 			// 만약 찾지 못했다면 answer에 boxes 배열의 길이를 넣은 후, boxes 내부의 요소를 전부 삭제합니다.
// 			answer.push(boxes.length);
// 			boxes.splice(0, boxes.length);
// 		} else {
// 			// 만약 찾았다면, 해당 인덱스를 answer에 넣고, boxes에서 그만큼 제외합니다.
// 			answer.push(finishIndex);
// 			boxes.splice(0, finishIndex);
// 		}
// 	}

// 	// 결과물을 반환합니다.
// 	return Math.max(...answer);
// }
