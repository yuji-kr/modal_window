$(function(){  
    var a = $('.container'),
        b = $('.overlay'),
        c = $('.open'),
        d = $('.close'); 
  
    c.on('click',function(){
      a.fadeIn();
    });
    
    d.on('click',function(){
      a.fadeOut();
    });
    
    b.on('click',function(){
      a.fadeOut();
    });
  });