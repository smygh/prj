$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>50){
            $(".t").show();
        }else{
            $(".t").hide();
        }
    })
})