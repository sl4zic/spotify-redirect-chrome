chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.action === 'scheduleTabClose' && sender.tab?.id) {
        // Close tab after short delay to allow redirect to complete
        setTimeout(async () => {
            try {
                await chrome.tabs.remove(sender.tab.id);
            } catch (error) {
                console.log('Tab already closed:', error);
            }
        }, 5000); // Increased delay to handle protocol handler dialog
    }
});
