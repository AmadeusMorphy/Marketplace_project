
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Marketplace_project/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 6006, hash: '423b3d2ca4b366918a8fdfc708b18a82895ce3e9ffd57dc68e7357853ccad4bb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1640, hash: '5cab33868204b2583d9499b411f0f778f6b4a3a555084d87ae6a8a9be6aa2c9f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7TEHMAKX.css': {size: 360214, hash: 'CSclMuDAHnQ', text: () => import('./assets-chunks/styles-7TEHMAKX_css.mjs').then(m => m.default)},
    'theme-dark.css': {size: 198368, hash: 'kVaex0Lm6aI', text: () => import('./assets-chunks/theme-dark_css.mjs').then(m => m.default)},
    'theme-light.css': {size: 198060, hash: 'uiI7yUNHyNw', text: () => import('./assets-chunks/theme-light_css.mjs').then(m => m.default)}
  },
};
