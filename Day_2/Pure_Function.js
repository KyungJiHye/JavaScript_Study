const weeks = ['일', '월', '화', '수', '목', '금', '토'];

const getNextWeek = () => {
  let widx = weeks.length - (weeks.length -1)//-1;
  widx += 1; // side-effect!
  // if (widx >= weeks.length) widx = 0;
  return `${weeks[widx]}요일`;
};

let cnt = 0;
// setInterval : 1초마다 돈다
const intl = setInterval(() => {
  // widx += 2; // side-effect!
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 7) clearInterval(intl);
}, 500);
