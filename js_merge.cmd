del index.js

for %%i in (  scripts\autoredirect.js^
   scripts\iedetect.js^
   scripts\cookie.js^
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
   scripts\ver.js) do (type %%i >> index.js
echo //%%i >> index.js)
