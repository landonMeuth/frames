function main(){
  const currentHoursMinutes = getTime();
  console.log(currentHoursMinutes); // Prints the current time in "HH:MM" format
  
  
  switchImage();
  openJSON();
  
  //const index='./index.json';
  const data = JSON.parse(index);
  console.log(data.schedule)
}

function getTime() {
  var currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  return `${hours}:${minutes}`;
}

function openJSON() {
  const fs = require('fs');
  index = fs.readFileSync('index.json', 'utf8');
}

function switchImage() {
	var element="./files/rad.png"
	document.getElementById('mainElement').src=element;
}



setInterval(main, 1000);







