
'use strict';
$(document).ready(function() {
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
		// img src 가져온다
		// $().attr('src');
		// $(this).attr("data-src");
	

		// modal에 src 세팅
		$('.design__modal').children('img').attr('src', $(this).attr("data-src"));
	}) 

	$('.modal__close').click(function(){
		$('.design__modal').hide();
	})


	// web
	$('.custom__slider').slick({
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

	// contact
	var $contactDesc = $('.contact__desc');
	var $contactClick = $('.contact__click-circle');
	var $contactTitle = $('.contact__title');
	
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


});



