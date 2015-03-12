# highlightLinks
==================

Bookmarklet to add number key shortcuts to urls on a page
Saw Vimium feature of hightlighting links and wanted to make a simple js to see if I could just throw something together.  This is a personal tool/project and is not as robust as the other great tools already out there.

####Installation
In /user/plugins, create a new folder named filter-code.
Drop these files in that directory.
Go to the Plugins administration page (*Manage Plugins*)->and activate the plugin: *Status Code by Keyword*.
After activation, you should see *Status Code Page* listed as a page under *Manage Plugins*
#####Screen Shot - Setting up bookmarklet for Chrome
![Setting up bookmarklet for Chrome] (imgs/bookmarkletshortcut.png)

####Usage
Add keyword to 3XX status codes associations from the dropdowns presented.  The 
table will show any existing mapping.  If no mapping is shown or defined, 301 is used as the default code.

#####Screen Shot - Links numbered for quick navigation by highlightLinks.js
![highlightLinks.js in use] (imgs/hlExample.png)

####Credits
Vimium plugin for the idea
Google Closure complier for creating min.js and pretty-print versions. 





To use, would set up a custom Chrome search engine, add the text of the highlightLinks.min.js file as the url.  Use whatever keyword you choose to trigger it.  Type the number before the link to click it->and press the ESC key to remove the numbers.

##

