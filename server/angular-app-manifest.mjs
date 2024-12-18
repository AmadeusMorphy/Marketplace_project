
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 6010, hash: '954c5108f1cdf249bea56715c32277483cc69311431e96ecbd7a2899d2a78279', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1644, hash: 'bc43e9ed0c4fc05737a05cc75153b3bc35ee18ab6256c25e9958cbcafae7cf10', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-7TEHMAKX.css', {size: 360214, hash: 'CSclMuDAHnQ', text: () => import('./assets-chunks/styles-7TEHMAKX_css.mjs').then(m => m.default)}], 
['theme-dark.css', {size: 198368, hash: 'kVaex0Lm6aI', text: () => import('./assets-chunks/theme-dark_css.mjs').then(m => m.default)}], 
['theme-light.css', {size: 198060, hash: 'uiI7yUNHyNw', text: () => import('./assets-chunks/theme-light_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
