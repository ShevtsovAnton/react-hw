module.exports = {
  presets: ['next/babel'],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs']
    }
  }
};
