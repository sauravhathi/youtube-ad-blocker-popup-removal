chrome.runtime.onInstalled.addListener(function () {
    chrome.tabs.create({ url: 'donation.html' });
});

(async () => {
    await chrome.alarms.create("donation", { periodInMinutes: 14400 });
    chrome.alarms.onAlarm.addListener(function (alarm) {
        if (alarm.name === "donation") {
            chrome.tabs.create({ url: 'donation.html' });
        }
    });
})();