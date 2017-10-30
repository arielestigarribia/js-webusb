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
    console.log(device.productName);      
    console.log(device.manufacturerName); 
  })
  .catch(error => { console.log(error); });
  

    navigator.usb.getDevices().then(devices => {
	  devices.map(device => {
	    console.log(device.productName);      
	    console.log(device.manufacturerName); 
	  });
	})

}

document.querySelector("#initScale").onclick = function() {
  console.log('click');
  initScale();
};


// let button = document.getElementById('initScale');
// button.addEventListener('click', async () => {
//   let device;
//   console.log('click 1');
//   try {
//     console.log('click 2');
//     device = await navigator.usb.requestDevice({ filters: [{
//         vendorId: 0x2338,
//         productId: 0x32771
//     }]});
//   } catch (error) {
//     console.log(error); 
//     console.log('click 3');
//   }

//   if (device !== undefined) {
//     // Add |device| to the UI.
//   }
// });


// document.addEventListener('DOMContentLoaded', async () => {
//   console.log('debug 1');
//   let devices = await navigator.usb.getDevices();
//   devices.forEach(device => {
//     console.log(device.productName);
// 	   console.log(device.manufacturerName);
// 	console.log('debug 2');
//   });
// });


// navigator.usb.addEventListener('connect', device => {
//   // Add |device| to the UI.
//   console.log('connect');
// });


// navigator.usb.addEventListener('disconnect', device => {
//   // Remove |device| from the UI.
//   console.log('disconnect');
// });
