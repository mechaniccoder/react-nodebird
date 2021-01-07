module.exports = {
  presets: [['next/babel', ['@babel/preset-typescript', { isTSX: true }]]],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@pages': './pages',
          '@components': './components',
        },
      },
    ],
  ],
};
