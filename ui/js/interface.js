$(document).ready(function(){
    $("#generic-planet").click(function(){
        alert("You have clicked on the not-so-special planet!");
    });

    $("#navDiv2frame-pro").hide();
    $("#navDiv2frame-roc").hide();
    $("#navDiv3left-arrow-image").hide();
    $("#navDiv3right-arrow-image").hide();
    $("#button-upload-hover").hide();
    $("#upload-box").hide();
    $("#upload-biography-text").hide();
    $("#upload-summary-text").hide();
    $("#upload-projects-text").hide();
    $('#cross-hairs').hide();
    $('#toggle-slide-frame').hide();

  $("#label-link-bio").click(function(){
    $("#navDiv2frame-pro").hide();
    $("#navDiv2frame-roc").hide();
    $("#navDiv2frame-bio").show();
    $("#navDiv3left-arrow-image").fadeOut();
    $("#navDiv3right-arrow-image").fadeOut();
  });

  var proj = 1;
  $("#label-link-pro").click(function(){
    
    $("#navDiv2frame-bio").hide();
    $("#navDiv2frame-roc").hide();
    $("#navDiv2frame-pro").show();
    $("#project-image1").show();
    $("#project-image2").hide();
    $("#project-image3").hide();
    $("#navDiv3left-arrow-image").fadeIn();
    $("#navDiv3right-arrow-image").fadeIn();
  }); 
  $("#navDiv3right-arrow-image").click(function(){
  console.log(proj);
    $("#project-image" + proj).hide();
    if (proj < 3){
    proj = proj + 1;  
    }else{
    proj = 1
    }
    $("#project-image" + proj).show();    
  });
  
   $("#navDiv3left-arrow-image").click(function(){
    $("#project-image" + proj).hide();
    if (proj > 1){
    proj = proj - 1;
    }else{
    proj = 3;
    }
    $("#project-image" + proj).show();      
  });


  $("#label-link-roc").click(function(){
    $("#navDiv2frame-bio").hide();
    $("#navDiv2frame-pro").hide();
    $("#navDiv2frame-roc").show();
    $("#navDiv3left-arrow-image").fadeOut();
    $("#navDiv3right-arrow-image").fadeOut();
  });

    $("#button-upload").mouseenter(function(){
        $("#button-upload-normal").hide();
        $("#button-upload-hover").show();
  });
    $("#button-upload").mouseleave(function(){
        $("#button-upload-normal").show();
        $("#button-upload-hover").hide();
  });
    $("#button-upload").click(function(){
        $("#upload-box").fadeIn();
  });
    $("#upload-box-close").click(function(){
        $("#upload-box").fadeOut();
        $("#upload-biography-text").slideUp();
        $("#upload-summary-text").slideUp();
        $("#upload-projects-text").slideUp();
  });
    $("#upload-biography-title").click(function(){
        $("#upload-biography-text").slideToggle();
  });
    $("#upload-summary-title").click(function(){
        $("#upload-summary-text").slideToggle();
  });
    $("#upload-projects-title").click(function(){
        $("#upload-projects-text").slideToggle();
  });
    $("#button-search").mouseenter(function(){
        $("#button-search-normal").hide();
        $("#button-search-hover").show();
  });
    $("#button-search").mouseleave(function(){
        $("#button-search-normal").show();
        $("#button-search-hover").hide();
  });
    $("#button-search").click(function(){
        $("#search-box").fadeIn();
  });
    $("#opening-bar").click(function(){
        $("#toggle-slide-frame").slideToggle();
  });

$("#navDiv2center-bio").click(function(){

    var bioinfo = prompt("Write an example please");

    if(bioinfo != "")
    {
        $("#label-center-bio").text(bioinfo);
    }
    
  });

});

  var Xmovement = -1000;
  var Ymovement = -1000;
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
    $("#z-index-first-stars").css("margin-left",''+Xmovement+"px");
    $("#z-index-second-stars").css("margin-left",''+(Xmovement*2)+"px");
    $("#z-index-first-stars").css("margin-top",''+Ymovement+"px");
    $("#z-index-second-stars").css("margin-top",''+(Ymovement*2)+"px");
});

$(document).on('mousemove', function(e){
    $('#cross-hairs').fadeIn();
    $('#cross-hairs').css({
       left:  e.pageX,
       top:   e.pageY
    });
});