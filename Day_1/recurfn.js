function sum1(n) {
  let total = 0;
  for (let i = 1; i <= n; i += 1) {
    let total = 0;
    total = total + i;
  }

  return total;
}



// 재귀함수
// 속도 느리다고 하는데 TCO 쓰면 속도가 동일하다고 함
// 강사님 유튜브에 강의 있음

function sum2(n) {
  if (n === 1) return 1;
  return n + sum2(n - 1);
}


console.log(sum1(100));