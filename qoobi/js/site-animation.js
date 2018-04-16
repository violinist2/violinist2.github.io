$( function() {
  $( "#lang" ).click(function() {
    $(this).toggleClass("nav-section__eng");
  });
} );
  
  
jQuery(function($) {
  $(window).scroll(function(){
      if($(this).scrollTop()>0) {
        $(".nav-section_container").css("background", "rgba(35, 35, 35, 0.5)");
      }
      else if ($(this).scrollTop()<70) {
        $(".nav-section_container").css("background", "rgb(35, 35, 35)");
        }
  });
}); 



$(document).ready(function(){
  $(".Design__slides").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
   dots: true
  });
});


//WHY Tubes?
  
   var waypoint = new Waypoint({
    element: document.getElementById("test"),
    handler: function() {
      $('#test').addClass('animated fadeInUp');
    },
     offset: "60%"
  })

  
  //PIZZA
  
  // var waypoint = new Waypoint({
  //   element: document.getElementById("pizza2"),
  //   handler: function() {
  //     $('#pizza2').addClass('animated');
  //   },
  //    offset: "60%"
  // })

  var waypoint = new Waypoint({
  element: document.getElementById('pizza2'),
  handler: function(dir) {
    $('#pizza2').addClass('animated');
  if (dir === 'down')
		$('#pizza2').addClass('Wtubes__pizza-1-2')
			
	   else
	 	 $('#pizza2').removeClass('Wtubes__pizza-1-2')
	                
  },
  offset: '55%'
})  

// var waypoint = new Waypoint({
//   element: document.getElementById('pizza2'),
//   handler: function(dir) {
// 	  $('#pizza2').addClass('animated');
//    if (dir === 'down')
// 		$('#pizza2').removeClass('Wtubes__pizza-1-2')

//     else
// 	 	 $('#pizza2').addClass('Wtubes__pizza-1-2')
    
//   },
//   offset: '20px'
// })
 
 //WTUBES
var waypoint = new Waypoint({
  element: document.getElementById('Wtubes'),
  handler: function(dir) {
    $('#Wtubes').addClass('animated');
  if (dir === 'down')
		$('#Wtubes').addClass('Wtubes__warm')
	    else
	  	 $('#Wtubes').removeClass('Wtubes__warm')
	                
   },
  offset: '70%'
})  

//  var waypoint = new Waypoint({
//    element: document.getElementById('Wtubes'),
//    handler: function(dir) {
//  	  $('#Wtubes').addClass('animated');
//     if (dir === 'down')
//  		$('#Wtubes').removeClass('Wtubes__warm')

//      else
//  	 	 $('#Wtubes').addClass('Wtubes__warm')
    
//    },
//    offset: '50px'
//  })
  
 
 
 
 //PHONE
 var waypoint = new Waypoint({
  element: document.getElementById('Explore-phone'),
  handler: function(dir) {
    $('#Explore-phone').addClass('animated');
  if (dir === 'down')
		$('#Explore-phone').addClass('Explore__text-block1')
	    else
	  	 $('#Explore-phone').removeClass('Explore__text-block1')
	                
   },
  offset: '30%'
})  


 //ARROW
 var waypoint = new Waypoint({
  element: document.getElementById('arrow'),
  handler: function(dir) {
    $('#arrow').addClass('animated');
  if (dir === 'down')
		$('#arrow').addClass('Explore__arrow')
	    else
	  	 $('#arrow').removeClass('Explore__arrow')
	                
   },
  offset: '50%'
})  


//Shteker
var waypoint = new Waypoint({
  element: document.getElementById('Shteker'),
  handler: function(dir) {
    $('#Shteker').addClass('animated');
  if (dir === 'down')
		$('#Shteker').addClass('Explore__text-block2')
	    else
	  	 $('#Shteker').removeClass('Explore__text-block2')
	                
   },
  offset: '30%'
})  

//Turntable
var waypoint = new Waypoint({
  element: document.getElementById('Explore-turntable'),
  handler: function(dir) {
    $('#Explore-turntable').addClass('animated');
  if (dir === 'down')
		$('#Explore-turntable').addClass('Explore__text-block3')
	    else
	  	 $('#Explore-turntable').removeClass('Explore__text-block3')
	                
   },
  offset: '30%'
})  

