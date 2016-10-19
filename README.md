AutoMenu.js
===

AutoMenus.js loads external HTML controls into a web page. The external controls exist in a separate web page.  This allows a complex control to be built and tested separately from the pages that use it.

AutoMenu.js was created for the <a href="http://connexions.org/SevenNews">Seven News Project</a> at <a href="http://connexions.org">Connexions.org</a>.  A need was identified to centralize the HTML and CSS of global menus to quickly apply changes to all web pages.  For Connexions.org this is a great savings because the slimmer web pages also reduce resource consumption when generating, deploying and archiving web pages.

Although the app was initially designed for menus, it will work with any HTML and CSS content.  For example, the page footers of the <a href="http://connexions.org/SevenNews">Seven News Project</a> are loaded with this app.

How It Works
---
- When an HTML document is opened, an iframe is created to download a specific HTML file from the server.  The iframe is dynamically created and destroyed.  The file downloaded is the template.
- An HTML control is extracted from the template and inserted into the HTML document.  A customized load function specifies the control IDs and template filename.  The custom at this point is to use the template filename for all IDs.
- The HTML control may contain STYLE tags and other HTML controls.  At the time of this writing, SCRIPT tags are removed by all browsers tested.
- The core functionality is provided by autoRuns.js/htmlImport() which should be altered for custom functionality by developers.
- Implemented in HTML and Javascript, no external libraries are required.  


Requirements
---
1. expect autoMenu home folder on webserver root:  
	http://connexions.org/autoMenu/

2. expect folder to contain HTML menu templates:  
	http://connexions.org/autoMenu/Templates

3. customized autoMenu.js to load required HTML templates, example:  
	http://connexions.org/autoMenu/7AutoMenu.js


Procedure
---
Note, this procedure is for the Seven News project (and Connexions.org).  Others will have to create an HTML template and a customized autoMenu.js.

1. Insert into HEAD section of HTML document:  
`
	<script src="/autoMenu/7AutoMenu.js"></script> <!-- contains menuLoad() -->
`
2. Modify BODY tag:  
`
	<body onload="menuLoad()">
`
3. Insert DIV with custom ID attribute in BODY section:  
`
	<div id="T_7TopMenu">AutoMenu: insert T_7TopMenu.html here</div>
`

Notes
---
- menu templates are standard HTML files, so they can be edited/copied/... easily
- the exported HTML control may possess STYLE tags
- Javscript in templates will not load--use an external .js file.  
- example Javascript document:  http://connexions.org/autoMenu/cxAutoMenu.js  
- example menu template:  http://connexions.org/autoMenu/Templates/T_CxTopMenu.html
- example HTML document:  http://connexions.org/autoMenu/A-Topics-Sample.html


Thanks
---
Atom Editor: https://atom.io/  
Canada: https://www.canada.ca/  
Connexions: http://connexions.org  
GitHub: https://github.com/  
Mozilla Developer Network: https://developer.mozilla.org/en-US/  


Author
---
Chris DeFreitas  
chrisd@europa.com  
Fall 2016
```
