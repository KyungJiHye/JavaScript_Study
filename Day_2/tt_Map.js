// 다음과 같이 부서와 직원 객체가 있을 때, deptMap과 empMap를 만들고,  개발팀 직원 이름 목록을 출력하시오.
// depts -> deptMap, emps -> empMap

const hrTeam = {id: 1, dname: '인사팀'};
const devTeam = {id: 2, dname: '개발팀'};
const depts = [ hrTeam, devTeam ];
const hong = {id: 1, name: 'Hong', dept: 1};
const kim = {id: 2, name: 'Kim', dept: 2};
const emps = [ hong, kim, {id:3, name: 'Park', dept: 2}, {id: 4, name: 'Choi', dept: 2} ];

// const deptMap = new Map([[hrTeam.dname, hrTeam], [devTeam.dname, devTeam]]);

// const getTeam = (name) => {
//   if (name.dept === 1) {
//     delete name.dept
//     return hrTeam}
//   else
//     return devTeam;
//   }

//   const empMap = new Map([[hong, getTeam(hong)]]);

const deptMap = new Map(depts.map(d => [d.id, d]));
console.log(deptMap); 

const empMap = new Map(emps.map(e => {
  const dept = deptMap.get(e.dept);
  return [e.id, { ...e , dept }];
}))
// Map(2) { '인사팀' => { id: 1, dname: '인사팀' }, '개발팀' => { id: 2, dname: '개발팀' } }
console.log(empMap); 

console.log([...empMap]);
// array로 떨어지고 각각의 정보가 있다.

const result = [...empMap]
  .filter(([_, emp]) => emp.dept.id === 2)
  .map(([_, emp]) => emp.name);
// console.log('emp >> ', _, emp));
// 필요없는건 _ 찍는게 관례
console.log(result);

// Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

// console.log(empMap.get(kim).dname); // '개발팀'

// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi
