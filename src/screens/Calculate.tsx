import { StyleSheet, Dimensions, FlatList, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { dataView, DataView, expression } from './constans';

export default function Calculate() {
	const _ResultView = (item: DataView) => {
		return (
			<View style={{ height: item.height, backgroundColor: item.background }}>
				<Text>fdfdsdsdd</Text>
			</View>
		);
	};

	const _InputView = (data: DataView) => {
		return (
			<View style={{ height: data.height, backgroundColor: data.background }}>
				<FlatList
					data={expression}
					numColumns={4}
					horizontal={false}
					keyExtractor={(item) => JSON.stringify(item)}
					renderItem={({ item }) => (
						<TouchableOpacity onPress={item.onPress} style={styles.inputView}>
							<Text>{item.text}</Text>
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
	inputView: {
		width: Dimensions.get('screen').width / 4 - 10,
		backgroundColor: 'red',
		height: Dimensions.get('screen').height / 2.5 / 5 - 10,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 5,
	},
});
