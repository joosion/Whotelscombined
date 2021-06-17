$(document).ready(function () {

    $('#fullpage').fullpage({
        navigation: true,
        afterLoad: function (origin, destination, direction) {
            var loadedSection = this;
            var b =('body')
            //using index
            if ($(b).hasClass("fp-viewing-0")) {
                $('.nav').stop().animate({
                    opacity: "0",}, 500)}
            if ($(b).hasClass("fp-viewing-1")) {
                console.log("true")
                $(".back").stop().animate({
                    "top": "-6px",
                }, 600)
                $('.nav').stop().animate({
                    opacity: "0",}, 500)
                $(".front").stop().animate({
                    "bottom": "-11px",
                }, 600)}else{
                    $(".back").stop().animate({
                        "top": "-1000px",
                    }, 600)
                    $(".front").stop().animate({
                        "bottom": "-1000px",
                    }, 600)
                }
                $(".top").stop().animate({
                    "top": "-1000px",
                }, 600)
                $(".left").stop().animate({
                    "bottom": "-1000px",
                }, 600)
                
            if ($(b).hasClass("fp-viewing-2")) {
                // $('.nav').stop().animate({
                //     opacity: "1",}, 500) 
                $(".back").stop().animate({
                    "top": "-1000px",
                }, 600)
                $('.nav').stop().animate({
                    opacity: "0",}, 500)
                $(".front").stop().animate({
                    "bottom": "-1000px",
                }, 600)}

                if ($(b).hasClass("fp-viewing-3")) {
                    $('.nav').stop().animate({
                            opacity: "0",})
                    $(".top").stop().animate({
                        "top": "0px",
                    }, 600)
                    $('.nav').stop().animate({
                        opacity: "0",}, 500)
                    $(".left").stop().animate({
                        "bottom": "0px",
                    }, 600)}else{
                        $(".top").stop().animate({
                            "top": "-1000px",
                        }, 600)
                        $(".left").stop().animate({
                            "bottom": "-1000px",
                        }, 600)
                    }    
                if ($(b).hasClass("fp-viewing-4")) {
                    $(".con4mcenter").stop().animate({
                        "top": "0px",
                    }, 600)
                    $(".con4mleft").stop().animate({
                        "bottom": "0px",
                    }, 600)   
                    $(".con4mright").stop().animate({
                        "bottom": "0px",
                    }, 600)
                    $('.nav').stop().animate({
                        opacity: "0",}, 500)}
                    
                    else{
                        $(".con4mcenter").stop().animate({
                            "top": "-1000px",
                        }, 600)
                        $(".con4mleft").stop().animate({
                            "bottom": "-1000px",
                        }, 600)   
                        $(".con4mright").stop().animate({
                            "bottom": "-1000px",
                        }, 600)}
                if ($(b).hasClass("fp-viewing-5")) {
                    $(".top").stop().animate({
                        "top": "-1000px",
                    }, 600)
                    $(".left").stop().animate({
                        "bottom": "-1000px",
                    }, 600)
                    $('.nav').stop().animate({
                        opacity: "1",}, 500)
                    $('.nav .main').stop().animate({
                        opacity: "1",}, 500)
                    $('.nav .sub').stop().animate({
                        opacity: "0",}, 500)    
        
                    $('.nav .box').stop().animate({
                        "width":"240px",
                        "top": "-10px",
                        "height":"240px",
                    },500)} 
                if ($(b).hasClass("fp-viewing-6")) {
                    $('.nav').stop().animate({
                        opacity: "1",}, 500)
                    $('.nav .main').stop().animate({
                        opacity: "1",}, 500)
                    $('.nav .sub').stop().animate({
                        opacity: "0",}, 500)    
                    $('.nav .box').stop().animate({
                        "width":"240px",
                        "top": "210px",
                        "height":"220px",
                    },500)} 
                if ($(b).hasClass("fp-viewing-7")) {
                    $('.nav').stop().animate({
                        opacity: "1",}, 500)
                    $('.nav .main').stop().animate({
                        opacity: "1",}, 500)
                    $('.nav .sub').stop().animate({
                        opacity: "0",}, 500)
                    $('.nav .box').stop().animate({
                        "width":"240px",
                        "top": "420px",
                        "height":"220px",
                    },500)} 
                if ($(b).hasClass("fp-viewing-8")) {
                    $('.nav').stop().animate({
                        opacity: "1",}, 500)
                    $('.nav .main').stop().animate({
                        opacity: "0",}, 500)
                    $('.nav .sub').stop().animate({
                        opacity: "1",}, 500)
                    $('.nav .box').stop().animate({
                        "width":"160px",
                        "top": "-10px",
                        "height":"180px",
                    },500)}
                if ($(b).hasClass("fp-viewing-9")) {
                    $('.nav').stop().animate({
                        opacity: "1",}, 500)
                    $('.nav .main').stop().animate({
                        opacity: "0",}, 500)
                    $('.nav .sub').stop().animate({
                        opacity: "1",}, 500)
                    $('.nav .box').stop().animate({
                        "width":"160px",
                        "top": "150px",
                        "height":"170px",
                    },500)}
                if ($(b).hasClass("fp-viewing-10")) {
                    $('.nav').stop().animate({
                        opacity: "1",}, 500)
                    $('.nav .main').stop().animate({
                        opacity: "0",}, 500)
                    $('.nav .sub').stop().animate({
                        opacity: "1",}, 500)
                    $('.nav .box').stop().animate({
                        "width":"160px",
                        "top": "255px",
                        "height":"160px",
                    },500)}
                if ($(b).hasClass("fp-viewing-11")) {
                    $('.nav').stop().animate({
                        opacity: "1",}, 500)
                    $('.nav .main').stop().animate({
                        opacity: "0",}, 500)
                    $('.nav .sub').stop().animate({
                        opacity: "1",}, 500)
                    $('.nav .box').stop().animate({
                        "width":"160px",
                        "top": "390px",
                        "height":"175px",
                    },500)}

        }





    })









}  )