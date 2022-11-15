const resolveResult = (data: string): any => {
	const dataArr = data.split(' ');
    
function resolveCalculator(dataArr2){
    const dataIn = [...dataArr2]
    // xử lý trong ngoặc
    for(let i = 0; i < dataIn.length; i++){
	    if(dataIn[i] === '('){
	        const findIndexEnd = dataIn.findIndex(item => item === ')')
	        const newDataClone = [...dataIn]
	        const spliceSpx = newDataClone.splice(i + 1, findIndexEnd - 1)
	        const data1 = resolveCalculator(spliceSpx)
	        dataIn.splice(i, findIndexEnd + 1, data1)
	    }
    }
    
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


const dataTotal = resolveCalculator(dataArr)
console.log("==>> result", dataTotal)
};

export default resolveResult;
