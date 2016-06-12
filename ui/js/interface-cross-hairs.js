  var Xmovement = 0;
  var Ymovement = 0;
$(document).keydown(function(e) {

    switch(e.keyCode){
        case 37: //Left key pressed
            Xmovement++;
        break;

        case 38: //Up key pressed
            Ymovement++;
        break;

        case 39: //Right key pressed
            Xmovement--;
        break;

        case 40: //Down key pressed
            Ymovement--;
        break;
        }
    $("#z-index-first-stars").css("margin-left",''+(Xmovement*2)+"px");
    $("#z-index-second-stars").css("margin-left",''+(Xmovement*4)+"px");
    $("#z-index-first-stars").css("margin-top",''+(Ymovement*2)+"px");
    $("#z-index-second-stars").css("margin-top",''+(Ymovement*4)+"px");
});
$(document).ready(function(){
    $('#pointer').hide();

    $("#purple-world").click(function(){
        alert("Hola");
        window.location.assign("planets/purple.html");
    });
    $("#red-world").click(function(){
        window.location.assign("planets/red.html");
    });
    $("#blue-world").click(function(){
        window.location.assign("planets/blue.html");
    });
});

$(document).on('mousemove', function(e){
    $('#pointer').fadeIn();
    $('#pointer').css({
       left:  e.pageX,
       top:   e.pageY
    });
});