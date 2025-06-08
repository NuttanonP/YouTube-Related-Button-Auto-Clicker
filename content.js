function debugPrint(str) {
  isDebug = false; // Set to true to enable debug messages
  if (isDebug) {
    console.log(`${str}`);
  }
}

function findAndClickRelatedButton(via= "Unknown") {
  debugPrint(`Attempting to click "Related" button on ${location.href}`);

  // Find all the button
  const buttonFound = document.querySelectorAll("button.ytChipShapeButtonReset");

  // Find the "Related" button with loop
  for (const button of buttonFound) {
    const innerButton = button.querySelector("div.ytChipShapeChip");
    if (innerButton && innerButton.textContent.trim() === "Related") {
      // check if the button is visible and ready to be clicked
      if (button.offsetParent !== null && (!button.hasAttribute("aria-selected") || button.getAttribute("aria-selected") === "false")) {
        button.click();
        debugPrint(`🎯 Clicked "Related" button via "${via}"`);
        return;
      }
      else {
        debugPrint(`ℹ️ "Related" button can't be clicked via "${via}"`);
      }
    }
  }
  debugPrint(`❌ Related Button Not Found via "${via}"`);
}

function monitorURLChange() {
  // setup observer to monitor changes in the DOM
  const targetNode = document.body;
  const config = { childList: true, subtree: true };
  const observer = new MutationObserver((mutations, obs) => {

    // check if the URL has changed
    if (location.href !== lastUrl) {

      // update lastUrl to the new URL
      lastUrl = location.href;

      // only run if the URL is YouTube
      if (location.href.includes("youtube.com/watch?v=")) {

        // find and click the "Related" button
        setTimeout(() => {
          findAndClickRelatedButton("monitorURLChange");
        }, waitMiliseconds);         
      } 
      else {

        debugPrint("❌ Not a YouTube video page");

        // Disconnect this observer if not a YouTube video page
        obs.disconnect();
      }
    }
  });
  observer.observe(targetNode, config);
}


// --- Main Execution Flow ---

// Loaded Msg
debugPrint("📦 YouTube Related Button Clicker initialized");
let lastUrl = location.href;
const waitMiliseconds = 1500;

// Start script after a short delay on page load
window.addEventListener("load", () => {
  if (location.href.includes("youtube.com/watch?v=")) {

    // Find and click the "Related" button
    setTimeout(() => {
      findAndClickRelatedButton("Init");
    }, waitMiliseconds);
  }
  else {
    debugPrint("❌ Not a YouTube video page");
  }
});

// Also run script everytime the URL changed. 
// Because YouTube uses a Single Page Application (SPA) architecture
monitorURLChange();