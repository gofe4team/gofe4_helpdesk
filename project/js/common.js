$(window).load(function() {
	//   animate  Лена, Аня
$(".ask").animated("lightSpeedin", "fadeOut");
$(".ask_2").animated("lightSpeedin", "fadeOut");

// жолтый и красный блок
$(".textblock ").animated("bounceInLeft", "fadeOut");

// синий блок
$(".more_inform .blue_block").animated("bounceInRight", "fadeOut");


// animate  общая инфо, скорая помощь 



});

$(document).ready(function() {




//мобильное меню
$(".toggle_mnu, .menu_item").click(function() {
	$(".sandwich").toggleClass("active");
});


$(".top_mnu ul a").click(function() {
	$(".top_mnu").fadeOut(600);
	$(".sandwich").toggleClass("active");
	$(".top_text").css("opacity", "1");
}).append("<span>");

$(".toggle_mnu").click(function() {
	if ($(".top_mnu").is(":visible")) {
		$(".top_text").css("opacity", "1");
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated");
	} else {
		$(".top_text").css("opacity", ".1");
		$(".top_mnu").fadeIn(600);
		$(".top_mnu li a").addClass("fadeInUp animated");
	};
});


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	var iconHeight = parseInt($('.icon-trans3-l').css('height'));
	if(windowHeight / iconHeight  > 6)
	{
		$('.blocks-leptop').addClass('trans-base');
	}
});

// v.b. start code 11.09.2015

// ================= Анимация блоков при скроле (LEPTOP) =================
(function(){
	var lastScrollTop = 0;
	$(document).ready(function(){
		$(window).scroll(function(event){
			var currentScroll = $(this).scrollTop();
			var anchorTop = $('.icon-trans3-l').offset().top - $(window).scrollTop();
			var anchorHeight = parseInt($('.icon-trans3-l').css('height'));
			var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			var anchorBottom = windowHeight - anchorTop - anchorHeight;

			if (currentScroll > lastScrollTop){
				if(anchorBottom > 40)
				{
					$('.blocks-leptop').addClass('trans-base');
				}				
				//console.log("downscroll code");
			}
			else
			{
				//console.log("upscroll code");
			}
			lastScrollTop = currentScroll;
			//console.log(windowHeight + " " + anchorBottom + " " + (windowHeight - anchorBottom));
		});
	});
}());

// ================= Анимация блоков при скроле (HELP) =================
(function(){
	var lastScrollTop = 0;
	$(document).ready(function(){
		$(window).scroll(function(event){
			var currentScroll = $(this).scrollTop();
			var anchorTop = $('.icon-trans3-h').offset().top - $(window).scrollTop();
			var anchorHeight = parseInt($('.icon-trans3-h').css('height'));
			var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			var anchorBottom = windowHeight - anchorTop - anchorHeight;

			if (currentScroll > lastScrollTop){
				if(anchorBottom > 80)
				{
					$('.blocks-help').addClass('trans-base');
				}				
				//console.log("downscroll code");
			}
			else
			{
				//console.log("upscroll code");
			}
			lastScrollTop = currentScroll;
			//console.log(windowHeight + " " + anchorBottom + " " + (windowHeight - anchorBottom));
		});
	});
}());

// ================= Анимация блоков при скроле (ADMIN) =================
(function(){
	var lastScrollTop = 0;
	$(document).ready(function(){
		$(window).scroll(function(event){
			var currentScroll = $(this).scrollTop();
			var anchorTop = $('.icon-trans3-a').offset().top - $(window).scrollTop();
			var anchorHeight = parseInt($('.icon-trans3-a').css('height'));
			var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			var anchorBottom = windowHeight - anchorTop - anchorHeight;

			if (currentScroll > lastScrollTop){
				if(anchorBottom > 80)
				{
					$('.blocks-admin').addClass('trans-base');
				}				
				//console.log("downscroll code");
			}
			else
			{
				//console.log("upscroll code");
			}
			lastScrollTop = currentScroll;
			//console.log(windowHeight + " " + anchorBottom + " " + (windowHeight - anchorBottom));
		});
	});
}());


// ================= Поведение иконок при скроле (LEPTOP) =================

(function(){
	var lastScrollTop = 0;
	$(document).ready(function(){
		$(window).scroll(function(event){
			var currentScroll = $(this).scrollTop();
			
			var anchorTop = $('.anchor-leptop').offset().top - $(window).scrollTop();
			var anchorHeight = parseInt($('.anchor-leptop').css('height'));
			var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			var anchorBottom = windowHeight - anchorTop - anchorHeight;

			if (currentScroll > lastScrollTop){
				if(anchorBottom > windowHeight / 3)
				{
					$('.icon-trans1-l').addClass('icon-trans-base');
					$('.icon-trans2-l').addClass('icon-trans-base');
					$('.icon-trans3-l').addClass('icon-trans-base');
					$('.icon-trans4-l').addClass('icon-trans-base');
					$('.icon-trans5-l').addClass('icon-trans-base');
					$('.icon-trans6-l').addClass('icon-trans-base');
				}				
				//console.log("downscroll code");
			}
			else
			{
				if(anchorBottom <= windowHeight / 3)
				{
					$('.icon-trans1-l').removeClass('icon-trans-base');
					$('.icon-trans2-l').removeClass('icon-trans-base');
					$('.icon-trans3-l').removeClass('icon-trans-base');
					$('.icon-trans4-l').removeClass('icon-trans-base');
					$('.icon-trans5-l').removeClass('icon-trans-base');
					$('.icon-trans6-l').removeClass('icon-trans-base');
				}				
				//console.log("upscroll code");
			}
			lastScrollTop = currentScroll;
			//console.log(anchorTop + " " + anchorHeight + " " + windowHeight / 3 + " " + anchorBottom);
		});
});
}());

