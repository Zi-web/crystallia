/**/
$(document).ready(function() {
  $("#cf_onclick").click(function() {
  	$(".content").addClass("show");
  });
});

/*
 var updateTime=function(){newMessage.style.display="block"}
        setTimeout(updateTime,15000);
        clearTimeout(updateTime);
*/

/*
var flag=false;
$(document).ready(function(){
	$('#newMessage').click(function(){
        if(flag){
            $(this).animate({
				'bottom':'-460px'
        	},1500);
            flag=false;
        }else{
			$(this).animate({
				'bottom':'0'
        	},1500);
            flag=true;
        }
	});
});
*/

/*
$(document).ready(function(){
    $("#newMessage").on("click", function(){
         $("modal-content__message").addClass("modal-content__overlay-show");
    });

});*/


$('#cf_onclick').click(function() {
	setTimeout(function(){
    $(".content__1280").addClass("line1");
  },1000);

	setTimeout(function(){
    $(".content__1280").addClass("line2");
  },2000);

  setTimeout(function(){
    $(".item1").css("opacity","1");
  },3000);

  setTimeout(function(){
    $(".item2").css("opacity","1");
  },5000);

  setTimeout(function(){
    $(".item3").css("opacity","1");
  },7000);

  setTimeout(function(){
    $(".item4").css("opacity","1");
  },9000);

  setTimeout(function(){
    $("#newMessage").css("display","block");
  },15000);

});

