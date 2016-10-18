/*

	AutoMenus by Chris DeFreitas
	- load menu from external html files
	- customize this file for your own use, see cxAutoMenu.js for an example

*/
function menuLoad(){
	warning('autoMenu.js must be customized for your use, see autoMenuHelp.html and cxAutoMenu.js for an example.')
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
