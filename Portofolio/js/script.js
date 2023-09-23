$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 60){
            $('.navbar').addClass("sticky");

        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //scroll
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });

    //menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });
});

//typing
var typed = new Typed(".typing",{
    strings: ["Software Developer","Full-stack Developer", "Back-End Developer", "Front-End Developer","Game Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});


var typed = new Typed(".typing-2",{
    strings: ["Software Developer","Full-stack Developer", "Back-End Developer", "Front-End Developer","Game Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});