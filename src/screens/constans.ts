import { Dimensions } from 'react-native';

export interface DataView {
	id: number;
	height: number;
	background: string;
}

export interface ExpressionType {
	id: number;
	text: string;
	action: string;
	onPress: () => void;
}

const dataView: DataView[] = [
	{
		id: 1,
		height: Dimensions.get('screen').height,
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
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 19,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 18,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 17,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 16,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 15,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 14,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 13,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 12,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 11,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 10,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 9,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 8,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 7,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 6,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 5,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 4,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 3,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 2,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
	{
		id: 1,
		text: 'C',
		action: null,
		onPress: () => {
			console.log('C');
		},
	},
];

export { dataView, expression };
