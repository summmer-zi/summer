gsap.timeline({
	scrollTrigger: {
		trigger: ".cake",
		start: "top center",
		end: "+=350%",
		scrub: true,
		pin: true
	}
})
	.fromTo(".bread-bottom", { y: innerHeight * -1.5 }, { y: 0, duration: 1.5 })
	.from(".cream3", { y: innerHeight * -1.5, duration: 1.5 })
	.from(".jam", { y: innerHeight * -1.5, duration: 1.5 })
	.from(".cream2", { y: innerHeight * -1.5, duration: 1.5 })
	.from(".cream-melt", { borderWidth: "0px 0px" })
	.from(".cream", { y: innerHeight * -1.5, duration: 1.5 })
	.from(".strawberry", { y: innerHeight * -1.5, duration: 1.5 })
	.from(".dot", { x: innerWidth * 1.5, opacity: 0 })
	.from(".cake", { duration: 1.5 });


	window.addEventListener('scroll', () => {
		const footer = document.querySelector('footer');
		const footerIntro = document.querySelector('footer .intro');
		const contentHeight = document.body.clientHeight;
		const windowHeight = window.innerHeight;
		const scrollPosition = window.scrollY;
		
	
		if (scrollPosition + windowHeight >= contentHeight) {
		  footer.style.opacity = '0';
		} else {
		  footer.style.opacity = '1';
		}
		
		if (scrollPosition === 0) {
		  footer.style.opacity = '1';
		}
	  });



	  var el = document.querySelector('.color-scroll');
	  var pageY = 0;
	  var targetColor = randomColor();
	  
	  function random(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	  }
	  
	  function randomColor() {
		var r = random(240, 255); 
		var g = random(200, 220); 
		var b = random(180, 200);
		return `rgb(${r}, ${g}, ${b})`;
	  }
	  
	  function updateColor() {
		var currentColor = el.style.backgroundColor || 'rgb(255, 255, 255)'; 
		var currentRgba = currentColor.match(/\d+/g); 
		var targetRgba = targetColor.match(/\d+/g); 
	  
		var newRgba = currentRgba.map(function (val, index) {
		  var delta = (targetRgba[index] - val) / 30;
		  return Math.floor(parseInt(val) + delta); 
		});
	  
		el.style.backgroundColor = `rgba(${newRgba[0]}, ${newRgba[1]}, ${newRgba[2]}, 1)`; 
	  
	
		if (Math.abs(newRgba[0] - targetRgba[0]) < 2 &&
			Math.abs(newRgba[1] - targetRgba[1]) < 2 &&
			Math.abs(newRgba[2] - targetRgba[2]) < 2) {
		  targetColor = randomColor();
		}
	  }
	  

	  window.addEventListener('scroll', function () {
		pageY = window.scrollY || window.pageYOffset;
		updateColor();
	  });
	  

	  window.addEventListener('wheel', function (e) {
		if (e.deltaY < 0) {
		  updateColor();
		}
	  });
	  

	  updateColor();
	  