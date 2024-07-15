$(function(){
    
    $(".header .menu-btn").on("click",function(){
        $(".header .header-desktop .main_menu ul").slideToggle(400);
        $(this).toggleClass("active"); 
    });

    const tilt = $('.hero-inner').tilt({
        maxTilt:        2,
        glare:          true,
        maxGlare:       .2     
    });
})