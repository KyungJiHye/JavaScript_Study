// 다음과 같은 정수 배열이 주어졌을 때, 각 요소를 다음의 순서로 처리하시오.
//  → 배열의 각 요소를 제곱
//  → 배열 각 요소의 제곱근
//  → 배열의 각 요소를 세제곱

const arr = [1, 2, 3, 4, 5];

const f1 = v => v ** 2;
const f2 = v => Math.sqrt(v);
const f3 = v => v ** 3;

const runRobot = (fns, data) => fns.reduce((pre, f) => pre.map(f), data)

// const result = arr.map(f3);
// const result = [f1, f2, f3].reduce((pre, f) => pre.map(f), arr);
// 이걸 컨포지션 이라고 함 : 상당히 고급 기술

const result = runRobot([f1, f2, f3], arr);
console.log(result);