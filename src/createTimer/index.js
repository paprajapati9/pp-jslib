import style from "./index.css";

export default function createTimer() {

	window.addEventListener('DOMContentLoaded', ()=>{
		
		// calling after open function
		this.afterOpen();

		var afterClose = this.afterClose;

		console.log(this, "this");

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
		<div class="pp-clock-container">
			<div class="pp-clock-container-inner"> 
				<div class="pp-clock-block ${!timeLimit.days ? 'pp-hide-block': ''}"> 
					<span class="pp-clock-days"></span> 
					<div class="pp-content-body">Days</div> 
				</div> 
				<div class="pp-clock-block ${!timeLimit.hours ? 'pp-hide-block': ''}"> 
					<span class="pp-clock-hours"></span> 
					<div class="pp-content-body">Hours</div> 
				</div> 
				<div class="pp-clock-block"> 
					<span class="pp-clock-minutes"></span> 
					<div class="pp-content-body">Minutes</div> 
				</div> 
				<div class="pp-clock-block"> 
					<span class="pp-clock-seconds"></span> 
					<div class="pp-content-body">Seconds</div> 
				</div> 
			</div> 
			<div class="pp-clock-deadline"></div>
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
			var now = new Date().getTime(),
				t = deadline - now,
				days = Math.floor(t / (1000 * 60 * 60 * 24)),
				hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)),
				minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)), 
				seconds = Math.floor((t % (1000 * 60)) / 1000); 
			container.querySelector(".pp-clock-days").innerHTML =days ; 
			container.querySelector(".pp-clock-hours").innerHTML =hours; 
			container.querySelector(".pp-clock-minutes").innerHTML = minutes;  
			container.querySelector(".pp-clock-seconds").innerHTML =seconds; 
			if (t < 0) { 
				clearInterval(x); 
				var timeup = container.querySelector(".pp-clock-deadline");
				timeup.classList.add('pp-deadline-met');
				timeup.innerHTML = "TIME UP"; 
				container.querySelector(".pp-clock-days").innerHTML ='0'; 
				container.querySelector(".pp-clock-hours").innerHTML ='0'; 
				container.querySelector(".pp-clock-minutes").innerHTML ='0' ;  
				container.querySelector(".pp-clock-seconds").innerHTML = '0'; 

				//calling after close function
				afterClose();
			} 
		}, 1000); 
	})
}