/**
 * Created by Administrator on 2017/9/19.
 */
//    顶部
var tops=$(".top-s");
var ul=tops.find("ul");
var ali=ul.find("li");
var ewm=$(".ewm");
$(ali[7]).mouseover(function(){
    ewm.css("display","block")
});
$(ali[7]).mouseout(function(){
    ewm.css("display","none")
});
//购物车
var car=$(".car");
var carss=$(".carss");
car.mouseenter(function(){
    car.css("display","none");
    carss.css("display","block");
});
carss.mouseleave(function(){
    car.css("display","block");
    carss.css("display","none");
});
//导航条
var ul0=$(".ul0");
var ol=ul0.find("ol");
var li=ul0.find("li");
var xiala=li.find(".xiala");
    $(li).mouseover(function(){
        if($(this).index()%2==0&&$(this).index()>0){
            $(xiala).stop().slideUp().eq($(this).index()/2-1).stop().slideDown()
                .css("border-top","4px solid #B71A21");
        }
    });
    $(li).mouseout(function(){
        $(xiala).stop().slideUp()
    });
//头像
var imgzo=$(".imgzo");
var img=imgzo.find("img");
$.each(img,function(){
    $(this).click(function(){
        var sctxl=$(".sctxl");
        var imgh=sctxl.find("img")[0];
        imgh.src=this.src
    })
});
var dianz=$(".xxk");
var dian=dianz.find("div");
$.each(dian,function(){
    var content=$(".content");
    var cttr=$(".cttr");
    var wdzl=$(".wdzl");
    var xxzl=$(".xxzl");
    var scph=$(".scph");
    $(this).click(function(){
        var crdz=$(".crdz");
        var span=crdz.find("span")[0];
        $(this).siblings().removeClass("xxkl");
        $(this).addClass("xxkl");
        if($(this).index()=="0"){
            span.innerHTML="我的资料";
            $(span).css("width","65px");
            wdzl.css("display","block");
            xxzl.css("display","none");
            scph.css("display","none");
            content.css("height","780px");
            cttr.css("height","735px");
        }else if($(this).index()=="1"){
            span.innerHTML="编辑个人资料";
            $(span).css("width","92px");
            wdzl.css("display","none");
            xxzl.css("display","block");
            scph.css("display","none");
            content.css("height","570px");
            cttr.css("height","520px");
        }else if($(this).index()=="2"){
            span.innerHTML="编辑个人资料";
            wdzl.css("display","none");
            xxzl.css("display","none");
            scph.css("display","block");
            content.css("height","650px");
            cttr.css("height","600px");
        }

    })
});























//我要提问
var newt=$(".newt");
var span=newt.find("span")[1];
var question=$(".question");
var myqustn=$(".myqustn");
$(span).click(function(){
    question.css("height","845px");
    myqustn.css("display","block")
});
//提交问题内容
var tijiao=$(".tijiao");       //提交按钮
tijiao.click(function(){
    var news=$(".news");           //问题的box 提交问题后盒子变高
    var tianjia=$(".tianjia");
    var nr=$("#nr");
    var question=$(".question");
    news.css("height","690px");
    question.css("height","945px");
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();
    tianjia.append("<div class='questions'></div>");
    $(tianjia.find(".questions")[5]).append("<div class='wen'></div>").append("<div class='wen'></div>");
    $($(tianjia.find(".questions")[5]).find("div")[0]).append("<span>Q</span>").append("<span></span>").append("<span></span>");
    $($(tianjia.find(".questions")[5]).find("div")[1]).append("<span>A</span>").append("<span></span>")
    var qust=$(tianjia.find(".questions")[5]).find("div")[0];
    $($(qust).find("span")[1]).append("<p></p>");
    $($(qust).find("span")[1]).find("p")[0].innerHTML=nr.val();
    nr.val("");
    $(qust).find("span")[2].innerHTML=year+"-"+month+"-"+day+"<a href=''>我要回复(0)</a>";

})