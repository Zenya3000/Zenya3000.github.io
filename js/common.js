$(function() {
	
	$(".item").on("click", function(){
		$(".item").removeClass('active');
		$(this).addClass('active');
	})
	var activeTable = document.getElementById("table");
	var activeGrid = document.getElementById("grid");

	$(".glyph_icon").on("click", function(){
		$(".glyph_icon").removeClass('active');
		$(this).addClass('active');
		
		if($(this).attr('data-icon') == "table"){
			$(activeGrid).fadeOut();
			setTimeout(function(){
				$(activeTable).fadeIn();
			}, 200)
			
		} else {
			$(activeTable).fadeOut();
			setTimeout(function(){
				$(activeGrid).fadeIn();
			}, 200)
		}
	})

	var icons = document.getElementsByClassName('glyph_icon');

// установим обработчик события resize
$(window).resize(function(){
	var width = document.documentElement.clientWidth;
	var height = document.documentElement.clientHeight; 

	if(width <= 1240){
		$(".glyph_icon").removeClass('active');
		$('[data-icon="grid"]').addClass('active');
			$(activeTable).css('display', 'none');
			setTimeout(function(){
				$(activeGrid).fadeIn();
			}, 200)
	} else {
		if($('[data-icon="grid"]').hasClass('active')){
		} else {
			$(activeTable).fadeIn();
		}
		// $(activeTable).css('display', 'block');
		// $(activeTable).fadeIn();
		// $(activeGrid).fadeOut();
		// setTimeout(function(){
		// 	$(activeTable).fadeIn();
		// }, 200)
	}

  });
// вызовем событие resize
$(window).resize();


	$('.burger').on("click", function(){

		if($(".burger").hasClass('open')){
			$(".mob_menu").slideToggle("slow", function(){

				$(".one").css( "transform","rotate(0)");
				$(".one").css( "margin-bottom", "2px");
				$(".two").css( "opacity", "1");
				$(".three").css( "transform","rotate(0deg)");
				$(".three").css( "margin-bottom", "2px");
				$(".burger").removeClass('open');
				
			})

		} else {
			$(".mob_menu").slideToggle("slow", function(){
				$(".one").css( "transform","rotate(45deg)", "margin-bottom", "0");
				$(".one").css( "margin-bottom", "-8px");
				$(".two").css( "opacity", "0");
				$(".three").css( "transform","rotate(-45deg)", "margin-bottom", "0");
				$(".three").css( "margin-bottom", "0");
				$(".burger").addClass('open');
			})	
		}

	})

});
