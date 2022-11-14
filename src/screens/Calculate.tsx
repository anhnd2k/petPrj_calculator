import {
	StyleSheet,
	Dimensions,
	FlatList,
	View,
	Text,
	TouchableOpacity,
	Image,
} from 'react-native';
import React, { useState } from 'react';
import { dataView, DataView, expression } from './constans';
import resolveResult from '../calculatorLogic/CaculatorLogic';

export default function Calculate() {
	const [widthBtn, setWidthBtn] = useState(Dimensions.get('screen').width / 4 - 10);
	const [heightBtn, setHeightBtn] = useState(Dimensions.get('screen').height / 2.5 / 5 - 10);
	const [numberInut, setNumberInput] = useState('');
	const [arrDidResultCalculatored, setArrDidResultCalculatored] = useState<string[]>([]);

	const _renderItemText = ({ item, index }) => {
		return (
			<View key={index}>
				<Text style={styles.textStyleOldResult}>{item}</Text>
			</View>
		);
	};

	const _ResultView = (item: DataView) => {
		return (
			<View
				style={[styles.viewInputText, { height: item.height, backgroundColor: item.background }]}
			>
				<FlatList
					scrollEnabled={false}
					data={arrDidResultCalculatored}
					keyExtractor={(itemKey, index) => JSON.stringify(itemKey + index)}
					renderItem={_renderItemText}
				/>
				<Text style={styles.textStyleResult}>{numberInut}</Text>
			</View>
		);
	};

	const convertAction = () => {
		const widthCompare = Dimensions.get('screen').width / 4 - 10;
		const heightCompare = Dimensions.get('screen').height / 2.5 / 5 - 10;
		setWidthBtn((pre) => (widthCompare === pre ? pre - widthCompare / 4 : widthCompare));
		setHeightBtn((pre) => (heightCompare === pre ? pre - heightCompare / 5 : heightCompare));
	};

	const _InputView = (data: DataView) => {
		return (
			<View
				style={[
					{
						height: data.height,
						backgroundColor: data.background,
					},
					styles.mainInput,
				]}
			>
				<FlatList
					data={expression}
					numColumns={4}
					horizontal={false}
					keyExtractor={(item) => JSON.stringify(item)}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => {
								if (item.text === 'CONVERT') {
									convertAction();
									return;
								}
								if (item.text === 'C') {
									setNumberInput('0');
									setArrDidResultCalculatored([]);
									return;
								}
								//resolve calculator
								if (item.type === 'epx' && item.text === 'EQUAL') {
									const stringCalculator: string = numberInut;
									// setArrDidResultCalculatored((prev) => prev.concat(stringCalculator));
									// logic
									resolveResult(stringCalculator);
									//logic
									// setNumberInput('0');
									return;
								}
								setNumberInput((pev) => {
									if (pev === '0') {
										return item.text;
									} else {
										return item.type === 'epx'
											? pev.concat(' ' + item.text + ' ')
											: pev.concat(item.text);
									}
								});
							}}
							style={[styles.inputView, { width: widthBtn, height: heightBtn }]}
						>
							{item.type === 'epx' && item.source ? (
								<Image source={item.source} style={styles.styleImage} />
							) : (
								<Text style={[styles.textStyle, { color: item.type === 'epx' && '#ec930d' }]}>
									{item.text}
								</Text>
							)}
						</TouchableOpacity>
					)}
				/>
			</View>
		);
	};
	return (
		<>
			<FlatList
				showsVerticalScrollIndicator={false}
				pagingEnabled
				data={dataView}
				decelerationRate={0.9}
				keyExtractor={(data) => JSON.stringify(data)}
				renderItem={({ item }) => {
					return item.id === 1 ? _ResultView(item) : _InputView(item);
				}}
				inverted
				contentContainerStyle={styles.flatListStyle}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	flatListStyle: { flexDirection: 'column-reverse' },
	mainInput: { justifyContent: 'flex-end', alignItems: 'flex-end' },
	inputView: {
		// width: Dimensions.get('screen').width / 4 - 10,
		backgroundColor: '#ffffff',
		// height: Dimensions.get('screen').height / 2.5 / 5 - 10,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 5,
	},
	textStyle: {
		fontSize: 25,
		fontWeight: '400',
	},
	styleImage: { width: 23, height: 23, tintColor: '#ec930d' },
	viewInputText: {
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		paddingBottom: 20,
		paddingHorizontal: 10,
	},
	textStyleResult: {
		fontSize: 40,
		fontWeight: '400',
	},
	textStyleOldResult: {
		fontSize: 35,
		fontWeight: '400',
		color: '#00000057',
		textAlign: 'right',
	},
});
