module.exports = {
  presets: [
    ['next/babel'],
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@pages': './pages',
          '@components': './components',
          '@store': './store',
        },
      },
    ],
  ],
};
