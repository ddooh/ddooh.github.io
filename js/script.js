
'use strict';

$(document).ready(function() {
	// navbar

	var $navItem = $('.nav__item');
    $navItem.click(function(e){
        e.preventDefault();
        var link = $(this).children('a').attr('data-link');
        var $target = $(link);
        var distance = $target.offset().top;
        $('html, body').animate({scrollTop: distance});
        $('.nav__container').removeClass('visible');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })

	$('.header__btn').click(function(){
		$('.nav__sub-item').toggleClass('visible');
	})
	

	var $navItem = $('.nav__item-list');
    $navItem.click(function(e){
        e.preventDefault();
        var link = $(this).children('a').attr('data-link');
        var $target = $(link);
        var distance = $target.offset().top;
        $('html, body').animate({scrollTop: distance});
        $('.nav__sub-item').removeClass('visible');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })


	// my skills
	var $pline = $('.progressbar.line');
	var $pcircle = $('.progressbar.circle');
	$pline.each(function(i) {
		var line = new ProgressBar.Line(this, {
			strokeWidth: 6,
			trailWidth: 6,
			duration: 3000,
			easing: 'easeInOut',
			text: {
				style: {
					color: 'inherit',
					position: 'absolute',
					right: '0',
					top: '-30px',
					padding: 0,
					margin: 0,
					transform: null
				},
				autoStyleContainer: false
			},
			step: function(state, line, attachment) {
				line.setText(Math.round(line.value() * 100) + ' %');
			}
		});
		var value = ($(this).attr('data-value') / 100);
		$pline.waypoint(function() {
			line.animate(value);
		}, {
			offset: "100%"
		})
	});
	$pcircle.each(function(i) {
		var circle = new ProgressBar.SemiCircle(this, {
			strokeWidth: 5,
			trailWidth: 5,
			duration: 2000,
			easing: 'easeInOut',
			step: function(state, circle, attachment) {
				circle.setText(Math.round(circle.value() * 100));
			}
		});
		var value = ($(this).attr('data-value') / 100);
		$pcircle.waypoint(function() {
			circle.animate(value);
		}, {
			offset: "100%"
		})
	});

	// design

	$('.design-container__box').slick({
        dots:true,
        autoplay: false,
        autoplaySpeed: 2000,
    });
    
    $('.design__modal').hide();
	// 모달 보여준다
	// 버튼을 클릭했을때
	$('.design__item-button').click(function(){
		$('.design__modal').show();
		$('.design__modal').children('img').attr('src', $(this).attr("data-src"));
		$('.overlay').show();
	}) 
	$('.overlay').click(function(){
		$(this).hide();
	});
	
	$('.modal__close').click(function(){
		$('.design__modal').hide();
	})
	

	// web
	$('.custom__slider').slick({
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
		/* dots: true,
		infinite: true,
		// speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1, */
    });

	// web modal

	$('.web__modal').hide();
	$('.web__item-button').click(function(){
		$('.web__modal').show();
		$('.web__modal').children('img').attr('src', $(this).attr("data-src"));
		$('.web__overlay').show();
	}) 
	$('.web__overlay').click(function(){
		$(this).hide();
	});
	
	$('.web__modal__close').click(function(){
		$('.web__modal').hide();
	})
	

	// contact
	var $contactDesc = $('.contact__desc');
	var $contactClick = $('.contact__click-circle');
	var $contactTitle = $('.contact__title');
	var $contactArrow = $('.contact__arrow')
	
	$contactDesc.hide();
	$contactClick.click(function(){

		// 타이틀이 나타나있는 상태
		if( $contactTitle.is(':visible')){
			$contactTitle.hide();	
			$contactDesc.slideToggle(); 
		// 타이틀이 숨겨진 상태
		}else{
			$contactTitle.slideToggle();	
			$contactDesc.hide(); 
		}
	})
	$contactArrow.show();
	$contactClick.click(function(){
		$contactArrow.toggleClass('rotate');
	})

	// scrollup

	var skillsDistance = $('#about').offset().top;
    var $scrollUp = $('.scrollup');
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if( scrollTop > skillsDistance ){
            $scrollUp.addClass('visible');
        }else{
            $scrollUp.removeClass('visible');
        }
    })
    $scrollUp.click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 0});
    })
});



