$(document).ready(function() {
	$('.dropdown').click(function(event) {
		event.preventDefault();
    $('.dropdown').toggleClass('active');
		$('.dropdown-open').slideToggle();
	//選單開關列表
	});
	lightbox.option({
      'resizeDuration': 500,
      'wrapAround': true
    //燈箱效果
    });
  $('.top').click(function(event){
    event.preventDefault();
    $('html,body').animate({

      scrollTop: 0,
    }, 500);
    
    
  });



});

var mySwiper = new Swiper ('.swiper-container', {
// Optional parameters
direction: 'horizontal',
speed: 1000,
loop: true,
autoplay: {
  delay: 1500,
  /*使用者觸碰後依舊自動撥放*/
  disableOnInteraction: false,
},

// If we need pagination
pagination: {
  el: '.swiper-pagination',
},


// Navigation arrows
// navigation: {
//   nextEl: '.swiper-button-next',
//   prevEl: '.swiper-button-prev',
// },

// And if we need scrollbar
// scrollbar: {
//   el: '.swiper-scrollbar',
// },
})