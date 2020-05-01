module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@services': './src/services',
          '@store': './src/store',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
