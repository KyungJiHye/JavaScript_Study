// 다음과 같은 집합 A, B, C가 있을 때,
// 각 집합의 교집합, 차집합, 합집합을 구하는 함수를 작성하시오.

const A = [1, 2, 3, 4, 5, 3];  // new Set(A)
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];



// const intersect = (set1, set2) => {
//   const mySet = new Set();
//   for (i in set1){
//     mySet.add(i);
//   }
//   for (j in set2){
//     mySet.add(j);
//   }
//   return mySet;
// }

const intersect = (arr1, arr2) => new Set(arr1.filter(a => arr2.includes(a)));

console.log(intersect(A, B)); // 1, 3, 5
console.log(intersect(A, C)); // 3, 4

const diff = (arr1, arr2) => new Set(arr1.filter(a => !arr2.includes(a)));

console.log(diff(A, B)); // 2, 4
console.log(diff(B, A)); // 22, 44
console.log(diff(A, C)); // 1, 2, 5
console.log(diff(B, C)); // 1, 22, 44, 5

const union = (arr1, arr2) => new Set([...arr1, ...arr2])

console.log(union(A, B)); // 1, 2, 3, 4, 5, 22, 44
console.log(union(A, C)); // 1, 2, 3, 4, 5, 11, 222, 555