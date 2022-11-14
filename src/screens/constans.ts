import { Dimensions } from 'react-native';
import { icon_convert, icon_delete, icon_divide, icon_equal } from 'src/constants/images';

export interface DataView {
	id: number;
	height: number;
	background: string;
}

export interface ExpressionType {
	id: number;
	text: string;
	source?: any;
	type: 'num' | 'epx';
	caculate: string;
}

const dataView: DataView[] = [
	{
		id: 1,
		height: Dimensions.get('screen').height - 90,
		background: '#ccc',
	},
	{
		id: 2,
		height: Dimensions.get('screen').height / 2.5,
		background: '#fff',
	},
];
const expression: ExpressionType[] = [
	{
		id: 20,
		text: 'C',
		type: 'epx',
		caculate: '',
	},
	{
		id: 19,
		text: '',
		source: icon_delete,
		type: 'epx',
		caculate: '',
	},
	{
		id: 18,
		text: '%',
		type: 'epx',
		caculate: '',
	},
	{
		id: 17,
		text: '',
		source: icon_divide,
		type: 'epx',
		caculate: '',
	},
	{
		id: 16,
		text: '7',
		type: null,
		caculate: '',
	},
	{
		id: 15,
		text: '8',
		type: null,
		caculate: '',
	},
	{
		id: 14,
		text: '9',
		type: null,
		caculate: '',
	},
	{
		id: 13,
		text: 'x',
		type: 'epx',
		caculate: '',
	},
	{
		id: 12,
		text: '4',
		type: null,
		caculate: '',
	},
	{
		id: 11,
		text: '5',
		type: null,
		caculate: '',
	},
	{
		id: 10,
		text: '6',
		type: null,
		caculate: '',
	},
	{
		id: 9,
		text: '-',
		type: 'epx',
		caculate: '',
	},
	{
		id: 8,
		text: '1',
		type: null,
		caculate: '',
	},
	{
		id: 7,
		text: '2',
		type: null,
		caculate: '',
	},
	{
		id: 6,
		text: '3',
		type: null,
		caculate: '',
	},
	{
		id: 5,
		text: '+',
		type: 'epx',
		caculate: '',
	},
	{
		id: 4,
		text: 'CONVERT',
		source: icon_convert,
		type: 'epx',
		caculate: '',
	},
	{
		id: 3,
		text: '0',
		type: null,
		caculate: '',
	},
	{
		id: 2,
		text: ',',
		type: null,
		caculate: '',
	},
	{
		id: 1,
		text: 'EQUAL',
		source: icon_equal,
		type: 'epx',
		caculate: '',
	},
];

export { dataView, expression };
