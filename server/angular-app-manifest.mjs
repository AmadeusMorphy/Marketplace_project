
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Marketplace_project/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 6010, hash: '214c74b675d382db6d560d3c9e354f1755de98a29608fe29ee5b31aefa05a27b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1644, hash: '0730c0fe6b1db2b0d20853ae9844208f26d66683398d23ae0e7bb55dee35f91d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7TEHMAKX.css': {size: 360214, hash: 'CSclMuDAHnQ', text: () => import('./assets-chunks/styles-7TEHMAKX_css.mjs').then(m => m.default)},
    'theme-dark.css': {size: 198368, hash: 'kVaex0Lm6aI', text: () => import('./assets-chunks/theme-dark_css.mjs').then(m => m.default)},
    'theme-light.css': {size: 198060, hash: 'uiI7yUNHyNw', text: () => import('./assets-chunks/theme-light_css.mjs').then(m => m.default)}
  },
};
