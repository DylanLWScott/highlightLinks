# highlightLinks
==================

Bookmarklet to add number key shortcuts to urls on a page

I had seen a Vimium feature of hightlighting links and wanted to make a simple js to see if I could just throw something together -  but I do not try to match any or all of the Vimium features specifically.  This is a personal tool/project and is not as robust as the other great tools already out there.

####Installation
One option is to create a bookmark and place the code from the file: highlightLinks.min.js as the url.
You just click the bookmark when you want links numbered and highlighted for quick navigation.

However, the suggested setup would be to add it as a Custom Search Engine in Chrome.  Define your keyword and the url would be the code from the file: highlightLinks.min.js.
So for the below example, 'hl' is the keyword.  On any page, you would get to the omnibox (shortcut Command-L (Mac) or Alt-D on Windows), enter in 'hl' and enter.  This should run the bookmark code without needing to leave the keyboard.

**Note: Make sure that if you copy and paste the contents of the file that 'javascript:' is at the beginning.  Some tools might strip it out, but it is needed atm.**

#####Screen Shot - Setting up bookmarklet for Chrome
![Setting up bookmarklet for Chrome] (imgs/bookmarkletshortcut.png)

####Usage
Trigger the script to start with either your shortcut to the bookmark or clicking the bookmark.  You should see links with numbers to the left of the link text.  To navigate or click that link: just type the highlighted number.  If it was just a navigation to a different spot on the same page (like a menu), you will still see the highlighted numbers and be able to enter in a new value (of course until you have navigated off of the page).

You can use the 'ESC' key to remove the added highlighting and navigation of the bookmark.

#####Screen Shot - Links numbered for quick navigation by highlightLinks.js
![highlightLinks.js in use] (imgs/hlExample.png)

####Credits
Vimium plugin for the idea

Google Closure complier for creating min.js and pretty-print versions. 

