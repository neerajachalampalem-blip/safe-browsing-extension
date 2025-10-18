const API_KEY = "YOUR_GOOGLE_SAFE_BROWSING_API_KEY";

chrome.webNavigation.onCompleted.addListener(async (details) => {
  const url = details.url;

  const body = {
    client: {
      clientId: "yourcompanyname",
      clientVersion: "1.0"
    },
    threatInfo: {
      threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE"],
      platformTypes: ["ANY_PLATFORM"],
      threatEntryTypes: ["URL"],
      threatEntries: [{ url }]
    }
  };

  try {
    const response = await fetch(
      'https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${API_KEY}',
      {
        method: "POST",
        body: JSON.stringify(body)
      }
    );

    const data = await response.json();

    if (data && data.matches) {
      chrome.tabs.update(details.tabId, {
        url: chrome.runtime.getURL("blocked.html")
      });
    }

  } catch (error) {
    console.error("Error checking Safe Browsing API:", error);
  }
});