chrome.action.onClicked.addListener(async tab => {
	if ((await chrome.storage.session.get("active")).active === true) {
		chrome.storage.session.set({active: false});

		chrome.scripting.removeCSS({
			files:  ["hide-sidebars.css"],
			target: {tabId: tab.id}
		});
	} else {
		chrome.storage.session.set({active: true});

		chrome.scripting.insertCSS({
			files:  ["hide-sidebars.css"],
			target: {tabId: tab.id}
		});
	}
});
