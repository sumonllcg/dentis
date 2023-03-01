$(window).scroll(function(){
	var scrll = $(window).scrollTop();

	if (scrll >= 92) {
        $('.header_menu_bottom').addClass('padd-kom');
	}else {
      $('.header_menu_bottom').removeClass('padd-kom');
	}
});

$(document).ready(function(){

    $('.mebu-bar').click(function(){
        $('.all-off-canvas-menu').slideToggle(500);
    });

    $('.mebu-bar').click(function(){
        $('.mebu-bar').toggleClass('mebu_bar');
    });

	    // accrodient-area-start here
    $('.acc-head').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).siblings('.acc-content').slideUp(1000);
            $(this).removeClass('active');

        } else {
            $('.acc-content').slideUp();
            $('.acc-head').removeClass('active');
            $(this).siblings('.acc-content').slideToggle(1000);
            $(this).toggleClass('active');
        }
    });

});