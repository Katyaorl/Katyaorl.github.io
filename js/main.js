$(document).ready(function() {

	var body = document.body;


// minimalistic scrollspy
var lastId,
topMenu = $("#topMenu"),
topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
    	var item = $($(this).attr("href"));
    	if (item.length) { return item; }
    });


    menuItems.click(function(e){
    	var href = $(this).attr("href"),
    	offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    	$('html, body').stop().animate({ 
    		scrollTop: offsetTop
    	}, 1000);
    	e.preventDefault();
    });

    $(window).scroll(function(){

    	var fromTop = $(this).scrollTop()+topMenuHeight;

    	var cur = scrollItems.map(function(){
    		if ($(this).offset().top < fromTop)
    			return this;
    	});

    	cur = cur[cur.length-1];
    	var id = cur && cur.length ? cur[0].id : "";

    	if (lastId !== id) {
    		lastId = id;

    		menuItems
    		.parent().removeClass("active")
    		.end().filter("[href='#"+id+"']").parent().addClass("active");
    	}                   
    });





    var closeModalBtn = document.getElementById('closeModalBtn');

    closeModalBtn.onclick = function(){

    	body.classList.remove('openModal');

// body.removeChild(newImg);

}

var modalBg = document.getElementById('modalBg');

modalBg.onclick = function(){

	body.classList.remove('openModal');

}

var openMenu = document.getElementById('openMenu');
openMenu.onclick = function(){
	document.body.classList.toggle('openMenu');
} 
var closeMenu = document.getElementById('closeMenu');
closeMenu.onclick = function(){
	document.body.classList.remove('openMenu');
}


var menuOffsetTop = $('.menu').offset().top;
var menuHeight = $('.menu').height();
window.onscroll = function(){

	var bodyScrollTop = $(body).scrollTop();

	if (bodyScrollTop > menuOffsetTop) {
		body.classList.add('stickMenu');
		$('.home').css('margin-bottom', 100);
	} else{
		body.classList.remove('stickMenu');
		$('.home').css('margin-bottom', 0);
	}
}


$('.scrollTo').bind("click", function (e) {

	var anchor = $(this);

	$('html, body').stop().animate({

		scrollTop: $(anchor.attr('href')).offset().top

	}, 1000);

	e.preventDefault();

});


$('#process-tab a').click(function (e) {
	e.preventDefault()
	$(this).tab('show')
})

var imgBtn = document.getElementsByClassName('img-bg__icon');

for (var i = 0; i < imgBtn.length; i++) {

	imgBtn[i].onclick = 	function zoomImg(){

		var parentDiv = this.parentElement;

		var img = parentDiv.nextElementSibling;

		var imgSrc = img.src;

		var newImg = document.createElement('img');

		newImg.src = imgSrc;

		newImg.classList.add('zoomed');

		body.appendChild(newImg);

		body.classList.add('openModal');



		modalBg.onclick = function(){

			img.classList.remove('zoomed');

			body.classList.remove('openModal');

			newImg.parentNode.removeChild(newImg);

		}

	}
}
$(window).scroll(function() {
    $('.animateIt').each(function(){
      var elemPosition = $(this).offset().top;
      var scrollTop = $(window).scrollTop();
      if (elemPosition < scrollTop+600) {
      	$(this).addClass('animated');
        $(this).addClass($(this).data('animation'));
        
      }
    });
  });

$(window).scroll(function(){

 var elemPosition = $('.skills__colRight').offset().top;
 var scrollTop = $(window).scrollTop();

if(!$('.skills__colRight').hasClass('animated')  ){


 if (elemPosition < scrollTop+600) {
$('.skills__colRight').addClass('animated');  
$('.progressLine__blue').each(function(){

	var frameWidth = 30;
	var id = setInterval(frame, 40);
	var thisMaxWidth = $(this).attr("data-width");
	var skillsWidth = $('.skills__colRight').width();

	if (skillsWidth < 500){var frameWidth = 60}
		function frame(){

			frameWidth++; 
			if(frameWidth >= thisMaxWidth){
				return;
			}
			$('.progressLine__blue').each(function(){
				var thisMaxWidth = $(this).attr("data-width");
				if(frameWidth >= thisMaxWidth){
					return;
				}
				$(this).width(frameWidth + '%');
			});
			$('.skills__percent').each(function(){
				var thisMaxWidth = $(this).attr("data-width");
				if(frameWidth >= thisMaxWidth){
					return;
				}
				var left = frameWidth + '%'
				$(this).css('left', 'calc(' + left + ' - 28px' );
				$(this).text(frameWidth + '%');
			});
		}
	});

} 
}
});

//facts-item__number
$(window).scroll(function(){

 var elemPosition = $('.facts-item__number').offset().top;
 var scrollTop = $(window).scrollTop();

if(!$('.facts-item__number').hasClass('animated')  ){


 if (elemPosition < scrollTop+600) {

	$('.facts-item__number').addClass('animated');  

$('.facts-item__number').each(function(){

	var frameWidth = 1;
	var id = setInterval(frame, 50);
	var thisMaxNum = $(this).attr("data-num");

		function frame(){
			frameWidth++; 
			if(frameWidth >thisMaxNum){
				return;
			}
			$('.facts-item__number').each(function(){
				var thisMaxNum = $(this).attr("data-num");
				if(frameWidth > thisMaxNum){
					return;
				}
				$(this).text(frameWidth);
			});

}
});
}
}
});

});
