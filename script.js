'use strict';


function initScale() {
  navigator.usb.requestDevice({ filters: [{ vendorId: 0x2338 }] })
  .then(device => {
    console.log(device.productName);      // "Arduino Micro"
    console.log(device.manufacturerName); // "Arduino LLC"
  })
  .catch(error => { console.log(error); });
}

document.querySelector("#initScale").onclick = function() {
  initScale();
};