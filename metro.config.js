const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
	...defaultConfig,
	resolver: {
		...defaultConfig.resolver,
		extraNodeModules: {
			...defaultConfig.resolver,
			extraNodeModules,
			...require('node-libs-react-native'),
		},
	},
};
