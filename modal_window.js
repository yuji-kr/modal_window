$(function(){
	
	$(".modalOpen").click(function(){
		
		var navClass = $(this).attr("class"),
            href = $(this).attr("href");
			
        if(href === "#modal02") {
        $(href).children(".inner").css("animation","modal 0.5s forwards");
        }
        $(href).fadeIn();
		$(this).addClass("open");
		return false;
	});
	
	$(".modalClose").click(function(){
      
      var parentsID = $(this).parents(".modal").attr("id");
      
      if(parentsID === "modal02") {
        $(this).parents(".modal").children(".inner").css("animation","modalClose 0.5s forwards");
      }
      
      $(this).parents(".modal").fadeOut();
      $(".modalOpen").removeClass("open");
      return false;
	});  
    
});