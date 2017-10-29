'use strict';

const filters = [
  { 'vendorId': 0x2338, 'productId': 0x27256 },
  { 'vendorId': 0x2338, 'productId': 0x32772 },
  { 'vendorId': 0x2338, 'productId': 0x32771 },
  { 'vendorId': 0x2338, 'productId': 0x32777 },
];

function initScale() {

  
  navigator.usb.requestDevice({ 'filters': filters })
  .then(device => {
    console.log(device.productName);      // "Arduino Micro"
    console.log(device.manufacturerName); // "Arduino LLC"
  })
  .catch(error => { console.log(error); });
  

 //  navigator.usb.getDevices().then(devices => {
	//   devices.map(device => {
	//     console.log(device.productName);      // "Arduino Micro"
	//     console.log(device.manufacturerName); // "Arduino LLC"
	//   });
	// })

}

document.querySelector("#initScale").onclick = function() {
  console.log('click');
  initScale();
};