// ================= Поведение иконок при скроле (HELP) =================

(function(){
	var lastScrollTop = 0;
	$(document).ready(function(){
		$(window).scroll(function(event){
			var currentScroll = $(this).scrollTop();
			
			var anchorTop = $('.anchor-help').offset().top - $(window).scrollTop();
			var anchorHeight = parseInt($('.anchor-help').css('height'));
			var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			var anchorBottom = windowHeight - anchorTop - anchorHeight;

			if (currentScroll > lastScrollTop){
				if(anchorBottom > windowHeight / 3)
				{
					$('.icon-trans1-h').addClass('icon-trans-base');
					$('.icon-trans2-h').addClass('icon-trans-base');
					$('.icon-trans3-h').addClass('icon-trans-base');
					$('.icon-trans4-h').addClass('icon-trans-base');
					$('.icon-trans5-h').addClass('icon-trans-base');
					$('.icon-trans6-h').addClass('icon-trans-base');
				}				
				//console.log("downscroll code");
			}
			else
			{
				if(anchorBottom <= windowHeight / 3)
				{
					$('.icon-trans1-h').removeClass('icon-trans-base');
					$('.icon-trans2-h').removeClass('icon-trans-base');
					$('.icon-trans3-h').removeClass('icon-trans-base');
					$('.icon-trans4-h').removeClass('icon-trans-base');
					$('.icon-trans5-h').removeClass('icon-trans-base');
					$('.icon-trans6-h').removeClass('icon-trans-base');
				}				
				//console.log("upscroll code");
			}
			lastScrollTop = currentScroll;
			//console.log(anchorTop + " " + anchorHeight + " " + windowHeight / 3 + " " + anchorBottom);
		});
});
}());

// ================= Поведение иконок при скроле (ADMIN) =================

(function(){
	var lastScrollTop = 0;
	$(document).ready(function(){
		$(window).scroll(function(event){
			var currentScroll = $(this).scrollTop();
			
			var anchorTop = $('.anchor-admin').offset().top - $(window).scrollTop();
			var anchorHeight = parseInt($('.anchor-admin').css('height'));
			var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			var anchorBottom = windowHeight - anchorTop - anchorHeight;

			if (currentScroll > lastScrollTop){
				if(anchorBottom > windowHeight / 3)
				{
					$('.icon-trans1-a').addClass('icon-trans-base');
					$('.icon-trans2-a').addClass('icon-trans-base');
					$('.icon-trans3-a').addClass('icon-trans-base');
					$('.icon-trans4-a').addClass('icon-trans-base');
					$('.icon-trans5-a').addClass('icon-trans-base');
					$('.icon-trans6-a').addClass('icon-trans-base');
				}				
				//console.log("downscroll code");
			}
			else
			{
				if(anchorBottom <= windowHeight / 3)
				{
					$('.icon-trans1-a').removeClass('icon-trans-base');
					$('.icon-trans2-a').removeClass('icon-trans-base');
					$('.icon-trans3-a').removeClass('icon-trans-base');
					$('.icon-trans4-a').removeClass('icon-trans-base');
					$('.icon-trans5-a').removeClass('icon-trans-base');
					$('.icon-trans6-a').removeClass('icon-trans-base');
				}				
				//console.log("upscroll code");
			}
			lastScrollTop = currentScroll;
			//console.log(anchorTop + " " + anchorHeight + " " + windowHeight / 3 + " " + anchorBottom);
		});
});
}());

// v.b. end code 11.09.2015



/* ======================================================= */

//+++++++++++++++++++++++++ Д О Б А В Л Е Н И Е   К Л А С С О В +++++++++++++++++++++++++++++++


//+++++++++++++++++++++++++ ДЛЯ ЗАМЕНЫ POSITION FROM FIX TO ABSOLUTE (sec_1) +++++++++++++++++++++++++++++++
(function(){
	$(document).ready(function(){
		$(window).scroll(function(event){
			var wrap = $("#wrap");
			if ($(this).scrollTop() > 1700){
				wrap.addClass("fix-search");
			}
			else
			{
				wrap.removeClass("fix-search");
			}
		});
	});
}());

//+++++++++++++++++++++++++ ДЛЯ ЗАМЕНЫ POSITION FROM FIX TO ABSOLUTE (sec_2) +++++++++++++++++++++++++++++++

(function(){
	$(document).ready(function(){
		$(window).scroll(function(event){
			var wrap = $("#blue_wrap");
			if ($(this).scrollTop() > 1700){
				wrap.addClass("blue-fix-search");
			}
			else
			{
				wrap.removeClass("blue-fix-search");
			}
		});
	});
}());

