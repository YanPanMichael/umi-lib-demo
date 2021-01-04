export const imports = {
  'src/button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-button" */ 'src/button.mdx'
    ),
}
