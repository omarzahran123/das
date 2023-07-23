$(document).ready(function () {
    $('.dropdown').hover(function () {
            $(this).toggleClass('open');            
        }
    );
        $('.blob-help').hide();
    $('.basket-card').hover(function () {
            $('.basket-blob').toggle(250);
            $('.basket').toggle()
        }
    );
        $('.file-card').hover(function () {
            $('.file-blob').toggle(250);
            $('.file').toggle()
        });
        $('.speedometer-card').hover(function () {
            $('.speedometer-blob').toggle(250);
            $('.speedometer').toggle()
        });
        $('.globe-card').hover(function () {
            $('.globe-blob').toggle(250);
            $('.globe').toggle()
        });
        $('.grey').hide()
        $('.port-text-container').hide()
        $('.port1').hover(function () {
            $($(this)).find($('.ptc1').toggle())
            $($(this)).find($('.grey1').fadeToggle(250))
        }
        );
        $('.port2').hover(function () {
            $($(this)).find($('.ptc2').toggle())
            $($(this)).find($('.grey2').fadeToggle(250))
        }
        );
        $('.port3').hover(function () {
            $($(this)).find($('.ptc3').toggle())
            $($(this)).find($('.grey3').fadeToggle(250))
        }
        );
        $('.port4').hover(function () {
            $($(this)).find($('.ptc4').toggle())
            $($(this)).find($('.grey4').fadeToggle(250))
        }
        );
        $('.port5').hover(function () {
            $($(this)).find($('.ptc5').toggle())
            $($(this)).find($('.grey5').fadeToggle(250))
        }
        );
        $('.port6').hover(function () {
            $($(this)).find($('.ptc6').toggle())
            $($(this)).find($('.grey6').fadeToggle(250))
        }
        );
        $('.port7').hover(function () {
            $($(this)).find($('.ptc7').toggle())
            $($(this)).find($('.grey7').fadeToggle(250))
        }
        );
        $('.port8').hover(function () {
            $($(this)).find($('.ptc8').toggle())
            $($(this)).find($('.grey8').fadeToggle(250))
        }
        );
        $('.port9').hover(function () {
            $($(this)).find($('.ptc9').toggle())
            $($(this)).find($('.grey9').fadeToggle(250))
        }
        );
        $('.port-all-but').click(function () { 
            $('.port-all-but').addClass('port-active');
            $('.port-card-but').removeClass('port-active');
            $('.port-app-but').removeClass('port-active');
            $('.port-web-but').removeClass('port-active');
            $('.port-card').show();
            $('.app').show();
            $('.web').show();
        });
        $('.port-web-but').click(function () { 
            $('.port-all-but').removeClass('port-active');
            $('.port-card-but').removeClass('port-active');
            $('.port-app-but').removeClass('port-active');
            $('.port-web-but').addClass('port-active');
            $('.web').show();
            $('.port-card').hide();
            $('.app').hide();
        });
        $('.port-card-but').click(function () { 
            $('.port-all-but').removeClass('port-active');
            $('.port-card-but').addClass('port-active');
            $('.port-app-but').removeClass('port-active');
            $('.port-web-but').removeClass('port-active');
            $('.port-card').show();
            $('.app').hide();
            $('.web').hide();
        });
        $('.port-app-but').click(function () { 
            $('.port-all-but').removeClass('port-active');
            $('.port-card-but').removeClass('port-active');
            $('.port-app-but').addClass('port-active');
            $('.port-web-but').removeClass('port-active');
            $('.port-card').hide();
            $('.web').hide();
            $('.app').show();
        });
});