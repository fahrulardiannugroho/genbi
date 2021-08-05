// const body = document.querySelector('body')
$( window ).scroll(function() {
  if($(window).scrollTop() > 50){
		$(".navbar").addClass("active");
		$(".nav-brand").addClass("active");
		$(".top-nav").addClass("active");
	} else {
		$(".navbar").removeClass("active");
		$(".nav-brand").removeClass("active");
		$(".top-nav").removeClass("active");
	}
});

$('.devisi-carousel').owlCarousel({
	margin:10,
	nav:true,
	responsive:{
		0:{
				items:1
		},
		800:{
				items:2
		},
		1000:{
				items:4
		}
	}
})

$('.testimoni-carousel').owlCarousel({
	margin:10,
	nav:true,
	responsive:{
		0:{
				items:1
		},
		800:{
				items:1
		},
		1000:{
				items:1
		}
	}
})

$('.blog-carousel').owlCarousel({
	margin:10,
	nav:true,
	responsive:{
		0:{
				items:2
		},
		800:{
				items:2
		},
		1000:{
				items:3
		}
	}
})