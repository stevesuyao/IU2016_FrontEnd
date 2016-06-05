var sWidth = $(window).width();
var sHeight = $(window).height();

//add planets from star table using ajax call

$.getJSON( "http://52.23.91.16/cake/Stars.json", function( data ) {
  
  $.each( data.stars, function() {
   addPlanet(); 
    
  });
  console.log(data);
  initPlanets();
});



//add planets from stars table 
function addPlanet(){

$('#system').append('<div class="planet r-neg"><div class="mars"></div></div>');

}


//Give the planets different positionn, speed and a little highlight

function initPlanets(){

  //speed
  $('.planet').each(function(i){
   // $(this).addClass('r-' + (Math.floor(Math.random()*4) + 1));  //radom 1-5
   $(this).addClass('r-' + (i + 1));  //radom 1-5
  })

 //position and highlight
  $('.planet > div').each(function(i){
    $(this).css({
      'box-shadow': "0 2px rgba(255, 255, 255, 0.3) inset, 0 " + ($(this).width() / 4) + "px rgba(255, 255, 255, 0.1) inset", // highlights
      'margin-top': (90 + i * 30 ) + "px" , //radius
      'margin-left': (-100 + i * 50 ) + 'px'  // pos
    });
  });

    $('.planet').css({
    'position': 'absolute',
    'left': 0 - $('.planet').outerWidth() / 2,
    'top': 0 - $('.planet').outerHeight() / 2,
  });
}



$(window).resize(function() {

  $('.planet').css({
    'position': 'absolute',
    'left': 0 - $('.planet').outerWidth() / 2,
    'top': 0 - $('.planet').outerHeight() / 2,
  });

});

// To initially run the function:
$(window).resize();


//Create starry background
//Mult by .999 is for strange issue with scrollbars appearing sometimes on gen of stars bg
for (i = 0; i < 1000; i++) {
  rand = Math.random();
  rand2 = Math.random();
  $(".stars-bg").append('<div class="bg-star" style="top:' + sHeight * .999 * rand + 'px; left:' + sWidth * .999 * rand2 + 'px;"></div>');
}