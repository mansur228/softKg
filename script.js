$(document).ready(function() {


    const anchors = document.querySelectorAll('a[href^="#"]')

    for(let anchor of anchors) {
        anchor.addEventListener("click", function(e) {
            e.preventDefault()
            const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
            document.querySelector(goto).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    }

    var nav = $("nav"),
        header = $("header").innerHeight();
    var scrollOffset = $(window).scrollTop();

    /* Fixed Heder */
    checkScroll(scrollOffset);

    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset){
         if( scrollOffset >= header){
            nav.addClass("fixed");
        }else{
            nav.removeClass("fixed");
        }
    }
});