/**
 * Created by lx on 2017/6/16.
 */
var logg;
$(document).on('mousemove',function () {
        var url=window.location.href;
        var nba=url.lastIndexOf('/')
        var ss=url.slice(nba+1,url.length);
        logg=ss;

        // console.log(logg);
        if(logg=="service"){
            $('footer').css('display','none');
        }else{
            $('footer').css('display','block');
        }
});

$(document).scroll(function (event) {
    // if(logg=='service'){return}

    if($(document).scrollTop()>0){
        $('header').css({'background':'white','box-shadow':'2px 2px 2px #333'});

        $('.logo').css('background-image','url(./img/ratuo_logo.png)');
        $('.tel').css('color','#6bc22b ');
        $('.main_header .nav li a').css('color','black ').addClass('on');

    }else{
        $('header').css({'background':'transparent ','box-shadow':'none'});
        $('.logo').css('background-image','url(./img/ratuo_logow.png) ');
        $('.tel').css('color','#FFF ');
        $('.main_header .nav li a').css('color','#FFF ').removeClass('on');


    }


});

