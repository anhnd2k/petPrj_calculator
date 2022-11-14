import _ from 'lodash';

const resolveResult = (data: string): any => {
	const dataArr = data.split(' ');
	for (let i = 0; i < dataArr.length; i++) {
		console.log('==>> is number', _.isNumeric(dataArr[i]));
	}
	console.log('===>>>> dataArr', dataArr);
	return data;
};

export default resolveResult;