//+++++++++++++++++++++++++ ДЛЯ ЗАМЕНЫ POSITION FROM FIX TO DISPLAY NONE (sec_2) +++++++++++++++++++++++++++++++
(function(){
	$(document).ready(function(){
		$(window).scroll(function(event){
			var wrap = $("#blue_wrap");
			if ($(this).scrollTop() > 3000){
				wrap.addClass("blue-fix-search-none");
			}
			else
			{
				wrap.removeClass("blue-fix-search-none");
			}
		});
	});
}());


//+++++++++++++++++++++++++ ДЛЯ ЗАМЕНЫ POSITION FROM ABSOLETE TO FIX NONE (sec_3) +++++++++++++++++++++++++++++++

(function(){
	$(document).ready(function(){
		$(window).scroll(function(event){
			var wrap = $("#pink_wrap");
			if ($(this).scrollTop() > 3200){
				wrap.addClass("pink-fix-search");
			}
			else
			{
				wrap.removeClass("pink-fix-search");
			}
		});
	});
}());

/* ======================================================= */





/* ======================================================= */
(function (){
	var backgroundColor;
	
	//+++++++++++++++++++++++++++++++ 1) C A L E N D A R +++++++++++++++++++++++++++++++

	// * * * * * * * * * * IMG HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$(this).attr("src", "img/parallax-part-2/1_calendar.png");
			var headHeight = $('.hover-head-calendar').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-calendar').css("background-color");
			$('.hover-text-calendar').css("margin-top", headHeight + "px");
			$('.hover-text-calendar').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-calendar').css("background-color", "#fadbc4");
		},
		mouseleave: function () {
			$(this).attr("src", "img/parallax-part-1/1_calendar.png");
			$('.hover-text-calendar').css("background-color", backgroundColor);
		}
	}, ".hover-img-calendar");

	// * * * * * * * * * * HEAD HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-calendar').attr("src", "img/parallax-part-2/1_calendar.png");
			var headHeight = $('.hover-head-calendar').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-calendar').css("background-color");
			$('.hover-text-calendar').css("margin-top", headHeight + "px");
			$('.hover-text-calendar').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-calendar').css("background-color", "#fadbc4");
		},
		mouseleave: function () {
			$('.hover-img-calendar').attr("src", "img/parallax-part-1/1_calendar.png");
			$('.hover-text-calendar').css("background-color", backgroundColor);
		}
	}, ".hover-head-calendar");

	// * * * * * * * * * * TEXT HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-calendar').attr("src", "img/parallax-part-2/1_calendar.png");
			var headHeight = $('.hover-head-calendar').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $(this).css("background-color");
			$(this).css("margin-top", headHeight + "px");
			$(this).css("padding-top", (-headHeight + 10) + "px");
			$(this).css("background-color", "#fadbc4");
		},
		mouseleave: function () {
			$('.hover-img-calendar').attr("src", "img/parallax-part-1/1_calendar.png");
			$(this).css("background-color", backgroundColor);
		}
	}, ".hover-text-calendar");

	//+++++++++++++++++++++++++++++++ 2) T O P I C +++++++++++++++++++++++++++++++

	// * * * * * * * * * * IMG HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$(this).attr("src", "img/parallax-part-2/1_topic.png");
			var headHeight = $('.hover-head-topic').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-topic').css("background-color");
			$('.hover-text-topic').css("margin-top", headHeight + "px");
			$('.hover-text-topic').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-topic').css("background-color", "#fadbc4");
		},
		mouseleave: function () {
			$(this).attr("src", "img/parallax-part-1/1_topic.png");
			$('.hover-text-topic').css("background-color", backgroundColor);
		}
	}, ".hover-img-topic");

	// * * * * * * * * * * HEAD HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-topic').attr("src", "img/parallax-part-2/1_topic.png");
			var headHeight = $('.hover-head-topic').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-topic').css("background-color");
			$('.hover-text-topic').css("margin-top", headHeight + "px");
			$('.hover-text-topic').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-topic').css("background-color", "#fadbc4");
		},
		mouseleave: function () {
			$('.hover-img-topic').attr("src", "img/parallax-part-1/1_topic.png");
			$('.hover-text-topic').css("background-color", backgroundColor);
		}
	}, ".hover-head-topic");

	// * * * * * * * * * * TEXT HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-topic').attr("src", "img/parallax-part-2/1_topic.png");
			var headHeight = $('.hover-head-topic').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $(this).css("background-color");
			$(this).css("margin-top", headHeight + "px");
			$(this).css("padding-top", (-headHeight + 10) + "px");
			$(this).css("background-color", "#fadbc4");
		},
		mouseleave: function () {
			$('.hover-img-topic').attr("src", "img/parallax-part-1/1_topic.png");
			$(this).css("background-color", backgroundColor);
		}
	}, ".hover-text-topic");

	//+++++++++++++++++++++++++++++++ 3) L M S +++++++++++++++++++++++++++++++

	// * * * * * * * * * * IMG HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$(this).attr("src", "img/parallax-part-2/1_lms.png");
			var headHeight = $('.hover-head-lms').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-lms').css("background-color");
			$('.hover-text-lms').css("margin-top", headHeight + "px");
			$('.hover-text-lms').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-lms').css("background-color", "#fadbc4");
		},
		mouseleave: function () {
			$(this).attr("src", "img/parallax-part-1/1_lms.png");
			$('.hover-text-lms').css("background-color", backgroundColor);
		}
	}, ".hover-img-lms");

	// * * * * * * * * * * HEAD HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-lms').attr("src", "img/parallax-part-2/1_lms.png");
			var headHeight = $('.hover-head-lms').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-lms').css("background-color");
			$('.hover-text-lms').css("margin-top", headHeight + "px");
			$('.hover-text-lms').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-lms').css("background-color", "#fadbc4");
		},
		mouseleave: function () {
			$('.hover-img-lms').attr("src", "img/parallax-part-1/1_lms.png");
			$('.hover-text-lms').css("background-color", backgroundColor);
		}
	}, ".hover-head-lms");

	// * * * * * * * * * * TEXT HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-lms').attr("src", "img/parallax-part-2/1_lms.png");
			var headHeight = $('.hover-head-lms').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $(this).css("background-color");
			$(this).css("margin-top", headHeight + "px");
			$(this).css("padding-top", (-headHeight + 10) + "px");
			$(this).css("background-color", "#fadbc4");
		},
		mouseleave: function () {
			$('.hover-img-lms').attr("src", "img/parallax-part-1/1_lms.png");
			$(this).css("background-color", backgroundColor);
		}
	}, ".hover-text-lms");

	//+++++++++++++++++++++++++++++++ 4) E N G L I S H +++++++++++++++++++++++++++++++

	// * * * * * * * * * * IMG HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$(this).attr("src", "img/parallax-part-2/1_english.png");
			var headHeight = $('.hover-head-english').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-english').css("background-color");
			$('.hover-text-english').css("margin-top", headHeight + "px");
			$('.hover-text-english').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-english').css("background-color", "#fadbc4");
		},
		mouseleave: function () {
			$(this).attr("src", "img/parallax-part-1/1_english.png");
			$('.hover-text-english').css("background-color", backgroundColor);
		}
	}, ".hover-img-english");

	// * * * * * * * * * * HEAD HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-english').attr("src", "img/parallax-part-2/1_english.png");
			var headHeight = $('.hover-head-english').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-english').css("background-color");
			$('.hover-text-english').css("margin-top", headHeight + "px");
			$('.hover-text-english').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-english').css("background-color", "#fadbc4");
		},
		mouseleave: function () {
			$('.hover-img-english').attr("src", "img/parallax-part-1/1_english.png");
			$('.hover-text-english').css("background-color", backgroundColor);
		}
	}, ".hover-head-english");

	// * * * * * * * * * * TEXT HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-english').attr("src", "img/parallax-part-2/1_english.png");
			var headHeight = $('.hover-head-english').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $(this).css("background-color");
			$(this).css("margin-top", headHeight + "px");
			$(this).css("padding-top", (-headHeight + 10) + "px");
			$(this).css("background-color", "#fadbc4");
		},
		mouseleave: function () {
			$('.hover-img-english').attr("src", "img/parallax-part-1/1_english.png");
			$(this).css("background-color", backgroundColor);
		}
	}, ".hover-text-english");


	//+++++++++++++++++++++++++++++++ 5) T E A C H E R +++++++++++++++++++++++++++++++

	// * * * * * * * * * * IMG HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$(this).attr("src", "img/parallax-part-2/1_teacher.png");
			var headHeight = $('.hover-head-teacher').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-teacher').css("background-color");
			$('.hover-text-teacher').css("margin-top", headHeight + "px");
			$('.hover-text-teacher').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-teacher').css("background-color", "#fadbc4");
		},
		mouseleave: function () {
			$(this).attr("src", "img/parallax-part-1/1_teacher.png");
			$('.hover-text-teacher').css("background-color", backgroundColor);
		}
	}, ".hover-img-teacher");

	// * * * * * * * * * * HEAD HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-teacher').attr("src", "img/parallax-part-2/1_teacher.png");
			var headHeight = $('.hover-head-teacher').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-teacher').css("background-color");
			$('.hover-text-teacher').css("margin-top", headHeight + "px");
			$('.hover-text-teacher').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-teacher').css("background-color", "#fadbc4");
		},
		mouseleave: function () {
			$('.hover-img-teacher').attr("src", "img/parallax-part-1/1_teacher.png");
			$('.hover-text-teacher').css("background-color", backgroundColor);
		}
	}, ".hover-head-teacher");

	// * * * * * * * * * * TEXT HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-teacher').attr("src", "img/parallax-part-2/1_teacher.png");
			var headHeight = $('.hover-head-teacher').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $(this).css("background-color");
			$(this).css("margin-top", headHeight + "px");
			$(this).css("padding-top", (-headHeight + 10) + "px");
			$(this).css("background-color", "#fadbc4");
		},
		mouseleave: function () {
			$('.hover-img-teacher').attr("src", "img/parallax-part-1/1_teacher.png");
			$(this).css("background-color", backgroundColor);
		}
	}, ".hover-text-teacher");

	//+++++++++++++++++++++++++++++++ 6) T E A M +++++++++++++++++++++++++++++++

	// * * * * * * * * * * IMG HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$(this).attr("src", "img/parallax-part-2/1_team.png");
			var headHeight = $('.hover-head-team').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-team').css("background-color");
			$('.hover-text-team').css("margin-top", headHeight + "px");
			$('.hover-text-team').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-team').css("background-color", "#fadbc4");
		},
		mouseleave: function () {
			$(this).attr("src", "img/parallax-part-1/1_team.png");
			$('.hover-text-team').css("background-color", backgroundColor);
		}
	}, ".hover-img-team");

	// * * * * * * * * * * HEAD HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-team').attr("src", "img/parallax-part-2/1_team.png");
			var headHeight = $('.hover-head-team').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-team').css("background-color");
			$('.hover-text-team').css("margin-top", headHeight + "px");
			$('.hover-text-team').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-team').css("background-color", "#fadbc4");
		},
		mouseleave: function () {
			$('.hover-img-team').attr("src", "img/parallax-part-1/1_team.png");
			$('.hover-text-team').css("background-color", backgroundColor);
		}
	}, ".hover-head-team");

	// * * * * * * * * * * TEXT HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-team').attr("src", "img/parallax-part-2/1_team.png");
			var headHeight = $('.hover-head-team').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $(this).css("background-color");
			$(this).css("margin-top", headHeight + "px");
			$(this).css("padding-top", (-headHeight + 10) + "px");
			$(this).css("background-color", "#fadbc4");
		},
		mouseleave: function () {
			$('.hover-img-team').attr("src", "img/parallax-part-1/1_team.png");
			$(this).css("background-color", backgroundColor);
		}
	}, ".hover-text-team");

}());


