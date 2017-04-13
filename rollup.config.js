export default {
  entry: 'dist/index.js',
  dest: 'dist/bundle/md-render.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'md-render',
  globals: {
    'typescript': 'ts'
  }
};
