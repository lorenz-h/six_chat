// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById("toggle_dev_tools").addEventListener("click", function(){
    console.log("Toggling developer tools...");
    require('electron').remote.getCurrentWindow().webContents.toggleDevTools()
    require('electron').remote.getCurrentWindow().removeMenu();
  }); 
  })

window.mqtt = require('mqtt')


