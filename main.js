setInterval(showTime,1000);
function showTime() { 
    let time = new Date(); 
    let hour = time.getHours(); 
    let minute = time.getMinutes(); 
    let sec = time.getSeconds(); 
    var format = "AM"; 

    if(hour>=0 && hour<12){
        document.getElementById("message").innerHTML= "Good Morning";
    }else if(hour>=12 && hour<16){
        document.getElementById("message").innerHTML= "Good Afternoon";
    }else if(hour>=16 && hour<21){
        document.getElementById("message").innerHTML= "Good Evening";
    }else if(hour>=21 && hour<24){
        document.getElementById("message").innerHTML= "Good Night";
    }
  
    if (hour > 12) { 
        hour -= 12; 
        format = "PM"; 
    } 
    if (hour == 0) { 
        hour = 12; 
        format = "AM"; 
    } 
  
    hour = hour < 10 ? "0" + hour : hour; 
    minute = minute < 10 ? "0" + minute : minute; 
    sec = sec < 10 ? "0" + sec : sec; 
  
    let currentTime = hour + " : " 
            + minute + " : " + sec + " "+format; 
  
    document.getElementById("time") 
            .innerHTML = currentTime; 
} 
showTime(); 

function showDate()
{
    let date= new Date();
    let year= date.getFullYear();
    let day = new Date().toString().slice(8,10);
    let monthName=new Date().toString().slice(4,8);
    let currentDate= day+" "+monthName+ " "+year;
    document.getElementById("date").innerHTML = currentDate;
}
showDate();
