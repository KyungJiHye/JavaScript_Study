// page 50
//내일까지 짜보기 / 이거 짤 수 있으면 오늘 배운거 이해한거임
//array , object 단계별로 카피


// function copyArray(arr) {
// 	const ret = [];
// 	for (const v of arr) {
// 		if (Array.isArray(v)) 
//       ret.push(copyArray(v));
// 		else if (typeof v === 'objct') ret.push(deepCopyObject(v));
// 		else ret.push(v);
// 	}
// 	return ret;
// }

// function deepCopyObject(obj) {
// 	const ret = {};
// 	for (const k in obj) {
// 		const v = obj[k];
// 		console.log(k, '=', v, typeof v, Array.isArray(v));
// 		if (Array.isArray(v)) ret[k] = copyArray(v);
// 		else if (typeof v === 'objct') ret[k] = deepCopyObject(v);
// 		else ret[k] = obj[k]; // ret['nm'] = obj['nm']
// 	}
// 	return ret;
// }

const copyArrayOrObject = arrobj => {
  const copyObj = Array.isArray(arrobj) ? [] : {};
  for (let k in arrobj) {
    const tmpObj = arrobj[k];
    console.log(k, tmpObj, typeof tmpObj);
    if (typeof tmpObj === 'object') copyObj[k] = copyArrayOrObject(tmpObj);
    else copyObj[k] = arrobj[k];
  }

  return copyObj;
};



const kim = {
	nid: 3,
	addr: 'Pusan',
	arr: [1, 2, 3, { aid: 1 }, [10, 20]],
	oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
};

const newKim = copyArrayOrObject(kim);
newKim.addr = 'Daegu';
newKim.oo.name = 'Kim';
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = 'Daejeon';
console.log(kim, newKim); // oo와 arr이 다르면 통과!


