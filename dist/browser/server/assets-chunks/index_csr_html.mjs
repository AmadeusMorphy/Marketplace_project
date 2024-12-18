export default `<!doctype html>
<html lang="en" data-beasties-container="">

<head>
  <meta charset="utf-8">
  <title>MarketplaceProject</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <style>:root{font-family:Inter var,sans-serif;font-feature-settings:"cv02","cv03","cv04","cv11";font-variation-settings:normal;--font-family:"Inter var", sans-serif;--font-feature-settings:"cv02", "cv03", "cv04", "cv11";--text-color:#334155;--text-color-secondary:#64748b;--primary-color:#020617;--primary-color-text:#ffffff;--surface-0:#ffffff;--surface-50:#f8fafc;--surface-100:#f1f5f9;--surface-200:#e2e8f0;--surface-300:#cbd5e1;--surface-400:#94a3b8;--surface-500:#64748b;--surface-600:#475569;--surface-700:#334155;--surface-800:#1e293b;--surface-900:#0f172a;--surface-950:#020617;--gray-0:#ffffff;--gray-50:#f8fafc;--gray-100:#f1f5f9;--gray-200:#e2e8f0;--gray-300:#cbd5e1;--gray-400:#94a3b8;--gray-500:#64748b;--gray-600:#475569;--gray-700:#334155;--gray-800:#1e293b;--gray-900:#0f172a;--gray-950:#020617;--content-padding:1.125rem;--inline-spacing:.5rem;--border-radius:6px;--surface-ground:#f8fafc;--surface-section:#ffffff;--surface-card:#ffffff;--surface-overlay:#ffffff;--surface-border:#e2e8f0;--surface-hover:#f1f5f9;--focus-ring:none;--maskbg:rgba(0, 0, 0, .4);--highlight-bg:#020617;--highlight-text-color:#ffffff;--p-anchor-gutter:2px;color-scheme:light}:root{--p-focus-ring-color:var(--primary-color)}@font-face{font-family:Inter var;font-weight:100 900;font-display:swap;font-style:normal;font-named-instance:"Regular";src:url("./media/Inter-roman.var-5VGNBR6A.woff2?v=3.19") format("woff2")}@font-face{font-family:Inter var;font-weight:100 900;font-display:swap;font-style:italic;font-named-instance:"Italic";src:url("./media/Inter-italic.var-YRHKCDAA.woff2?v=3.19") format("woff2")}:root{--blue-50:#f5f9ff;--blue-100:#d0e1fd;--blue-200:#abc9fb;--blue-300:#85b2f9;--blue-400:#609af8;--blue-500:#3b82f6;--blue-600:#326fd1;--blue-700:#295bac;--blue-800:#204887;--blue-900:#183462;--green-50:#f4fcf7;--green-100:#caf1d8;--green-200:#a0e6ba;--green-300:#76db9b;--green-400:#4cd07d;--green-500:#22c55e;--green-600:#1da750;--green-700:#188a42;--green-800:#136c34;--green-900:#0e4f26;--yellow-50:#fefbf3;--yellow-100:#faedc4;--yellow-200:#f6de95;--yellow-300:#f2d066;--yellow-400:#eec137;--yellow-500:#eab308;--yellow-600:#c79807;--yellow-700:#a47d06;--yellow-800:#816204;--yellow-900:#5e4803;--cyan-50:#f3fbfd;--cyan-100:#c3edf5;--cyan-200:#94e0ed;--cyan-300:#65d2e4;--cyan-400:#35c4dc;--cyan-500:#06b6d4;--cyan-600:#059bb4;--cyan-700:#047f94;--cyan-800:#036475;--cyan-900:#024955;--pink-50:#fef6fa;--pink-100:#fad3e7;--pink-200:#f7b0d3;--pink-300:#f38ec0;--pink-400:#f06bac;--pink-500:#ec4899;--pink-600:#c93d82;--pink-700:#a5326b;--pink-800:#822854;--pink-900:#5e1d3d;--indigo-50:#f7f7fe;--indigo-100:#dadafc;--indigo-200:#bcbdf9;--indigo-300:#9ea0f6;--indigo-400:#8183f4;--indigo-500:#6366f1;--indigo-600:#5457cd;--indigo-700:#4547a9;--indigo-800:#363885;--indigo-900:#282960;--teal-50:#f3fbfb;--teal-100:#c7eeea;--teal-200:#9ae0d9;--teal-300:#6dd3c8;--teal-400:#41c5b7;--teal-500:#14b8a6;--teal-600:#119c8d;--teal-700:#0e8174;--teal-800:#0b655b;--teal-900:#084a42;--orange-50:#fff8f3;--orange-100:#feddc7;--orange-200:#fcc39b;--orange-300:#fba86f;--orange-400:#fa8e42;--orange-500:#f97316;--orange-600:#d46213;--orange-700:#ae510f;--orange-800:#893f0c;--orange-900:#642e09;--bluegray-50:#f7f8f9;--bluegray-100:#dadee3;--bluegray-200:#bcc3cd;--bluegray-300:#9fa9b7;--bluegray-400:#818ea1;--bluegray-500:#64748b;--bluegray-600:#556376;--bluegray-700:#465161;--bluegray-800:#37404c;--bluegray-900:#282e38;--purple-50:#fbf7ff;--purple-100:#ead6fd;--purple-200:#dab6fc;--purple-300:#c996fa;--purple-400:#b975f9;--purple-500:#a855f7;--purple-600:#8f48d2;--purple-700:#763cad;--purple-800:#5c2f88;--purple-900:#432263;--red-50:#fff5f5;--red-100:#ffd0ce;--red-200:#ffaca7;--red-300:#ff8780;--red-400:#ff6259;--red-500:#ff3d32;--red-600:#d9342b;--red-700:#b32b23;--red-800:#8c221c;--red-900:#661814;--primary-50:#f2f3f3;--primary-100:#c2c3c7;--primary-200:#92949b;--primary-300:#62656f;--primary-400:#323543;--primary-500:#020617;--primary-600:#020514;--primary-700:#010410;--primary-800:#01030d;--primary-900:#010209}@layer primeng{*{box-sizing:border-box}}</style><link id="app-theme" rel="stylesheet" type="text/css" href="theme-light.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" type="text/css" href="theme-light.css"></noscript>
<style>@layer primeng{@-webkit-keyframes p-fadein{0%{opacity:0}to{opacity:1}}}@-webkit-keyframes p-icon-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@font-face{font-family:nzd;src:url("./media/Parkinsans-VariableFont_wght-B4EY7WSU.ttf")}:root{--purple:#824bff;--red:rgb(238, 15, 15)}body{padding:0;margin:0;box-sizing:border-box;font-family:nzd}</style><link rel="stylesheet" href="styles-7TEHMAKX.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-7TEHMAKX.css"></noscript></head>

<body ngcm="">
  <app-root></app-root>
<link rel="modulepreload" href="chunk-OFMPJY7U.js"><link rel="modulepreload" href="chunk-DQKGJLGU.js"><link rel="modulepreload" href="chunk-CSNRS2P6.js"><link rel="modulepreload" href="chunk-JP7PQH6C.js"><link rel="modulepreload" href="chunk-XE6U646S.js"><link rel="modulepreload" href="chunk-AQKUVXN5.js"><link rel="modulepreload" href="chunk-V2XVYCRE.js"><link rel="modulepreload" href="chunk-ST7ZK63N.js"><link rel="modulepreload" href="chunk-FZIPSMQF.js"><link rel="modulepreload" href="chunk-6G6VUIFH.js"><script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-SKNTGGKQ.js" type="module"></script></body>

</html>`;