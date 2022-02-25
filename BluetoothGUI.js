/*  
 * Bluetooth Test - Processing Side (In Chrome)
 * Arduino to HM10 module to Google Chrome
 * https://www.amazon.com/gp/product/B06WGZB2N4/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1
 * 
 * p5.ble.js
 https://yining1023.github.io/p5ble-website/
 
 * kevin darrah
 * 
 * Twitter: https://twitter.com/KDcircuits
 * For inquiries or design services:
 * https://www.kdcircuits.com
 * 
 * License?  Do whatever you want with this code - it's just a sample
 */
 
 //globals
let blueToothCharacteristic;//this is a blu
let receivedValue = "";

let blueTooth;
let isConnected = false;


var millisecondTimerStart;
var oldColorPickerValue;

var slider1, slider2, slider3;



function setup() {

  createCanvas(windowWidth, windowHeight);
  //stroke(127, 63, 120);
  //circle(100, 100, 100);
  
  // Create a p5ble class
  console.log("setting up");
  blueTooth = new p5ble();

  const connectButton = createButton('Connect');
  connectButton.mousePressed(connectToBle);
  connectButton.position(15, 15);

  //const LEDonButton = createButton('LED ON');
  //LEDonButton.mousePressed(LEDon);
  //LEDonButton.position(15, 60);

  //const LEDoffButton = createButton('LED OFF');
  //LEDoffButton.mousePressed(LEDoff);
  //LEDoffButton.position(LEDonButton.x+LEDonButton.width+10, 60);

  //ledColorPicker = createColorPicker('#ff0000');
  //ledColorPicker.position(LEDoffButton.x+LEDoffButton.width+10, 60);
  //millisecondTimerStart = millis();
  
  slider1 = createSlider(0, 255, 0);
  slider1.position(25, 50);
  slider1.style('width', '100px');
  slider1.changed(slider1Changed);
  slider2 = createSlider(0, 255, 0);
  slider2.position(220, 120);
  slider2.style('width', '100px');
  slider2.changed(slider2Changed);
  slider3 = createSlider(0, 255, 0);
  slider3.position(25, 190);
  slider3.style('width', '100px');
  slider3.changed(slider3Changed);
  
  //fill(204, 101, 192, 127);
  //stroke(127, 63, 120);
  //circle(20, 100, 20);
}


function draw() {
  drawScreen();
}
