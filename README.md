**# ODIN-PROJECT-ADMIN-DASHBOARD**

Admin Dashboard for Odin Project. JS Full Stack Path, Intermediate HTML/CSS.

Mostly using Grid and some flexbox here and there. Not fully responsive, just for desktop view for now. 

Added in dark mode. Maybe not most elegant implimentation...but not bad either ¯\_(ツ)_/¯ Does the job :D

Dark mode is an onclick event, that does three things:
- changes inner html of the span element to change the Material Icon
- toggles single html elements with dark-mode class
- nodelist html element with for each to toggle dark-mode class

**Learnings:**
- Not everything needs to be dynamicall sized. It was better to have the sidebar and announcement/trending cards as static px sizes. Then having the main section with project cards repsonsive with grid repeat/minmax. This keeps the UI consistent where it should be to make it feel solid, while also being dynamic/flexy in the right places.
- Tackle one section at a time, starting from outside in. I made the mistake of trying to do the header first. But I needed to tackle the main section first, because it was bigger and flowed down to the header syles/layout.
- When working on CSS, section everythhing out first and keep it seperate. E.g header, sidebar etc. Then once its complete, refactor code and simplify where possible.
- When working on CSS, set up variables first in the :root. I messed around with colors etc for a while. Setting :root provides structure.

**Live Site:**
https://ecstatic-gates-639ee3.netlify.app/
