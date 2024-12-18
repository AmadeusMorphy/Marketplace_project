
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 6010, hash: 'f887e84980e4a66249dda932f153dd82d7039f60ed3999866abed0912e51a4df', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1644, hash: '5e5f5accc96ea5f7c0d23ceb00f380b22bad73e1da6e4d9c2a41908161537310', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-7TEHMAKX.css', {size: 360214, hash: 'CSclMuDAHnQ', text: () => import('./assets-chunks/styles-7TEHMAKX_css.mjs').then(m => m.default)}], 
['theme-dark.css', {size: 198368, hash: 'kVaex0Lm6aI', text: () => import('./assets-chunks/theme-dark_css.mjs').then(m => m.default)}], 
['theme-light.css', {size: 198060, hash: 'uiI7yUNHyNw', text: () => import('./assets-chunks/theme-light_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
