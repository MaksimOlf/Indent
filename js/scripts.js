$(document).ready(function() {
	$('.header__burger').click(function(){
		$('.header__burger, .header__menu').toggleClass('active');
	$('body').toggleClass('lock');
});

	$('.header__menu').click(function(){
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock');
	});

});


new Swiper('.image-slider',{

	//стрелки
	navigation: {
		nextEl: '.swiper-button-nexTT',
		prevEl: '.swiper-button-preRR'
	},
	//пагинация
	// pagination: {
	// 	el: '.swiper-pagination',
		//буллеты
		// type: 'bullets',
		// 	clickable: true,
		// точки разного размера
		// 	dynamicBullets: true,
		// renderBullet: function(index,className) {
		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
		// },
		// фракции
		// type: 'fraction',

		// renderFraction: function(currentClass, totalClass) {
		// 	return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
		// },
		// type: 'progressbar',
	// },
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// 	draggable: true,
	// },
	grabCursor: true,
	slideToClickedSlide: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	// mousewheel: {
	// 	sensitivity: 1,
	// 	eventsTarget: '.image-slider'
	// },
	autoHeight: false,
	slidesPerView: 1,
	slidesPerGroup: 1,
	watchOverflow: true,
	spaceBetween: 0,
	initialSlide: 0,
	loop: false,
	freeMode: false,
	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	speed: 300,
	direction: 'horizontal',
	effect: 'slide',
	// effect: 'fade',
	// fadeEffect: {
	// 	crossFade: true,
	// },
	// effect: 'flip',
	// fadeEffect: {
	// 	slideShadows: true,
	// 	limitRotation: true,
	// },
	// effect: 'cube',
	// cubeEffect: {
	// 	slideShadows: true,
	// 	shadow: true,
	// 	shadowOffset: 20,
	// 	shadowScale: 0.94,
	// },
	// effect: 'coverflow',
	// coverflowEffect: {
	// 	rotate: 20,
	// 	stretch: 50,
	// 	slideShadows: true,
	// },
	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 	},
	// 	480: {
	// 		slidesPerView: 2,
	// 	},
	// 	992: {
	// 		slidesPerView: 3,
	// 	}
	// },
	// zoom: {
	// 	maxRatio: 5,
	// 	minRatio: 1,
	// }
	thumbs: {
		swiper: {
		el: '.image-mini-slider',
		slidesPerView: 10,
		spaceBetween: 0,
		},
	},
});


let tab = function() {
	let tabNav = document.querySelectorAll('.tabs-nav__item'),
		tabContent = document.querySelectorAll('.tab'),
		tabName;
	tabNav.forEach(item => {
		item.addEventListener('click',selectTabNav)
	});

	function selectTabNav() {
		tabNav.forEach(item => {
			item.classList.remove('is-active');
		});
		this.classList.add('is-active');
		tabName = this.getAttribute('data-tab-name');
		selectTabContent(tabName);
	}
	function selectTabContent(tabName) {
		tabContent.forEach(item => {
			item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
		});
	}
};

tab();