(function() {
    'use strict';

    const pathParts = window.location.pathname.split('/').filter(p => p);
    
    if (pathParts.length >= 2) {
        const type = pathParts[0];
        const id = pathParts[1].split('?')[0];
        const spotifyURI = `spotify:${type}:${id}`;

        // Redirect immediately
        window.location.replace(spotifyURI);

        // Send close request to background script
        chrome.runtime.sendMessage({ action: 'scheduleTabClose' });
    }
})();