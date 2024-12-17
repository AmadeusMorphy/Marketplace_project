
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 5986, hash: 'a198fcf12eeef50128b9f205dbc0d7b53f8347413e994cc86c3d2d2557e55b93', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1620, hash: '9350cbc4acb2a92e8107b8a5247cb7861aed15828a7d8cfd0fd197a3ac5f68af', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7TEHMAKX.css': {size: 360214, hash: 'CSclMuDAHnQ', text: () => import('./assets-chunks/styles-7TEHMAKX_css.mjs').then(m => m.default)},
    'theme-dark.css': {size: 198368, hash: 'kVaex0Lm6aI', text: () => import('./assets-chunks/theme-dark_css.mjs').then(m => m.default)},
    'theme-light.css': {size: 198060, hash: 'uiI7yUNHyNw', text: () => import('./assets-chunks/theme-light_css.mjs').then(m => m.default)}
  },
};
