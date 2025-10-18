document.getElementById("check").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = new URL(tab.url).hostname;

  const maliciousSites = ["malicious.com", "phishing.com", "fakebank.com"];
  const result = document.getElementById("result");

  if (maliciousSites.some(site => url.includes(site))) {
    result.textContent = "⚠ Warning: This site is malicious!";
    result.style.color = "red";
  } else {
    result.textContent = "✅ This site appears safe.";
    result.style.color = "green";
  }
});