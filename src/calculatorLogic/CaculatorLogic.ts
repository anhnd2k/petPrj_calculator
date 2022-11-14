const resolveResult = (data: string): any => {
	const dataArr = data.split(' ');
	for (let i = 0; i < dataArr.length; i++) {
		if (dataArr[i] === 'x') {
			const result = parseInt(dataArr[i - 1]) * parseInt(dataArr[i + 1]);
			dataArr.splice(i - 1, 0, result.toString());
			dataArr.splice(i, i);
		}
	}
	const newDataResolverMultiplication = JSON.parse(JSON.stringify(dataArr));
	for (let i = 0; i < newDataResolverMultiplication.length; i++) {
		if (newDataResolverMultiplication[i] === '/') {
			const result =
				parseInt(newDataResolverMultiplication[i - 1]) /
				parseInt(newDataResolverMultiplication[i + 1]);
			newDataResolverMultiplication.splice(i - 1, 0, result);
			newDataResolverMultiplication.splice(i, i - 2);
		}
	}
	const newDataResolveFirst = JSON.parse(JSON.stringify(newDataResolverMultiplication));
	let total = 0;
	for (let j = 1; j < newDataResolveFirst.length; j += 2) {
		if (j == 1) {
			if (newDataResolveFirst[j] === '+') {
				total =
					total + (parseInt(newDataResolveFirst[j - 1]) + parseInt(newDataResolveFirst[j + 1]));
			} else {
				total =
					total + (parseInt(newDataResolveFirst[j - 1]) - parseInt(newDataResolveFirst[j + 1]));
			}
		} else {
			if (newDataResolveFirst[j] === '+') {
				total = total + parseInt(newDataResolveFirst[j + 1]);
			} else {
				total = total - parseInt(newDataResolveFirst[j + 1]);
			}
		}
	}

	console.log(total);
};

export default resolveResult;
