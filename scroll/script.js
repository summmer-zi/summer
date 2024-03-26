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
	  var targetColor = randomColor(); // 목표 색상 초기화
	  
	  function random(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	  }
	  
	  function randomColor() {
		// Generate a random color in the range of light pink to light yellow
		var r = random(240, 255); // Red channel in the range [240, 255]
		var g = random(200, 220); // Green channel in the range [200, 220]
		var b = random(180, 200); // Blue channel in the range [180, 200]
		return `rgb(${r}, ${g}, ${b})`;
	  }
	  
	  function updateColor() {
		// Interpolate current color towards the target color
		var currentColor = el.style.backgroundColor || 'rgb(255, 255, 255)'; // 현재 색상 가져오기 (없으면 흰색)
		var currentRgba = currentColor.match(/\d+/g); // 현재 색상의 RGB 값 추출
		var targetRgba = targetColor.match(/\d+/g); // 목표 색상의 RGB 값 추출
	  
		var newRgba = currentRgba.map(function (val, index) {
		  var delta = (targetRgba[index] - val) / 30; // 목표 색상까지의 차이를 30단계로 나누어 부드러운 전환
		  return Math.floor(parseInt(val) + delta); // 새로운 RGB 값 계산
		});
	  
		el.style.backgroundColor = `rgba(${newRgba[0]}, ${newRgba[1]}, ${newRgba[2]}, 1)`; // 새로운 색상 적용
	  
		// Update the target color when the interpolation is almost done
		if (Math.abs(newRgba[0] - targetRgba[0]) < 2 &&
			Math.abs(newRgba[1] - targetRgba[1]) < 2 &&
			Math.abs(newRgba[2] - targetRgba[2]) < 2) {
		  targetColor = randomColor(); // 목표 색상을 새로운 랜덤한 색상으로 변경
		}
	  }
	  
	  // 스크롤 이벤트 핸들러 등록
	  window.addEventListener('scroll', function () {
		// 현재 스크롤 위치 갱신
		pageY = window.scrollY || window.pageYOffset;
	  
		// 스크롤 위치에 따라 배경색 업데이트
		updateColor();
	  });
	  
	  // 스크롤이 위로 올라가는 경우에도 색상 변경
	  window.addEventListener('wheel', function (e) {
		if (e.deltaY < 0) {
		  updateColor();
		}
	  });
	  
	  // 최초 한 번 호출하여 애니메이션 시작
	  updateColor();
	  