;(function() {
	"use strict";

	$('.bi-menu-btn').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('bi-menu-btn-active');
		$('.bi-nav__list').toggleClass('bi-nav-active');
	  });
	  var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

})();

;(function() {
	"use strict";

	  var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();var countDownDate = new Date("Oct 19, 2018 19:00:00").getTime();
	  // Update the count down every 1 second
	  var x = setInterval(function() {
	  
		  // Get todays date and time
		  var now = new Date().getTime();
		  
		  var distance = countDownDate - now;
		  
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		  
		  document.getElementById("demo").innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds ;
		  
		  // If the count down is over, write some text 
		  if (distance < 0) {
			  clearInterval(x);
			  document.getElementById("demo").innerHTML = "EXPIRED";
		  }
	  }, 1000);

})();


	