var clock = document.querySelector('#clock');
var hexColor = document.querySelector('#hex-color');

function changeTime(){
  var time = new Date();
  clock.textContent = time.getHours() + ' : ' + time.getMinutes() + ' . ' + time.getSeconds();
}

changeTime();
