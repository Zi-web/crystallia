$(document).ready(function() {
  $("#cf_onclick").click(function() {
  	$("#cf2 section.main").addClass("transparent");
  });
});
 

 var updateTime=function(){newMessage.style.display="block"}
        setTimeout(updateTime,15000);
        clearTimeout(updateTime);


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