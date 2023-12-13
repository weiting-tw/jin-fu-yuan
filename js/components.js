
// BEGIN: Layout Go To Top
var LayoutGo2Top = function () {

	var handle = function () {
		var currentWindowPosition = $(window).scrollTop(); // current vertical position
		if (currentWindowPosition > 300) {
			$(".c-layout-go2top").addClass("active");
		} else {
			$(".c-layout-go2top").removeClass("active");
		};
	};

	return {

		//main function to initiate the module
		init: function () {

			handle(); // call headerFix() when the page was loaded

			if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
				$(window).bind("touchend touchcancel touchleave", function (e) {
					handle();
				});
			} else {
				$(window).scroll(function () {
					handle();
				});
			}

			$(".c-layout-go2top").on('click', function (e) {
				e.preventDefault();
				$("html, body").animate({
					scrollTop: 0
				}, 600);
			});
		}

	};
}();
// END: Layout Go To Top





// BEGIN: OwlCarousel
var ContentOwlcarousel = function () {

	var _initInstances = function () {
		$("[data-slider='owl'] .owl-carousel").each(function () {
			var parent = $(this).parent();

			var items;
			var itemsDesktop;
			var itemsDesktopSmall;
			var itemsTablet;
			var itemsTabletSmall;
			var itemsMobile;

			if (parent.data("single-item") == "true") {
				items = 1;
				itemsDesktop = 1;
				itemsDesktopSmall = 1;
				itemsTablet = 1;
				itemsTabletSmall = 1;
				itemsMobile = 1;
			} else {
				items = parent.data('items');
				itemsDesktop = [1199, parent.data('desktop-items') ? parent.data('desktop-items') : items];
				itemsDesktopSmall = [979, parent.data('desktop-small-items') ? parent.data('desktop-small-items') : 4];
				itemsTablet = [480, parent.data('tablet-items') ? parent.data('tablet-items') : 1];
				itemsMobile = [320, parent.data('mobile-items') ? parent.data('mobile-items') : 1];
			}

			$(this).owlCarousel({

				items: items,
				itemsDesktop: itemsDesktop,
				itemsDesktopSmall: itemsDesktopSmall,
				itemsTablet: itemsTablet,
				itemsTabletSmall: itemsTablet,
				itemsMobile: itemsMobile,

				navigation: parent.data("navigation") ? true : false,
				navigationText: false,
				slideSpeed: parent.data('slide-speed'),
				paginationSpeed: parent.data('pagination-speed'),
				singleItem: parent.data("single-item") ? true : false,
				autoPlay: parent.data("auto-play")
			});
		});
	};

	return {

		//main function to initiate the module
		init: function () {

			_initInstances();
		}

	};
}();
// END: OwlCarousel











// Main theme initialization
$(document).ready(function() {
	// init layout handlers
	LayoutGo2Top.init();
	ContentOwlcarousel.init();
	//Navwrapper();

	window.addEventListener("scroll", function(event) {
		var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		if (scrollTop > 100) {
			$(".header-fixed").stop(true,true).addClass("none-top");
		} else {
			$(".header-fixed").stop(true,true).removeClass("none-top");
		};
	});


  $(".nav-toggle").click(function(){
    $(".nav-mobile").fadeToggle();
    $(".nav-toggle .icon-bar").fadeToggle();
    $(".nav-toggle .icon").fadeToggle();
  });

	$(".header .header-link .item.drop").hover(function(){
    $(this).children("a").addClass("on");
    $(this).children(".drop-wrap").stop().fadeIn(500);
	},function(){
    $(this).children("a").removeClass("on");
    $(this).children(".drop-wrap").stop().fadeOut(500);
	});

	var swiper = new Swiper("#swiper-container", {
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		pagination: ".swiper-pagination",
		paginationClickable: true,
		speed: 800,
		autoplay: 5000,
		loop: true,
    effect: "fade",
	});




});








