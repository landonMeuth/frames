function main(){
  const currentTime = getTime();
  console.log(currentTime); // Prints the current time in "HH:MM" format
  
  
  
  index=openJSON();
  const data = JSON.parse(index);

  var time=data.schedule.time;
  var frameName=data.schedule.frameName;
  var frame=data.frame;
  //this part is where we check the json time

  var counter=0
  console.log(time.length)
  for (let i=0; i <= time.length; i++) {
    if (compareTime(time[i][0],currentTime)=="<" && compareTime(time[i][1],currentTime)==">"){
      counter=i
      console.log(i);
      break
    }
  }

  //this is the part where the frame is referenced 
  var frameToUse=frameName[counter][randInt(0,frameName[counter].length - 1)];
  for (let i=0; i <= frame.length; i++) {
    if (frameToUse==frame[i][0]) {
      var image=frame[i][1];
      var list=frame[i][2];
      var url=frame[i][3];
      console.log(image, frameToUse.length)
      break
    }
  }

  switchImage(image,list,url);
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

function openJSON() {
  //https://www.youtube.com/watch?v=Z92PqSyUBSI
  const index='{"schedule":{"time":[["13:00","13:53"],["4:30","8:20"],["00:00","99:99"]],"frameName": [["1","3"],["2"],["1","2","3"]]},"frame": [["1","cool.png",""],["2","rad.png",""],["3","awsome.png",""]]}';
  FileReader.readAsText()

  return index;
}

function switchImage(newImage,newList,newURL) {
	var element="./files/"+newImage;
  console.log("./files/"+newImage);
	document.getElementById('mainElement').src=element;
}

function randInt(min,max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}




setInterval(main, 1000);