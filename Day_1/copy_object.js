



// page 21
// 산술연산자 중 %의 연산자 우선순위를 증명하시오.










// page 25
// ex1) for문을 이용하여 다음과 같이 출력하는 제어문을 작성하시오.
// for(let i = 0.1; i < 1; i = i + 0.1) console.log(i);







// ex2) 소수점 5자리까지 입력가능하고, 이 값에 0.1을 더해서 결과를 출력하려 한다.
// 사용자가 0.21354 를 입력했을 때 정확한 값을 출력하시오.


const a = 0.21354;

Math.floor((a + 0.1 ) * 100000) / 100000 ; 

console.log(a);







// page 31
// ex 1) 2~10 사이의 정수에 대한 무리수(root)를 소숫점 3자리까지 출력하시오.
// Math.sqrt(), 정수는 제외!

// for (let i = 2; i < 10; i += 1){

// }




// ex2) 오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.
// const today = new Date();






// page 43
// 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 object의 클래스 메소드 
// spread(...) 연산자 사용하지 말고 작성하기


// assign({}, park) : 복제
// {...park} 
// 둘다 1depth만 복제된다. 복사한 거에서 2depth에 있는걸 변경하면 변경됨









function copyObject(obj) {

  const ret = {}
  //console.log('keys=', Object.keys(obj));
  for(const k in obj) {
    // const 가 쓸수 없는 상황이 있나? > let 은 값이 더해지는 경우에 사용
    // const 재할당이 불가능하다고 했는데 for문이 다시 돌때 초기화가 되는건가? > const는 블럭단위라서 한번 돌면 없어짐
    //console.log('k=', k);
    ret[k] = obj[k];
  }
  // ret.nid = obj.nid;
  // ret.name = obj.name;
  // ret.addr = obj.addr;
  return ret;
}

// {...kim}; ...을 뭐라고 하더라 지칭하는 말ㅇ ㅣ있었는데...

const kim = {nid : 3, name : 'Hong', addr : 'Pusan', age : 31};

const newkim = copyObject(kim);

newkim.addr = 'Seoul';

console.log(kim);
console.log(newkim);




