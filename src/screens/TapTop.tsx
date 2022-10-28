import { useWindowDimensions, View } from 'react-native';
import React from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Calculate from './Calculate';

const SecondRoute = () => <View style={{ flex: 1, backgroundColor: '#673ab7' }} />;

const renderScene = SceneMap({
	first: Calculate,
	second: SecondRoute,
});

export default function TapTop() {
	const layout = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'first', title: 'First' },
		{ key: 'second', title: 'Second' },
	]);

	const renderTabBar = (props) => (
		<TabBar
			{...props}
			// renderIcon={({ route, focused, color }) => (
			// )}
			indicatorStyle={{ backgroundColor: 'white' }}
			style={{ backgroundColor: 'pink' }}
		/>
	);

	return (
		<TabView
			renderTabBar={renderTabBar}
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={{ width: layout.width }}
		/>
	);
}
