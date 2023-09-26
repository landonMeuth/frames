function main(){
    const currentHoursMinutes = getTime();
    console.log(currentHoursMinutes); // Prints the current time in "HH:MM" format
    
    
    switchImage();
    
    const jsonData='{"cool": "wow","age": 3}';
    const data = JSON.parse(jsonData);
    console.log(data.age)
}

function getTime() {
  var currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  return `${hours}:${minutes}`;
}



function switchImage() {
	var element="./files/rad.png"
	document.getElementById('mainElement').src=element;
}



setInterval(main, 1000);







