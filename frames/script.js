var currentFrame = 0;

function main(){
  const currentTime = getTime();
  console.log(currentTime); // Prints the current time in "HH:MM" format

  var time=data.schedule.time;
  var frameName=data.schedule.frameName;
  var frame=data.frame;
  //this part is where we check the json time

  var counter=0
  for (let i=0; i <= time.length; i++) {
    if (compareTime(time[i][0],currentTime)=="<" && compareTime(time[i][1],currentTime)==">"){
      counter=i;
      break
    }
  }

  //this is the part where the frame is referenced
  cycle(frameName[counter].length - 1) 
  var frameToUse=frameName[counter][currentFrame];
  for (let i=0; i <= frame.length; i++) {
    if (frameToUse==frame[i][0]) {
      var image=frame[i][1];
      var url=frame[i][2];
      break;
    }
  }

  switchImage(image,url);
}

function getTime() {
  var currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  return `${hours}:${minutes}`;
}

function compareTime(time1,time2) {
  // the following code was written by chatgpt as a way to handle time comparisons
  //The rest of this program is written exclusivly by me

  // Split the times into hours and minutes
  const [hour1, minute1] = time1.split(":").map(Number);
  const [hour2, minute2] = time2.split(":").map(Number);

  // Compare the times
  if (hour1 < hour2) {
      return "<";
    } else if (hour1 > hour2) {
      return ">";
    } else {
    // If hours are the same, compare minutes
    if (minute1 < minute2) {
      return "<";
    } else if (minute1 > minute2) {
      return ">";
    } else {
      return "=";
    }
  }
}

function switchImage(newImage,newURL) {
	if (newImage=="") {
    document.getElementById('image').style.display = "none";
  } else {
    var element="./files/"+newImage;
	  document.getElementById('image').src=element;
    document.getElementById('image').style.display = "block";
  }
  

  if (newURL=="") {
    document.getElementById('url').style.display = "none";
  } else {
    var element="./files/"+newURL;
	  document.getElementById('url').src=element;
    document.getElementById('url').style.display = "block";
  }
  
}

function randInt(max) {
  return (Math.floor(Math.random() * (max - 0 + 1)) + 0);
}

function cycle(length) {
  currentFrame+=1;
  if (currentFrame > length) {
    currentFrame=0;
  }
}




setInterval(main, 3000);