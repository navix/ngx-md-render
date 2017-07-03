export default {
  entry: 'dist/ngx-md-render.js',
  dest: 'dist/bundle/ngx-md-render.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'md-render',
  globals: {
    'typescript': 'ts'
  }
};