/* ======================================================= */







 // BLUE BLOCK
 /* ======================================================= */

 (function (){
 	var backgroundColor;

 	
	// +++++++++++++++++++++++++++++++ 1) D I R E C T I O N +++++++++++++++++++++++++++++++

	// * * * * * * * * * * IMG HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$(this).attr("src", "img/parallax-part-2/2_direction.png");
			var headHeight = $('.hover-head-direction').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-direction').css("background-color");
			$('.hover-text-direction').css("margin-top", headHeight + "px");
			$('.hover-text-direction').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-direction').css("background-color", "#aae1dd");
		},
		mouseleave: function () {
			$(this).attr("src", "img/parallax-part-1/2_direction.png");
			$('.hover-text-direction').css("background-color", backgroundColor);
		}
	}, ".hover-img-direction");

	// * * * * * * * * * * HEAD HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-direction').attr("src", "img/parallax-part-2/2_direction.png");
			var headHeight = $('.hover-head-direction').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-direction').css("background-color");
			$('.hover-text-direction').css("margin-top", headHeight + "px");
			$('.hover-text-direction').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-direction').css("background-color", "#aae1dd");
		},
		mouseleave: function blue_block() {
			$('.hover-img-direction').attr("src", "img/parallax-part-1/2_direction.png");
			$('.hover-text-direction').css("background-color", backgroundColor);
		}
	}, ".hover-head-direction");

	// * * * * * * * * * * TEXT HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-direction').attr("src", "img/parallax-part-2/2_direction.png");
			var headHeight = $('.hover-head-direction').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $(this).css("background-color");
			$(this).css("margin-top", headHeight + "px");
			$(this).css("padding-top", (-headHeight + 10) + "px");
			$(this).css("background-color", "#aae1dd");
		},
		mouseleave: function () {
			$('.hover-img-direction').attr("src", "img/parallax-part-1/2_direction.png");
			$(this).css("background-color", backgroundColor);
		}
	}, ".hover-text-direction");

	// //+++++++++++++++++++++++++++++++ 2) L I G H T +++++++++++++++++++++++++++++++

	// * * * * * * * * * * IMG HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$(this).attr("src", "img/parallax-part-2/2_light.png");
			var headHeight = $('.hover-head-light').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-light').css("background-color");
			$('.hover-text-light').css("margin-top", headHeight + "px");
			$('.hover-text-light').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-light').css("background-color", "#aae1dd");
		},
		mouseleave: function () {
			$(this).attr("src", "img/parallax-part-1/2_light.png");
			$('.hover-text-light').css("background-color", backgroundColor);
		}
	}, ".hover-img-light");

	// * * * * * * * * * * HEAD HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-light').attr("src", "img/parallax-part-2/2_light.png");
			var headHeight = $('.hover-head-light').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-light').css("background-color");
			$('.hover-text-light').css("margin-top", headHeight + "px");
			$('.hover-text-light').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-light').css("background-color", "#aae1dd");
		},
		mouseleave: function () {
			$('.hover-img-light').attr("src", "img/parallax-part-1/2_light.png");
			$('.hover-text-light').css("background-color", backgroundColor);
		}
	}, ".hover-head-light");

	// * * * * * * * * * * TEXT HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-light').attr("src", "img/parallax-part-2/2_light.png");
			var headHeight = $('.hover-head-light').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $(this).css("background-color");
			$(this).css("margin-top", headHeight + "px");
			$(this).css("padding-top", (-headHeight + 10) + "px");
			$(this).css("background-color", "#aae1dd");
		},
		mouseleave: function () {
			$('.hover-img-light').attr("src", "img/parallax-part-1/2_light.png");
			$(this).css("background-color", backgroundColor);
		}
	}, ".hover-text-light");

	//+++++++++++++++++++++++++++++++ 3) H A N D +++++++++++++++++++++++++++++++

	// * * * * * * * * * * IMG HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$(this).attr("src", "img/parallax-part-2/2_hand.png");
			var headHeight = $('.hover-head-hand').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-hand').css("background-color");
			$('.hover-text-hand').css("margin-top", headHeight + "px");
			$('.hover-text-hand').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-hand').css("background-color", "#aae1dd");
		},
		mouseleave: function () {
			$(this).attr("src", "img/parallax-part-1/2_hand.png");
			$('.hover-text-hand').css("background-color", backgroundColor);
		}
	}, ".hover-img-hand");

	// * * * * * * * * * * HEAD HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-hand').attr("src", "img/parallax-part-2/2_hand.png");
			var headHeight = $('.hover-head-hand').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-question').css("background-color");
			$('.hover-text-hand').css("margin-top", headHeight + "px");
			$('.hover-text-hand').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-hand').css("background-color", "#aae1dd");
		},
		mouseleave: function () {
			$('.hover-img-hand').attr("src", "img/parallax-part-1/2_hand.png");
			$('.hover-text-hand').css("background-color", backgroundColor);
		}
	}, ".hover-head-hand");

	// * * * * * * * * * * TEXT HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-hand').attr("src", "img/parallax-part-2/2_hand.png");
			var headHeight = $('.hover-head-hand').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $(this).css("background-color");
			$(this).css("margin-top", headHeight + "px");
			$(this).css("padding-top", (-headHeight + 10) + "px");
			$(this).css("background-color", "#aae1dd");
		},
		mouseleave: function () {
			$('.hover-img-hand').attr("src", "img/parallax-part-1/2_hand.png");
			$(this).css("background-color", backgroundColor);
		}
	}, ".hover-text-hand");

	//+++++++++++++++++++++++++++++++ 4) D O C U M E N T+++++++++++++++++++++++++++++++

	// * * * * * * * * * * IMG HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$(this).attr("src", "img/parallax-part-2/2_document.png");
			var headHeight = $('.hover-head-document').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-document').css("background-color");
			$('.hover-text-document').css("margin-top", headHeight + "px");
			$('.hover-text-document').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-document').css("background-color", "#aae1dd");
		},
		mouseleave: function () {
			$(this).attr("src", "img/parallax-part-1/2_document.png");
			$('.hover-text-document').css("background-color", backgroundColor);
		}
	}, ".hover-img-document");

	// * * * * * * * * * * HEAD HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-document').attr("src", "img/parallax-part-2/2_document.png");
			var headHeight = $('.hover-head-document').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-document').css("background-color");
			$('.hover-text-document').css("margin-top", headHeight + "px");
			$('.hover-text-document').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-document').css("background-color", "#aae1dd");
		},
		mouseleave: function () {
			$('.hover-img-edocument').attr("src", "img/parallax-part-1/2_document.png");
			$('.hover-text-document').css("background-color", backgroundColor);
		}
	}, ".hover-head-document");

	// * * * * * * * * * * TEXT HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-document').attr("src", "img/parallax-part-2/2_document.png");
			var headHeight = $('.hover-head-document').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $(this).css("background-color");
			$(this).css("margin-top", headHeight + "px");
			$(this).css("padding-top", (-headHeight + 10) + "px");
			$(this).css("background-color", "#aae1dd");
		},
		mouseleave: function () {
			$('.hover-img-document').attr("src", "img/parallax-part-1/2_document.png");
			$(this).css("background-color", backgroundColor);
		}
	}, ".hover-text-document");


	//+++++++++++++++++++++++++++++++ 5) F A C E +++++++++++++++++++++++++++++++

	// * * * * * * * * * * IMG HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$(this).attr("src", "img/parallax-part-2/2_face.png");
			var headHeight = $('.hover-head-face').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-face').css("background-color");
			$('.hover-text-face').css("margin-top", headHeight + "px");
			$('.hover-text-face').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-face').css("background-color", "#aae1dd");
		},
		mouseleave: function () {
			$(this).attr("src", "img/parallax-part-1/2_face.png");
			$('.hover-text-face').css("background-color", backgroundColor);
		}
	}, ".hover-img-face");

	// * * * * * * * * * * HEAD HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-face').attr("src", "img/parallax-part-2/2_face.png");
			var headHeight = $('.hover-head-face').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-face').css("background-color");
			$('.hover-text-face').css("margin-top", headHeight + "px");
			$('.hover-text-face').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-face').css("background-color", "#aae1dd");
		},
		mouseleave: function () {
			$('.hover-img-face').attr("src", "img/parallax-part-1/2_face.png");
			$('.hover-text-face').css("background-color", backgroundColor);
		}
	}, ".hover-head-face");

	// * * * * * * * * * * TEXT HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-face').attr("src", "img/parallax-part-2/2_face.png");
			var headHeight = $('.hover-head-face').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $(this).css("background-color");
			$(this).css("margin-top", headHeight + "px");
			$(this).css("padding-top", (-headHeight + 10) + "px");
			$(this).css("background-color", "#aae1dd");
		},
		mouseleave: function () {
			$('.hover-img-face').attr("src", "img/parallax-part-1/2_face.png");
			$(this).css("background-color", backgroundColor);
		}
	}, ".hover-text-face");

	//+++++++++++++++++++++++++++++++ 6) H E A R D +++++++++++++++++++++++++++++++

	// * * * * * * * * * * IMG HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$(this).attr("src", "img/parallax-part-2/2_heard.png");
			var headHeight = $('.hover-head-heard').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-heard').css("background-color");
			$('.hover-text-heard').css("margin-top", headHeight + "px");
			$('.hover-text-heard').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-heard').css("background-color", "#aae1dd");
		},
		mouseleave: function () {
			$(this).attr("src", "img/parallax-part-1/2_heard.png");
			$('.hover-text-heard').css("background-color", backgroundColor);
		}
	}, ".hover-img-heard");

	// * * * * * * * * * * HEAD HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-heard').attr("src", "img/parallax-part-2/2_heard.png");
			var headHeight = $('.hover-head-heard').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-heard').css("background-color");
			$('.hover-text-heard').css("margin-top", headHeight + "px");
			$('.hover-text-heard').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-heard').css("background-color", "#aae1dd");
		},
		mouseleave: function () {
			$('.hover-img-heard').attr("src", "img/parallax-part-1/2_heard.png");
			$('.hover-text-heard').css("background-color", backgroundColor);
		}
	}, ".hover-head-heard");

	// * * * * * * * * * * TEXT HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-heard').attr("src", "img/parallax-part-2/2_heard.png");
			var headHeight = $('.hover-head-heard').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $(this).css("background-color");
			$(this).css("margin-top", headHeight + "px");
			$(this).css("padding-top", (-headHeight + 10) + "px");
			$(this).css("background-color", "#aae1dd");
		},
		mouseleave: function () {
			$('.hover-img-heard').attr("src", "img/parallax-part-1/2_heard.png");
			$(this).css("background-color", backgroundColor);
		}
	}, ".hover-text-heard");

}());


 // ======================================================= 





 // PINK BLOCK
 /* ======================================================= */

 (function (){
 	var backgroundColor;

 	
	// +++++++++++++++++++++++++++++++ 1) L O C K +++++++++++++++++++++++++++++++

	// * * * * * * * * * * IMG HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$(this).attr("src", "img/parallax-part-2/3_lock.png");
			var headHeight = $('.hover-head-lock').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-lock').css("background-color");
			$('.hover-text-lock').css("margin-top", headHeight + "px");
			$('.hover-text-lock').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-lock').css("background-color", "#ffc1b6");
		},
		mouseleave: function () {
			$(this).attr("src", "img/parallax-part-1/3_lock.png");
			$('.hover-text-lock').css("background-color", backgroundColor);
		}
	}, ".hover-img-lock");

	// * * * * * * * * * * HEAD HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-lock').attr("src", "img/parallax-part-2/3_lock.png");
			var headHeight = $('.hover-head-lock').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-lock').css("background-color");
			$('.hover-text-lock').css("margin-top", headHeight + "px");
			$('.hover-text-lock').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-lock').css("background-color", "#ffc1b6");
		},
		mouseleave: function blue_block() {
			$('.hover-img-lock').attr("src", "img/parallax-part-1/3_lock.png");
			$('.hover-text-lock').css("background-color", backgroundColor);
		}
	}, ".hover-head-lock");

	// * * * * * * * * * * TEXT HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-lock').attr("src", "img/parallax-part-2/3_lock.png");
			var headHeight = $('.hover-head-lock').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $(this).css("background-color");
			$(this).css("margin-top", headHeight + "px");
			$(this).css("padding-top", (-headHeight + 10) + "px");
			$(this).css("background-color", "#ffc1b6");
		},
		mouseleave: function () {
			$('.hover-img-lock').attr("src", "img/parallax-part-1/3_lock.png");
			$(this).css("background-color", backgroundColor);
		}
	}, ".hover-text-lock");

	// //+++++++++++++++++++++++++++++++ 2) M O U S E +++++++++++++++++++++++++++++++

	// * * * * * * * * * * IMG HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$(this).attr("src", "img/parallax-part-2/3_mouse.png");
			var headHeight = $('.hover-head-mouse').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-mouse').css("background-color");
			$('.hover-text-mouse').css("margin-top", headHeight + "px");
			$('.hover-text-mouse').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-mouse').css("background-color", "#ffc1b6");
		},
		mouseleave: function () {
			$(this).attr("src", "img/parallax-part-1/3_mouse.png");
			$('.hover-text-mouse').css("background-color", backgroundColor);
		}
	}, ".hover-img-mouse");

	// * * * * * * * * * * HEAD HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-mouse').attr("src", "img/parallax-part-2/3_mouse.png");
			var headHeight = $('.hover-head-mouse').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-mouse').css("background-color");
			$('.hover-text-mouse').css("margin-top", headHeight + "px");
			$('.hover-text-mouse').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-mouse').css("background-color", "#ffc1b6");
		},
		mouseleave: function () {
			$('.hover-img-mouse').attr("src", "img/parallax-part-1/3_mouse.png");
			$('.hover-text-mouse').css("background-color", backgroundColor);
		}
	}, ".hover-head-mouse");

	// * * * * * * * * * * TEXT HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-mouse').attr("src", "img/parallax-part-2/3_mouse.png");
			var headHeight = $('.hover-head-mouse').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $(this).css("background-color");
			$(this).css("margin-top", headHeight + "px");
			$(this).css("padding-top", (-headHeight + 10) + "px");
			$(this).css("background-color", "#ffc1b6");
		},
		mouseleave: function () {
			$('.hover-img-mouse').attr("src", "img/parallax-part-1/3_mouse.png");
			$(this).css("background-color", backgroundColor);
		}
	}, ".hover-text-mouse");

	//+++++++++++++++++++++++++++++++ 3) Q U E S T I O N +++++++++++++++++++++++++++++++

	// * * * * * * * * * * IMG HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$(this).attr("src", "img/parallax-part-2/3_question.png");
			var headHeight = $('.hover-head-question').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-question').css("background-color");
			$('.hover-text-question').css("margin-top", headHeight + "px");
			$('.hover-text-question').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-question').css("background-color", "#ffc1b6");
		},
		mouseleave: function () {
			$(this).attr("src", "img/parallax-part-1/3_question.png");
			$('.hover-text-question').css("background-color", backgroundColor);
		}
	}, ".hover-img-question");

	// * * * * * * * * * * HEAD HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-question').attr("src", "img/parallax-part-2/3_question.png");
			var headHeight = $('.hover-head-question').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-question').css("background-color");
			$('.hover-text-question').css("margin-top", headHeight + "px");
			$('.hover-text-question').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-question').css("background-color", "#ffc1b6");
		},
		mouseleave: function () {
			$('.hover-img-question').attr("src", "img/parallax-part-1/3_question.png");
			$('.hover-text-question').css("background-color", backgroundColor);
		}
	}, ".hover-head-question");

	// * * * * * * * * * * TEXT HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-question').attr("src", "img/parallax-part-2/3_question.png");
			var headHeight = $('.hover-head-question').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $(this).css("background-color");
			$(this).css("margin-top", headHeight + "px");
			$(this).css("padding-top", (-headHeight + 10) + "px");
			$(this).css("background-color", "#ffc1b6");
		},
		mouseleave: function () {
			$('.hover-img-question').attr("src", "img/parallax-part-1/3_question.png");
			$(this).css("background-color", backgroundColor);
		}
	}, ".hover-text-question");

	//+++++++++++++++++++++++++++++++ 4) D O C U M E N T 2+++++++++++++++++++++++++++++++

	// * * * * * * * * * * IMG HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$(this).attr("src", "img/parallax-part-2/3_document2.png");
			var headHeight = $('.hover-head-document2').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-document2').css("background-color");
			$('.hover-text-document2').css("margin-top", headHeight + "px");
			$('.hover-text-document2').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-document2').css("background-color", "#ffc1b6");
		},
		mouseleave: function () {
			$(this).attr("src", "img/parallax-part-1/3_document2.png");
			$('.hover-text-document2').css("background-color", backgroundColor);
		}
	}, ".hover-img-document2");

	// * * * * * * * * * * HEAD HOVER * * * 2* * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-document2').attr("src", "img/parallax-part-2/3_document2.png");
			var headHeight = $('.hover-head-document2').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $('.hover-text-document2').css("background-color");
			$('.hover-text-document2').css("margin-top", headHeight + "px");
			$('.hover-text-document2').css("padding-top", (-headHeight + 10) + "px");
			$('.hover-text-document2').css("background-color", "#ffc1b6");
		},
		mouseleave: function () {
			$('.hover-img-edocument2').attr("src", "img/parallax-part-1/3_document2.png");
			$('.hover-text-document2').css("background-color", backgroundColor);
		}
	}, ".hover-head-document2");

	// * * * * * * * * * * TEXT HOVER * * * * * * * * * * 
	$(document).on({
		mouseenter: function () {
			$('.hover-img-document2').attr("src", "img/parallax-part-2/3_document2.png");
			var headHeight = $('.hover-head-document2').height();
			headHeight = (-((+headHeight) / 2));
			backgroundColor = $(this).css("background-color");
			$(this).css("margin-top", headHeight + "px");
			$(this).css("padding-top", (-headHeight + 10) + "px");
			$(this).css("background-color", "#ffc1b6");
		},
		mouseleave: function () {
			$('.hover-img-document2').attr("src", "img/parallax-part-1/3_document2.png");
			$(this).css("background-color", backgroundColor);
		}
	}, ".hover-text-document2");


}());


 // ======================================================= 


//=========================================================

//=====  А Н И М А Ц И Я   П И К Т О Г Р А М М   Т О Л Ь К О   Д Л Я   М О Б И Л Ь Н О Й   В Е Р С И И ==//


   $(document).ready(function() {
    $('.animated1').hover(
     function() {
      $(this).addClass('zoomIn1'); // Добавляем класс zoomIn1
     },
     function() {
      $(this).removeClass('zoomIn1'); // Убираем класс zoomIn1
     }
    )});
//=========================================================

