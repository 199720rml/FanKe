/*普通登录*/
    Btn=document.getElementsByClassName('C-R-Btn')[0];
    Lists=Btn.getElementsByTagName('li');
    var Tbox=document.getElementById("T-box");
    Cinput=Tbox.getElementsByTagName('div');
    for(var i=0;i<Lists.length;i++) {
        Lists[i].index = i;
        Lists[i].onclick= function () {
            for (var j = 0; j < Lists.length; j++) {
                Lists[j].className = "";
                Cinput[j].id = "";
            }
            this.className = "btn-on";
            Cinput[this.index].id = "C-R-show";
        }
    }
/*表单验证*/
/*姓名*/
function yhm() {
     var Lyhms=document.getElementById("Lyhms").value;
      reg1=/^[\u4e00-\ufa59]{2,4}$/;
    if(reg1.test(Lyhms)){
       var  Lyhm=document.getElementById("Lyhm");
        Lyhm.innerHTML="输入正确";
        Lyhm.style.color="green";
        return true
    }else if (Lyhms==""){
        var  Lyhm=document.getElementById("Lyhm");
        Lyhm.innerHTML="输入不能为空";
    }else{
       var  Lyhm=document.getElementById("Lyhm");
        Lyhm.innerHTML="您的输入有误，请输入汉字2-4位";
        Lyhm.style.color="red";
        return false
    }
}
/*密码*/

function Lmas() {
    var Lmas=document.getElementById("Lmas").value;
    reg2 = /^[\w]{6,12}$/;
    if(reg2.test(Lmas)){
        var  Lma=document.getElementById("Lma");
        Lma.innerHTML="输入正确";
        Lma.style.color="green";
        return true
    }else if (Lmas==""){
        var  Lma=document.getElementById("Lma");
        Lma.innerHTML="输入不能为空";
    } else{
        var  Lma=document.getElementById("Lma");
        Lma.innerHTML="您的输入有误，请输入密码6-12位";
        Lma.style.color="red";
        return false
    }
}

function btn(){
    var i1=yhm();
    var i2=Lmas();
    if(i1&&i2){
        window.location.href = 'index.html';
    }else{
        alert("您的信息有误");
    }
}


/********************************/
function Sjh() {
    var Sjhs=document.getElementById("Sjhs").value;
    reg3=/^1[3,4,5,8]\d{9}$/;
    if(reg3.test(Sjhs)){
        var  Sjh=document.getElementById("Sjh");
        Sjh.innerHTML="输入正确";
        Sjh.style.color="green";
        return true
    }else if (Sjhs==""){
        var  Sjh=document.getElementById("Sjh");
        Sjh.innerHTML="输入不能为空";
        Sjh.style.color="red";
    }else{
        var  Sjh=document.getElementById("Sjh");
        Sjh.innerHTML="您的输入有误，请输入11位号码";
        Sjh.style.color="red";
        return false
    }
}
//设置一个全局的变量，便于保存验证码
var code;
function createCode(){
    //首先默认code为空字符串
    code = '';
    //设置长度，这里看需求，我这里设置了4
    var codeLength = 4;
    var codeV = document.getElementById('code');
    //设置随机字符
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
    //循环codeLength 我设置的4就是循环4次
    for(var i = 0; i < codeLength; i++){
        //设置随机数范围,这设置为0 ~ 36
        var index = Math.floor(Math.random()*36);
        //字符串拼接 将每次随机的字符 进行拼接
        code += random[index];
    }
    //将拼接好的字符串赋值给展示的Value
    codeV.value = code;

}
function onyzm() {
    var code=document.getElementById("code").value;
    var input=document.getElementById("input").value;
    if (code==input){
       var sps=document.getElementById("sps");
        sps.innerHTML="验证码正确";
        sps.style.color="green";
        return true
    }else {
        var sps=document.getElementById("sps");
        sps.innerHTML="验证码错误";
        sps.style.color="red";
        return false
    }
}
function validate(){
    var s1=Sjh();
    var s2=onyzm();
    if (s1&&s2){
     alert("登陆成功");
        window.open('index.html','_self');
    }else {
        alert('信息不正确，请重新输入');
    }
}

//设置此处的原因是每次进入界面展示一个随机的验证码，不设置则为空
window.onload = function (){
    createCode();
};

















































