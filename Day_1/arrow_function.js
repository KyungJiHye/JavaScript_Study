const fn = name => console.log(`Your name is ${name}`);

// const fn = (name) => {
//   console.log(`Your name is ${name}`);
// }
// 받는 값이 하나면 name 에 가로도 없어지고 함수내용에 중괄호도 사라짐 , return 도 생략
// 화살표 함수는 컨스트럭터가 없음 / 인스턴스를 만드는거 


//const ret = new fn('Hong');
//console.log('ret =', ret);

const obj = {
  name: 'ObjName',
  bark1() {
    console.log('1=', this.name);
    // 함수 생성 시 인스턴스 생성 되기 때문에 this name 으로 할 경우 함수내에서 정의 된 name 이 없기 때문에 값이 없음(undefined) 그래서 따로 self로 상위 this를 받아서 사용
    // 그냥 함수는 왜 인스턴스를 생성하는지, 화살표함수는 왜 인스턴스를 생성하지 않는지 공부하기
    const self = this;
    setTimeout( function() {
      console.log('11=', self.name);
    }, 1000);
    console.log('xxxx');
  },
  // 내가 this가 없으면 상위 부모에서 찾음
  // 화살표 함수는 인스턴스가 없기때문에 화살표 함수내에서 this를 바로 사용 가능
  bark2() {
    console.log('2=', this.name);
    setTimeout(() => {
      console.log('22=', this.name);
    }, 1000);
  },
};

obj.bark1();
obj.bark2();


//window.name = 'zzz';
//const self = this; 첫번째 함수에서 윈도우 name에 접근하려면 이렇게 this 값을 받아서 this -> self 로 변경하면 접근가능

// $btn1.addEventListener('click', function () {
//   console.log('Click11!!!!!', this); // button
// });

// $btn2.addEventListener('click', () => {
//   console.log('Click22!!!!!', this.name); // 함수내에 name이 없다 부모에서 찾는다 window.name -> 'zzzz'
// });

