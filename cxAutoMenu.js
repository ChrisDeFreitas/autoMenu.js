/*

	AutoMenus for Connexions.org
	- load menus from external html files
	- see autoMenuHelp.html for more info

*/
function menuLoad(){
/*
	automatically load menu content if specific id's found in document:
		<div id="T_CxTopMenu">AutoMenu: insert T_CxTopMenu.html here</div>
		<div id="T_CxSideMenu" style=''>AutoMenu: insert T_CxSideMenu.html here</div>
*/
	var dt = new Date()	//create unique url with date to to bypass browser caching

	var div = document.querySelector('#T_CxTopMenu')
	if(div != null)
		htmlImport('T_CxTopMenu', 'divContent', 'Templates/T_CxTopMenu.html?js='+dt.valueOf())

	var div = document.querySelector('#T_CxSideMenu')
	if(div != null)
		htmlImport('T_CxSideMenu', 'divContent', 'Templates/T_CxSideMenu.html?js='+dt.valueOf())
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
