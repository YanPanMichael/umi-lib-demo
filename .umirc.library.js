export default {
  esm: {
    type: 'rollup',
  },
  cjs: 'rollup',
  umd: {
    name: 'test',
    globals: {
      react: 'React',
    }
  }
}