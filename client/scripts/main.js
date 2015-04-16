//Navigate menu

$(document).ready(function () {
    'use strict';
    $(".fixed-menu").click(function () {
        $(".menu-navigator, .menu-exit").fadeToggle(500);
        });
    $(".menu-navigator a, .menu-exit").click(function () {
        $(".menu-navigator, .menu-exit").fadeToggle(500);
    });
    });


//DT Switcher

    $(document).ready(function () {
        'use strict';
        $("#1-dt").click(function(){
            $(".second, .third").hide();
        });

        $("#1-dt").click(function(){
            $(".first").show();
        });
        $("#2-dt").click(function(){
            $(".first, .third").hide();
        });

        $("#2-dt").click(function(){
            $(".second").show();
        });
        $("#3-dt").click(function(){
            $(".second, .first").hide();
        });

        $("#3-dt").click(function(){
            $(".third").show();
        });
    });


 //Mail
    $(document).ready(function () {
        'use strict';
        $(".send-form").click(function () {
            $(".send-mail").fadeToggle("slow");
        });
        $("#exit").click(function () {
            $(".send-mail").fadeToggle(800);
        });

        $('.view').click(function(){
            var id = $('#profile-1');
            $('#profile-1').fadeToggle('slow');
        });
        $('#close').click(function(){
            $('#profile-1').fadeToggle('slow');
        });
    });


