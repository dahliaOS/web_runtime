// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.


window.addEventListener('DOMContentLoaded', () => {
    
     // Replace with:
const { BrowserWindow } = require('@electron/remote')




  document.getElementById("min-btn").addEventListener("click", function (e) {
       var window = BrowserWindow.getAllWindows()[0];
       window.minimize(); 
  });

  document.getElementById("max-btn").addEventListener("click", function (e) {
       var window = BrowserWindow.getAllWindows()[0];
       if (!window.isMaximized()) {
           window.maximize();
             
           
               document.getElementById("maxIcon").innerHTML = "&#xE801";

       } else {
           window.unmaximize();
           document.getElementById("maxIcon").innerHTML = "&#xE800";
       }
  });

  document.getElementById("close-btn").addEventListener("click", function (e) {
       var window = BrowserWindow.getAllWindows()[0];
       window.close();
  }); 
   })
