import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from 'src/navigator/Navigation';

export const HomeRouters = {
	CACULATE: 'Calculate',
	HOME: 'Home',
} as const;

export type RootStackParamList = {
	[HomeRouters.CACULATE]: undefined;
	[HomeRouters.HOME]: undefined;
};

const App = () => {
	return (
		<SafeAreaProvider>
			<Navigation />
		</SafeAreaProvider>
	);
};

export default App;
