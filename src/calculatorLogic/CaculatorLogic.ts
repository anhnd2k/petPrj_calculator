const resolveResult = (data: string): any => {
	function resolveCalculator(dataArr2){
	    const dataIn = [...dataArr2]
	    const dataResolver1 = JSON.parse(JSON.stringify(dataIn));
		for (let i = 0; i < dataResolver1.length; i++) {
			if (dataResolver1[i] === 'x') {
				const result = parseFloat(dataResolver1[i - 1]) * parseFloat(dataResolver1[i + 1]);
				dataResolver1.splice(i - 1, 3, result.toString());
			}
			if (dataResolver1[i] === '/') {
				const result =
					parseFloat(dataResolver1[i - 1]) /
					parseFloat(dataResolver1[i + 1]);
				dataResolver1.splice(i - 1, 3, result);
			}
		}

		const newDataResolveFirst = JSON.parse(JSON.stringify(dataResolver1));
		let total = parseFloat(newDataResolveFirst[0]);
		for (let j = 1; j < newDataResolveFirst.length; j += 2) {
		if (newDataResolveFirst[j] === '+') {
			total = total + parseFloat(newDataResolveFirst[j + 1]);
		} else {
			total = total - parseFloat(newDataResolveFirst[j + 1]);
		}
		}
		return total
	}

	function resolveFirst (arrIn) {
	    let arr = [...arrIn]
	    const i = arr.findIndex(item => item === ')')
	    if(i !== -1){
		for(let j = i; j >= 0; j--){
		    if(arr[j] === '('){
			const arrClone = [...arr]
			const news = arrClone.splice(j + 1, i - j - 1)
			const dataResolve = resolveCalculator(news)
			arr.splice(j, i - j + 1, dataResolve)
			arr = [...resolveFirst(arr)]
			break
		    }
		}
	    }
	    return arr
	}
	// const data = '2 x 3 + ( 3 x ( 4 - 2 ) ) + 10 - 3'
	// const data = '( 4 + 5 + ( 4 - 2 + ( 1 + 2 ) ) ) - 6 x ( 2 + 7 )'
	// const data = '( 4 + 5 + ( 4 - 2 + ( 1 + 2 x ( 1 + 3 x ( 2 + 1 ) ) ) ) ) - 6 x ( 2 + 7 )'

	const arr = data.split(' ')
	let arrFinal = resolveFirst(arr)
	const dataResult = resolveCalculator(arrFinal)
	console.log("==>> ", dataResult)
	return dataResult

};

export default resolveResult;
