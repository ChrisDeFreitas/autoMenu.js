/*

	AutoMenus for Connexions.org
	- load menus from external html files
	- see autoMenuHelp.html for more info

*/
function menuLoad(){
/*
	automatically load menu content if specific id's found in document:
		<div id='T_7TopMenu' style='background-color:#000; color:yellow; width:100%; '></div>
		<div id=T_7Footer> auotMenu load: T_7Footer.html </div>
*/
	var dt = new Date()	//create unique url with date to to bypass browser caching

	var tm = document.querySelector('#T_7TopMenu')
	if(tm != null)
		htmlImport('T_7TopMenu', 'nav_background', 'autoMenu/Templates/T_7TopMenu.html?js='+dt.valueOf())
	var tm = document.querySelector('#T_7Footer')
	if(tm != null)
		htmlImport('T_7Footer', 'divContent', 'autoMenu/Templates/T_7Footer.html?js='+dt.valueOf())
}

function htmlImport(destid, remoteid, url) {
	console.log('htmlImport(): '+url)

	var ifr = document.createElement('iframe')
	ifr.style.display = 'none'
	var container = document.querySelector('#'+destid);
	ifr.onerror = function(){
		console.log('htmlImport() error, loading url =['+url+']')
		container.innerHTML = '&nbsp; Error loading file: topMenu.html'
		document.body.removeChild(ifr);
	}
	ifr.onload = function(ev){ console.log(ev)
		var doc = (typeof ifr.contentDocument=='object') ?ifr.contentDocument :ifr.contentWindow.document;
		var ctrl = doc.querySelector('#'+remoteid);
		//tests cause Chrome to always fail (confirmed via Browser's Trace):
		//if(doc==null || ctrl==null || !ctrl.innerHTML)
			//container.innerHTML = '&nbsp; Error loading HTML from: topMenu.html'
		//else
			container.innerHTML = ctrl.innerHTML
		document.body.removeChild(ifr);
	}
	document.body.appendChild(ifr);
	ifr.src = url
}
