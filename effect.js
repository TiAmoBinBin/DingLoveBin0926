$(window).load(function () {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});
$('document').ready(function () {
    var vw;
    $('.pigcake').fadeOut('fast');
    $('.heart').fadeOut('fast');
    $(window).resize(function () {
        vw = $(window).width() / 2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
          $('#b11').animate({top: 240, left: vw - vw/1}, 500);  
          $('#b22').animate({top: 240, left: vw - vw/1.5}, 500);
          $('#b33').animate({top: 240, left: vw - vw/3}, 500);  
          $('#b44').animate({top: 240, left: vw - vw/10}, 500); 
          $('#b55').animate({top: 240, left: vw + vw/6}, 500);  
          $('#b66').animate({top: 240, left: vw + vw/2}, 500);  
          $('#b77').animate({top: 240, left: vw + vw/1.3}, 500);
    });

    $('#turn_on').click(function () {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
	$('.firework').fadeOut('slow');
        $(this).fadeOut('slow').delay(5000).promise().done(function () {
            $('#play').fadeIn('slow');
        });
    });

    var audio1, audio2, audio3, audio4; 
    vw = $(window).width() / 2;
    console.log(vw,$(window).width());
    var time = 6000;
    $('#play').click(function () {
        audio1 = $('.song')[0];
        audio1.play();
	$('.picfly1').animate({left: -vw}, 15000);
	$('.picfly2').delay(5000).animate({left: -vw}, 12000);
	$('.picfly3').delay(9000).animate({left: -vw}, 12000);
	$('.picfly4').delay(13000).animate({left: -vw}, 12000);
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('backgroud-color', '#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(18000).promise().done(function () {
            $('#play2').fadeIn('slow');
        });
    });
    $('#play2').click(function () {
        audio2 = $('.song1')[0];
        audio1.pause();
        audio2.play();
	$('.picfly1').fadeOut('fast');
	$('.picfly2').fadeOut('fast');
	$('.picfly3').fadeOut('fast');
	$('.picfly4').fadeOut('fast');
	$('.picflyS').animate({left: -2*vw}, 15000);
	$('.picfly6').delay(5000).animate({left: -2*vw}, 15000);
	$('.picfly7').delay(9000).animate({left: -2*vw}, 15000);
	$('.picfly8').delay(13000).animate({left: -2*vw}, 15000);
        $(this).fadeOut('slow').delay(20000).promise().done(function () {
            $('#play3').fadeIn('slow');
        });
    });

    $('#play3').click(function () {
        audio3 = $('.song2')[0];
        audio2.pause();
        audio3.play();
	$('.picflyS').fadeOut('fast');
	$('.picfly6').fadeOut('fast');
	$('.picfly7').fadeOut('fast');
	$('.picfly8').fadeOut('fast');
        $(this).fadeOut('slow').delay(time).promise().done(function () {
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function () {
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(time).promise().done(function () {
            $('#balloons_flying').fadeIn('slow');
        });
    });

    function loopOne() {
        var randleft = vw*2 * Math.random();
        var randtop = 500 * Math.random();
        $('#b1').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopOne();
        });
    }

    function loopTwo() {
        var randleft = vw*2 * Math.random();
        var randtop = 500 * Math.random();
        $('#b2').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopTwo();
        });
    }

    function loopThree() {
        var randleft = vw*2 * Math.random();
        var randtop = 500 * Math.random();
        $('#b3').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopThree();
        });
    }

    function loopFour() {
        var randleft = vw*2 * Math.random();
        var randtop = 500 * Math.random();
        $('#b4').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopFour();
        });
    }

    function loopFive() {
        var randleft = vw*2 * Math.random();
        var randtop = 500 * Math.random();
        $('#b5').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopFive();
        });
    }

    function loopSix() {
        var randleft = vw*2 * Math.random();
        var randtop = 500 * Math.random();
        $('#b6').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopSix();
        });
    }

    function loopSeven() {
        var randleft = vw*2 * Math.random();
        var randtop = 500 * Math.random();
        $('#b7').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopSeven();
        });
    }

    $('#balloons_flying').click(function () {
        $('.balloon-border').animate({top: -1.1vw}, 8000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();

        $(this).fadeOut('slow').delay(12000).promise().done(function () {
            $('#cake_fadein').fadeIn('slow');
        });
    });

    $('#cake_fadein').click(function () {
        $('.pigcake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function () {
            $('#light_candle').fadeIn('slow');
        });
    });

    $('#wish_message').click(function () {
	vw = $(window).width()/2;

        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b1').attr('id', 'b11');
        $('#b2').attr('id', 'b22')
        $('#b3').attr('id', 'b33')
        $('#b4').attr('id', 'b44')
        $('#b5').attr('id', 'b55')
        $('#b6').attr('id', 'b66')
        $('#b7').attr('id', 'b77')
      $('#b11').animate({top: 280, left: vw - vw/1.1}, 500);
      $('#b22').animate({top: 280, left: vw - vw/1.7}, 500);
      $('#b33').animate({top: 280, left: vw - vw/3}, 500);
      $('#b44').animate({top: 280, left: vw - vw/10}, 500);
      $('#b55').animate({top: 280, left: vw + vw/6}, 500);
      $('#b66').animate({top: 280, left: vw + vw/2.5}, 500);
      $('#b77').animate({top: 280, left: vw + vw/1.5}, 500);
        $('.balloons').css('opacity', '0.95');
        $('.balloons h2').fadeIn(3000);
        $(this).fadeOut('slow').delay(5000).promise().done(function () {
            $('#story').fadeIn('slow');
        });
    });

    $('#story').click(function () {
        $(this).fadeOut('slow');
        $('.pigcake').fadeOut('fast').promise().done(function () {
            $('.message').fadeIn('slow');
        });

        var i;
        function msgLoop(i) {
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(1200).promise().done(function () {
                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(1500);
                if (i == 31) {
                    $("p:nth-child(31)").fadeOut('slow').promise().done(function () {
                        $('.heart').fadeIn('fast');
   			$('#play4').fadeIn('slow');			
                    });
                }
                else {
                    msgLoop(i);
                }

            });
            // body...
        }

        msgLoop(0);        
        
    });

    $('#play4').click(function () {
        audio4 = $('.song4')[0];
        audio3.pause();
        audio4.play();
	$('.firework').fadeIn('slow');
        $(this).fadeOut('slow').delay(time).promise().done(function () {});
    }); //end play4

}); //end document


//alert('hello');
