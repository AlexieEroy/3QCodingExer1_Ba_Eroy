var dist, spd, dist1, spd1, avg, outp;

dist=prompt("Please enter the speed in miles: ", "0");
spd=prompt("Please enter the speed in minutes: ", "0");

dist1=parseInt(dist)*1609.34;
spd1=parseInt(spd)*60;

avg=dist1/spd1;

document.getElementById("output").innerHTML="Your distance is "+ dist1 +", and your speed is "+ spd1 +". Your average speed is "+ avg +"m/s.";