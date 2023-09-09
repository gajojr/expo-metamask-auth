import 'node-libs-react-native/globals';
import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MMSDK } from './web3/metamask';

export default function App() {
	const onPress = async () => {
		await MMSDK.connect();
		const ethereum = MMSDK.getProvider();
		const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
		console.log(accounts);
	};

	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
			<Button
				title='Sign up with metamask'
				onPress={onPress}
			/>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
