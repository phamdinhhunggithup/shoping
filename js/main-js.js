// ===== HEADER =====
$(document).ready(function() {
	$("ul.navbar-nav li").hover(function(){
		$(this).children("ul.sub-menu").stop().fadeIn().addClass('show');
		$(this).children("#dropdown-menu").stop().fadeIn().addClass('show');
	}, function() {
		$(this).children("ul.sub-menu").stop().fadeOut().removeClass('show');
		$(this).children("#dropdown-menu").stop().fadeOut().removeClass('show');
	});
});
// ===== MAIN SEARCH =====
$(document).ready(function() {
	$("nav#navbar .icons a.icon-search").click(function() {
		$("#main-search").stop().fadeToggle();
		return false;
	});
	$("#main-search span.close-form").click(function() {
		$("#main-search").stop().fadeOut();
	});
	$(window).scroll(function() {
		if($(window).scrollTop() > 100) {
			$("#main-search").addClass('sticky-top');
		} else $("#main-search").removeClass('sticky-top');
	});
});
// ===== POPUP MODAL POST NEW =====
$(document).ready(function() {
	// handling hide show popup modal post new 
	setTimeout(() => {
		$(".open-modal-post-new").click();
	}, 2000);
	// handling hide show password
	$("#showpassword").click(function() {
		$("#password").toggleClass('hide-password show-password');
		if($("#password").hasClass('hide-password')) {
			$("#password").attr('type','password');
		}
		if($("#password").hasClass('show-password')) {
			$("#password").attr('type','text');
		}
	});
});

// ===== WP-CONTENT =====
// handling show list product child
$(document).ready(function() {
	$(".box .box-body .p-item").hover(function(){
		$(this).children(".p-info").children(".see-more").addClass('show');
	}, function() {
		$(this).children(".p-info").children(".see-more").removeClass('show');
	});
	var getLinkImg;
	$(".see-more ul.list-p li a").click(function() {
		getLinkImg = $(this).children('img').attr('src');
		$(this).parents(".p-item").children('.p-img').children('a.thumb-img').children('img').attr('src',getLinkImg);
		$(".see-more ul.list-p li a").removeClass('active');
		$(this).addClass('active');
		return false;
	});
});
// ===== ZOOM =====
$(document).ready(function() {
	$(window).scroll(function() {
		if($(window).scrollTop() < 100) {
			$("body div.zoom").removeClass('aos-animate');
		}
		// opening zoom
		if($(window).scrollTop() > 650) {
			$(".opening-1").addClass('aos-animate');
			if($(window).scrollTop() > 1400) {
				$(".opening-2").addClass('aos-animate');
			} 
		}
		// top product zoom
		if($(window).scrollTop() > 3345.60009765625) {
			$(".product-zoom-1").addClass('aos-animate');
			if($(window).scrollTop() > 4899.2001953125) {
				$(".product-zoom-2").addClass('aos-animate');
				if($(window).scrollTop() > 6099.2001953125) {
					$(".product-zoom-3").addClass('aos-animate');
				}
			}
		}
		// relative zoom
		if($(window).scrollTop() > 8662.400390625) {
			$("section#category .item-box.animate-1").addClass('aos-animate');
			if($(window).scrollTop() > 9007.2001953125) {
				$("section#category .item-box.animate-2").addClass('aos-animate');
			}
		}
	});
});
// ===== BACKTOP =====
$(document).ready(function() {
	$(window).scroll(function() {
		if($(window).scrollTop() > 200) {
			$("#backtop").addClass('show');
		} else $("#backtop").removeClass('show');
	});
	$("#backtop").click(function() {
			$("html, body").animate({
				scrollTop : 0,
			},1000)
	});
});
// ===== WP-RESPON =====
$(document).ready(function() {
	$(".navbar-dark .navbar-toggler").click(function() {
		$("#wp-respon").addClass('show');
		$("#site").addClass('show');
	});
	$(".site-mobile-menu-close span.close-icon, #site.show").click(function() {
		$("#wp-respon").removeClass('show');
		$("#site").removeClass('show');
	});
	// when browser resize 
	$(window).resize(function() {
		if($(window).width() > 768) {
			$("#wp-respon").removeClass('show');
			$("#site").removeClass('show');
		}
	});
});
// ===== OPENNING =====
// carousel
$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
	    loop:false,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:2
			},
			400: {
				items:3
			},	
	        600:{
	            items:3
			},
	        1000:{
	            items:4
	        }
	    }
	})
})
