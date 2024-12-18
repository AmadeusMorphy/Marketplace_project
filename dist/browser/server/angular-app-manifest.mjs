
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 5990, hash: 'e403a34296dd0d9558a7f86f295e9f68fae6a244f5686045bd721501f59eed47', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1624, hash: '28d5ad54285991e6eeb77a2e090da06c5563531df8b1602ad2bf3cda10bb2fd1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7TEHMAKX.css': {size: 360214, hash: 'CSclMuDAHnQ', text: () => import('./assets-chunks/styles-7TEHMAKX_css.mjs').then(m => m.default)},
    'theme-dark.css': {size: 198368, hash: 'kVaex0Lm6aI', text: () => import('./assets-chunks/theme-dark_css.mjs').then(m => m.default)},
    'theme-light.css': {size: 198060, hash: 'uiI7yUNHyNw', text: () => import('./assets-chunks/theme-light_css.mjs').then(m => m.default)}
  },
};