//THREE
var waypoint = new Waypoint({
  element: document.getElementById('three'),
  handler: function(dir) {
    $('#three').addClass('animated');
  if (dir === 'down')
		$('#three').addClass('Explore__3')
	    else
	  	 $('#three').removeClass('Explore__3')
	                
   },
  offset: '50%'
})  
  
//TWO
var waypoint = new Waypoint({
  element: document.getElementById('two'),
  handler: function(dir) {
    $('#two').addClass('animated');
  if (dir === 'down')
		$('#two').addClass('Explore__2')
	    else
	  	 $('#two').removeClass('Explore__2')
	                
   },
  offset: '60%'
})  

//ONE
var waypoint = new Waypoint({
  element: document.getElementById('one'),
  handler: function(dir) {
    $('#one').addClass('animated');
  if (dir === 'down')
		$('#one').addClass('Explore__1')
	    else
	  	 $('#one').removeClass('Explore__1')
	                
   },
  offset: '90%'
})  

//SIO
var waypoint = new Waypoint({
  element: document.getElementById('Sio'),
  handler: function(dir) {
    $('#Sio').addClass('animated');
  if (dir === 'down')
		$('#Sio').addClass('Design__text-two')
	    else
	  	 $('#Sio').removeClass('Design__text-two')
	                
   },
  offset: '80%'
})  

//Sio-icon
var waypoint = new Waypoint({
  element: document.getElementById('Sio-icon'),
  handler: function(dir) {
    $('#Sio-icon').addClass('animated');
  if (dir === 'down')
		$('#Sio-icon').addClass('Design__img-back')
	    else
	  	 $('#Sio-icon').removeClass('Design__img-back')
	                
   },
  offset: '60%'
})  

//phone7
var waypoint = new Waypoint({
  element: document.getElementById('phone7'),
  handler: function(dir) {
    $('#phone7').addClass('animated');
  if (dir === 'down')
		$('#phone7').addClass('iphone7')
	    else
	  	 $('#phone7').removeClass('iphone7')
	                
   },
  offset: '60%'
})  

//Blue-qoobi
var waypoint = new Waypoint({
  element: document.getElementById('qoobi-lines'),
  handler: function(dir) {
    $('#qoobi-lines').addClass('Specs_qoobi');
  if (dir === 'down')
		$('#qoobi-lines').addClass('Specs_qoobi')
	    else
	  	 $('#qoobi-lines').removeClass('Specs_qoobi')
	                
   },
  offset: '70%'
})  

//LI1
var waypoint = new Waypoint({
  element: document.getElementById('l1'),
  handler: function(dir) {
     $('#l1').addClass('App__item1');
  if (dir === 'down')
		$('#l1').addClass('App__item1')
	    else
	  	 $('#l1').removeClass('App__item1')
	                
   },
  offset: '70%'
})  

//LI2
var waypoint = new Waypoint({
  element: document.getElementById('l2'),
  handler: function(dir) {
    $('#l2').addClass('App__item2');
  if (dir === 'down')
		$('#l2').addClass('App__item2')
	    else
	  	 $('#l2').removeClass('App__item2')
	                
   },
  offset: '60%'
})  

//LI3
var waypoint = new Waypoint({
  element: document.getElementById('l3'),
  handler: function(dir) {
    $('#l3').addClass('App__item3');
  if (dir === 'down')
		$('#l3').addClass('App__item3')
	    else
	  	 $('#l3').removeClass('App__item3')
	                
   },
  offset: '60%'
})  

//LI4
var waypoint = new Waypoint({
  element: document.getElementById('l4'),
  handler: function(dir) {
    $('#l4').addClass('App__item4');
  if (dir === 'down')
		$('#l4').addClass('App__item4')
	    else
	  	 $('#l4').removeClass('App__item4')
	                
   },
  offset: '60%'
})  

//LI5
var waypoint = new Waypoint({
  element: document.getElementById('l5'),
  handler: function(dir) {
    $('#l5').addClass('App__item5');
  if (dir === 'down')
		$('#l5').addClass('App__item5')
	    else
	  	 $('#l5').removeClass('App__item5')
	                
   },
  offset: '60%'
})  

//WAVE
var waypoint = new Waypoint({
  element: document.getElementById('wave'),
  handler: function(dir) {
    $('#wave').addClass('animated');
  if (dir === 'down')
		$('#wave').addClass('Explore__wave')
	    else
	  	 $('#wave').removeClass('Explore__wave')
	                
   },
  offset: '70%'
})  
