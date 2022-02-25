function LEDon() {
  sendData("LED Color" + ledColorPicker.value()+ "\n");
}
function LEDoff() {
  sendData("LED OFF\n");
}

function slider1Changed() {
  console.log(slider1.value());
  sendData("1="+slider1.value()+"\n");
}
function slider2Changed() {
  console.log(slider2.value());
  sendData("2="+slider2.value()+"\n");
}
function slider3Changed() {
  console.log(slider3.value());
  sendData("3="+slider3.value()+"\n");
}