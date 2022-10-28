import { StatusBar, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TapTop from 'src/screens/TapTop';
import { setNavigator } from 'src/navigator/navigationService';
import { NoHeader } from 'src/navigator/screenConfigs';
import { HomeRouters } from '../../App';

const Stack = createNativeStackNavigator();

export default function Navigation() {
	const insets = useSafeAreaInsets();
	return (
		<View style={[styles.main, { paddingTop: insets.top }]}>
			<StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
			<NavigationContainer ref={setNavigator}>
				<Stack.Navigator>
					<Stack.Screen name={HomeRouters.HOME} component={TapTop} options={NoHeader} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	main: { flex: 1, backgroundColor: '#ccc' },
});
