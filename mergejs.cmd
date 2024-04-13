echo "" 1>nul 2>index.js

for %%i in (  scripts\autoredirect.js^
   scripts\colorscheme.js^
   scripts\main.js^
   scripts\section_generate.js^
   scripts\hidegfsite.js^
   scripts\hmr_mp.js^
   scripts\centerpic.js^
   scripts\prompt.js^
   scripts\bg.js^
   scripts\prompt_md.js^
   scripts\misc.js^
   scripts\router.js^
   scripts\ver.js) do (type %%i >> index.js
echo //%%i >> index.js)

cd minifier
node minify.js
