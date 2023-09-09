import MetaMaskSDK from '@metamask/sdk';
import { Linking } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

export const MMSDK = new MetaMaskSDK({
	openDeeplink: (link) => {
		Linking.openURL(link);
	},
	timer: BackgroundTimer,
	dappMetadata: {
		name: 'My app',
		url: 'https://mydapp.com',
	},
});
