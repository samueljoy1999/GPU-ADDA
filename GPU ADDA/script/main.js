//logic for slideshow
$(function(){
    var slideIndex = 0;
    showSlides();
    function showSlides() {
    var slides = $(".slides");
    for (var i = 0; i < slides.length; i++) {
        $(slides[i]).css("display","none");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    $(slides[slideIndex-1]).css("display","block");
    setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
})