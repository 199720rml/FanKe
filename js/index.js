$(function(){

    //选项卡
    /*console.log($("#ul .on"));
    $("#ul .on").each(function(){
        console.log($(this));
        $(this).on('mouseenter',function(){
            console.log($(this).children('ol'));
            $(this).siblings().children('ol').css('display','none')
            $(this).children('ol').css('display','block');
        })

    })*/
    $("#ul .on").mouseover(function () {
        //$(this).find('.ol').stop().slideUp(200);
        //$(".on").eq($(this).index());
        $(".on .ol").stop().hide().eq($(this).index()).stop().show();
    }).mouseout(function(){
        $(".on .ol").stop().hide()
    });

    $(".start-nav li").click(function () {
        $(".start-nav li").eq($(this).index()).addClass("colors").siblings().removeClass('colors');
        $(".start-nav li").eq($(this).index()).find("a").addClass("colors-a").parent().siblings().find("a").removeClass('colors-a');
        $(".start-nav li").eq($(this).index()).find("p").addClass("trans").parent().siblings().find("p").removeClass('trans');
        $(".shirt-one").hide().eq($(this).index()).show();
        $(".content-c").hide().eq($(this).index()).show();
    })

    //轮播图

    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', //  方向
        loop: true, //  循环轮播
         autoplay:true,
        speed: 2000,
        effect: 'fade',
        paginationClickable:true,//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        mousewheelControl: true, //是否开启鼠标控制Swiper切换。
        //设置为true时，能使用鼠标滚轮控制slide滑动。

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

    });



    //购物车
    $(".search-top p").mouseenter(function(){
        $(this).addClass("hover");
        $(this).find("a").css({
            color:"#c1383e"
        })
        $(this).find("span").css({
            color:"#c1383e"
        });
        $(".search-pro").css("display","block");
    }).mouseleave(function(){
        $(this).removeClass("hover");
        $(this).find("a").css({
            color:""
        })
        $(this).find("span").css({
            color:""
        });
        $(".search-pro").css("display","none");
    });



    //回到顶部
    $(".top a").click(function(){
        //var sc=$(window).scrollTop();
        $('body,html').animate({scrollTop:0},30);
    })

    $(".fix").click(function(){
        //var sc=$(window).scrollTop();
        $('body,html').animate({scrollTop:0},30);
    })



    //放大镜
    $(".small-img").mousemove(function(e){
        e= e||window.event;
        //console.log($(".deta-left")[0].offsetLeft);
        //console.log(l);
        //console.log($(".left")[0].offsetWidth);
        var l= e.pageX-this.offsetLeft-$(".mark")[0].offsetWidth/2;
        var t= e.pageY-this.offsetTop-$(".mark")[0].offsetHeight/2;
        //console.log(l);
        console.log(t);
        if(l<0){
            l=0;
        }else if(l>=this.offsetWidth-$(".mark")[0].offsetWidth){
            l=this.offsetWidth-$(".mark")[0].offsetWidth;
        }
        if(t<0){
            t=0;
        }else if(t>=this.offsetHeight-$(".mark")[0].offsetHeight){
            t=this.offsetHeight-$(".mark")[0].offsetHeight;
        }
        $(".mark").css("left",l+"px");
        $(".mark").css("top",t+"px");

        var L=l/($(".small-img")[0].offsetWidth-$(".mark")[0].offsetWidth)*($(".big")[0].offsetWidth-$(".big img")[0].offsetWidth);
        var T=t/($(".small-img")[0].offsetHeight-$(".mark")[0].offsetHeight)*($(".big")[0].offsetHeight-$(".big img")[0].offsetHeight);

        $(".big img").css("left",L+"px");
        $(".big img").css("top",T+"px");
    }).mouseover(function(){
        $(".mark").css("display","block");
        $(".big").css("display","block");
    }).mouseout(function(){
        $(".mark").css("display","none");
        $(".big").css("display","none");
    });

    //鼠标点击

    $(".left-img ul li span").click(function(){
        $(this).css({
            border: "1px solid #a10000"
        }).parent().siblings().find("span").css("border","");
        $(this).parent().css({
            border: "1px solid #a10000"
        }).siblings().css("border","");
        $(".big img").attr("src",$(this).attr("srcs"));
        $(".small-img img").attr("src",$(this).attr("src"));
    })




    //倒计时

    function time(n) {
        return n >= 0 && n < 10 ? '0' + n : n;
    }
    function times() {
        var date = new Date();

        var oldTime = date.getTime();
        //    console.log(oldTime);
        var date1 = new Date('2017/12/21 18:00:00')
        var newTime = date1.getTime();
        var s = (newTime - oldTime) / 1000;
        var day = Math.floor(s / 86400);
        s=s % 86400;
        var hours = Math.floor(s / 3600);
        s=s % 3600;
        var minutes = Math.floor(s / 60);
        s = Math.floor(s % 60);
        var str = '';
        str = time(day)+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;' + time(hours)+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+ time(s);
        var oSpan = document.getElementById('time');
        //var oSpan = oBox.getElementsByTagName('span')[0];
        oSpan.innerHTML = str;
    }
    times();
    setInterval(times);

});



$(function () {
    $.ajax({
        type:"post",
        url:"data.como.json",
        dataType:"json",
        success:function (res) {
            console.log(qqq)
            $(res).each(function () {
                var ul=$("<ul>");
                var li=$("<li>");
                $("<a>").append($("<img>")).attr("src",this.comoImg).appendTo(li);
li.appendTo(ul);
ul.appendTo("#shirt-d")
            })
        }
    })
})

