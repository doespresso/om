console.log("init");
paceOptions = {
    ajax:true,
    restartOnRequestAfter:true,
    restartOnPushState: true
};
odometerOptions = {
  auto: true, // Don't automatically initialize everything with class 'odometer'
  selector: '.odometer', // Change the selector used to automatically find things to be animated
  duration: 5000, // Change how long the javascript expects the CSS animation to take
  theme: 'minimal', // Specify the theme (if you have more than one theme css file on the page)
//  animation: 'count' // Count is a simpler animation method which just increments the value,
                     // use it when you're looking for something more subtle.
};
//yepnope.injectCss(['http://omiscranes.ru/dev/component/switchery/switchery.css']);
yepnope.injectCss(['http://omiscranes.ru/assets/js/vendor/mmenu/src/css/jquery.mmenu.all.css']);
yepnope.injectCss(['http://omiscranes.ru/assets/js/vendor/magnific-popup/magnific-popup.css']);
yepnope.injectCss(['http://omiscranes.ru/dev/component/odometer/themes/odometer-theme-minimal.css']);
yepnope([
    {
        load:{
            'pace':'http://omiscranes.ru/assets/js/vendor/pace/pace.min.js',
            'jquery':'http://omiscranes.ru/assets/js/vendor/jquery/jquery.min.js',
//            'underscore':'http://omiscranes.ru/assets/js/vendor/underscore/underscore.min.js',
//            'backbone':'http://omiscranes.ru/assets/js/vendor/backbone/backbone.min.js',
//            'marionette':'http://omiscranes.ru/assets/js/vendor/backbone/marionette.min.js',
            'bootstrap':'http://omiscranes.ru/assets/js/vendor/bootstrap/bootstrap.min.js',
            'swiper':'http://omiscranes.ru/assets/js/vendor/swiper/swiper.min.js',
            'swiper_progress':'http://omiscranes.ru/assets/js/vendor/swiper/idangerous.swiper.progress.min.js',
            'odometer':'http://omiscranes.ru/dev/component/odometer/odometer.min.js',
            'espy':'http://omiscranes.ru/dev/component/espy/dist/jquery.espy.min.js',
//            'social_snap':'http://omiscranes.ru/assets/js/app/social-snap.js',
//            'switchery':'http://omiscranes.ru/assets/js/vendor/switchery/switchery.min.js',
            'mmenu':'http://omiscranes.ru/assets/js/vendor/mmenu/src/js/jquery.mmenu.min.all.js',
            'lightbox':'http://omiscranes.ru/assets/js/vendor/magnific-popup/jquery.magnific-popup.min.js',
//            'calc':'http://omiscranes.ru/assets/js/app/calc.js',
        },
        callback:{
            'pace':function (url, result, key) {
                console.log("pace");
            },
            'jquery':function (url, result, key) {
                console.log("jquery loaded");
                $(document).ready(function(){

//social

//social

                    console.log("ready");
                    $(".show-callback").on("click",function(e){
                        e.preventDefault();
                        $("#callback-panel").fadeToggle(300);
                    });
                    $("#callback-form #my_tel").on("focus",function(){
                        console.log("focus");
                        $(this).removeClass("animated bounce");
                    });
                    $("#callback-form").on("submit",function(e){
                        e.preventDefault();
                        var form = $(this);
                        var ftel = form.find("#my_tel");
                        var tel = ftel.val();
                        if (tel.length<9) {
                            console.log(tel,"wrong");
                            ftel.addClass("animated bounce");
                        } else {
                        $.ajax({
                          type: "POST",
                          data: form.serialize(),
//                          dataType: "html",
                          url: form.attr("action"),
                          beforeSend: function() {
                              $("#callback-panel .overlay").fadeIn();
                          },
                          success: function(response) {
                              $("#callback-panel .overlay").fadeOut();
                              console.log("sent");
                              console.log(response);
                              if (response==''){
                                  $("#callback-panel #result").html("Спасибо!<br/>Мы перезвоним Вам на номер <b>"+tel+"</b>.");
                                  $("#callback-panel").addClass("done").delay(3000).fadeOut(2000,function(){
                                      $(this).removeClass("done");
                                      $("#callback-form #my_tel").val("");
                                  });
                              }
                          },
                        });
                    }
                    });
                });
            },
            'social_snap':function (url, result, key){
                $("footer").socialsnap();
            },
            'bootstrap':function (url, result, key) {
                console.log("bootstrap");
            },
            'espy':function (url, result, key) {
                console.log("elspy");
                $("section").espy(function(entered, state){
                    if (entered){
//                        setTimeout(function(){
                                $(this).find(".show-me").addClass("show-on bounce");
//                                $(this).css("background-color","red");
//                            },1000);
                        console.log("section----enter",$(this).attr("id"));
                    }
                },{
                    offset:-200
                });
//                $("#top-wrapper").espy(function(entered, state){
//                    if (entered){
                        setTimeout(function () {
                            $("#cranes-count").fadeIn();
                            $("#top-wrapper .rus").fadeIn();
                            $('#cranes-count').html('745');
//                            od.update(752);
                        }, 2000);
//                    }
//                },{
//                    offset:-100
//                });
            },

            'odometer':function (url, result, key) {
//                od = new Odometer({
//                  el: $('#cranes-count')[0],
//                  duration:500,
//                  format: '',
//                  theme: 'minimal',
//                  animation:'simple'
//                });


//                odometerOptions = { auto: false };
//                var odometer = new Odometer({
//                    el:$('#cranes-count')[0],
//                    value:3000,
//
//                });
//                odometer.render();
//                var el = $('#cranes-count')[0];
//                $('#cranes-count').html('1500');
//                od = new Odometer({
//                  el: el,
//                  value: 3335,
//                  format: '',
//                  theme: 'default'
//                });

//                od.update(555)
//                el.innerHTML = 555
            },
//            'switchery':function (url, result, key) {
//                console.log("switch");
//                var swelem = document.querySelector('#switcher1');
//                var switcher = new Switchery(swelem);
//            },
            'lightbox':function (url, result, key) {
                console.log("lightbox");
                $('#gallery').magnificPopup({
                    delegate:'a',
                    type:'image',
                    gallery:{
                        enabled:true,
                        preload:[0, 2],
                        navigateByImgClick:true,
                        arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
                        tPrev:'назад', // title for left button
                        tNext:'вперед', // title for right button
                        tCounter:'<span>%curr% из %total%</span>' // markup of counter
                    },
                    image:{
                        titleSrc:'title'
                    },
                    mainClass:'mfp-fade',
                    removalDelay:300,
                });
                $('.zoom').magnificPopup({
                    type:'image',
                    image:{
                        titleSrc:'title'
                    },
                    mainClass:'mfp-fade',
                    removalDelay:300,
                });
            },
            'mmenu':function (url, result, key) {
                console.log("menu");

                $("#feedback").mmenu({
                   isMenu:false,
                   position:"right",
                   zposition:"front"
                })
                    .on(
                    "opened.mm",
                    function () {
                        console.log("feedback open");
                        $( "#feedback-body" ).load( "http://omiscranes.ru/form.html" );
                    }
                ).on(
                    "closed.mm",
                    function () {
                        console.log("feedback closed");
                    }
                );

                $('#mmenu').mmenu({
//                    moveBackground:true,
                        position:"right",
//                        zposition:"front",
                        isMenu:true,
                        counters:false,
                        classes:"mm-firm",
//                    slidingSubmenus: false
                        labels:{
//                        fixed:true,
//                        collapse:true
                        },
                        onClick:{
                            setSelected:true,
//                            preventDefault:true
                        }
                    },
                    {
                        listClass:"menu-list",
                        selectedClass:"active",
//                       labelClass     : "Label",
//                       panelClass     : "Panel",
                    }
                );
//                    .on(
//                      "opened.mm",
//                      function()
//                      {
//                         $("#show-mmenu").addClass("opened");
//                      })
//                    .on(
//                                          "closed.mm",
//                                          function()
//                                          {
//                                             $("#show-mmenu").removeClass("opened");
//                                          });
            },
            'swiper':function () {
                "use strict";

console.log("swiper");


                var Hd_swiper = new Swiper('#scroll-slider', {
//                    slidesPerView:'auto',
                    watchActiveIndex:true,
                    speed:1500,
                    loop:true,
                    mode:'horizontal',
                    calculateHeight:true,
                    mousewheelControl:false,
                    keyboardControl:true,
                    paginationClickable:true,
                    pagination:'#scroll-swiper-pagination',
                    autoplay:10000,
                });




                var F_swiper = new Swiper('#foto-slider', {
//                    slidesPerView:'auto',
                    watchActiveIndex:true,
                    speed:500,
                    loop:false,
                    mode:'horizontal',
//                    calculateHeight:true,
                    mousewheelControl:true,
                    keyboardControl:true,
                    paginationClickable:true,
//                    pagination:'#foto-swiper-pagination',
                    autoplay:10000,
//                    oninit : function(swiper) {
//                      console.log("init++");
//                    }
                    onSlideChangeStart: function(){
                      console.log(F_swiper.activeIndex);
                      $("#foto-list a.active").removeClass('active');
                      $("#foto-list a").eq(F_swiper.activeIndex).addClass('active');
                    }
                });


                $("#foto-list a").each(function(index) {
                    console.log(index);
                    var link = $(this).attr("href");
                    var caption = $(this).attr("data-attr-desc");
                    var zo = $(this).attr("data-attr-bigimage");
                    if (typeof caption !== 'undefined') {
                        var capt = '<div class="caption">' + caption + '</div>';
                        var tcapt = caption;
                    }
                    else {
                        var capt = '';
                        var tcapt = '';
                    }
                    if (typeof zo !== 'undefined') {
                        var zoom = '<a class="zoom" href="'+zo+'" alt="Увеличить" title="'+tcapt+'"></a>';
                    }
                    else {
                        var zoom = '';
                    }
                    var newSlide = F_swiper.createSlide('<div class="slide-wrapper" style="background-image: url('+link+');">'+capt+zoom+'</div>', 'swiper-slide', 'div');
                    newSlide.append();

                });
                F_swiper.reInit();
                F_swiper.swipeTo(0);
                $("#foto-list a").eq(0).addClass('active');

                $("#foto-list a").on('touchstart mousedown',function(e){
                  e.preventDefault()
                  $("#foto-list a.active").removeClass('active')
                  $(this).addClass('active')
                    F_swiper.swipeTo( $(this).index() )
                })
                $("#foto-list a").click(function(e){
                  e.preventDefault()
                })




//                var Adv_swiper = new Swiper('#advantages-slider', {
//                    slidesPerView:'auto',
//                    watchActiveIndex:true,
//                    speed:2000,
//                    loop:true,
//                    mode:'horizontal',
//                    calculateHeight:true,
//                    mousewheelControl:false,
//                    keyboardControl:true,
//                    paginationClickable:true,
//                    pagination:'#advantages-swiper-pagination',
//                    autoplay:7000,
//                });


//                    $(s_next).on('click', function (e) {
//                        e.preventDefault()
//                        swipers[index].swipePrev()
//                    });
//                    $(s_prev).on('click', function (e) {
//                        e.preventDefault()
//                        swipers[index].swipeNext()
//                    });


            },
        }
    },

]


);