//import style from "./index.css";

export default function createTimer() {

	window.addEventListener('DOMContentLoaded', ()=>{
		
		var timeLimit = this.timeLimit,
		currentTime = new Date();

		if(!timeLimit.years) timeLimit.years = 0;
		if(!timeLimit.months) timeLimit.months = 0;
		if(!timeLimit.days) timeLimit.days = 0;
		if(!timeLimit.hours) timeLimit.hours = 0;
		if(!timeLimit.minutes) timeLimit.minutes = 0;
		if(!timeLimit.seconds) timeLimit.seconds = 0;

		let container = this.container;
		container.innerHTML = `
		<div id="clockdiv"> 
		<div> 
			<span class="days" id="day"></span> 
			<div class="smalltext">Days</div> 
		</div> 
		<div> 
			<span class="hours" id="hour"></span> 
			<div class="smalltext">Hours</div> 
		</div> 
		<div> 
			<span class="minutes" id="minute"></span> 
			<div class="smalltext">Minutes</div> 
		</div> 
		<div> 
			<span class="seconds" id="second"></span> 
			<div class="smalltext">Seconds</div> 
		</div> 
		</div> 
		`;

		var deadline = new Date(
			timeLimit.years + currentTime.getFullYear(), 
			timeLimit.months + currentTime.getMonth(), 
			timeLimit.days + currentTime.getDate(), 
			timeLimit.hours + currentTime.getHours(), 
			timeLimit.minutes + currentTime.getMinutes(), 
			timeLimit.seconds + currentTime.getSeconds() + 2 
		); // added 2 sec gap for load

		console.log(deadline, "deadline");

		deadline = deadline.getTime();
		var x = setInterval(function() { 
		
		var now = new Date().getTime();
		var t = deadline - now; 
		var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
		var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
		var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
		var seconds = Math.floor((t % (1000 * 60)) / 1000); 
		document.getElementById("day").innerHTML =days ; 
		document.getElementById("hour").innerHTML =hours; 
		document.getElementById("minute").innerHTML = minutes;  
		document.getElementById("second").innerHTML =seconds;  
		if (t < 0) { 
				clearInterval(x); 
				document.getElementById("demo").innerHTML = "TIME UP"; 
				document.getElementById("day").innerHTML ='0'; 
				document.getElementById("hour").innerHTML ='0'; 
				document.getElementById("minute").innerHTML ='0' ;  
				document.getElementById("second").innerHTML = '0'; } 
		}, 1000); 
	})
}