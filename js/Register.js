/*手机号*/
function Mobile() {
    var MobInput=document.getElementById("MobInput").value;
    reg1=/^1[3,4,5,8]\d{9}$/;
    if (reg1.test(MobInput)){
        var MobP=document.getElementById("MobP");
        MobP.innerHTML="验证正确";
        MobP.style.color="green"
        return true
    }else {
        var MobP=document.getElementById("MobP");
        MobP.innerHTML="验证错误";
        MobP.style.color="red"
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
/*登录密码*/
function Denma(){
    var Denma=document.getElementById("Denma").value;
    if(Denma.length>=6){
        var Den=document.getElementById("Den");
        Den.innerHTML="正确";
        Den.style.color="green";
        return true
    }else{
        var Den=document.getElementById("Den");
        Den.innerHTML="您的输入有误，密码不得少于6位";
        Den.style.color="red";
        return false
    }

}
//确认密码 --------------------------------
function Zinput(){
    var Denma=document.getElementById("Denma").value;
    var Zinput=document.getElementById("Zinput").value;
    if(Denma==Zinput){
        var Zspan=document.getElementById("Zspan");
        Zspan.innerHTML="正确";
        Zspan.style.color="green";
        return true
    }else{
        var Zspan=document.getElementById("Zspan");
        Zspan.innerHTML="确认您输入的密码,是否一至";
        Zspan.style.color="red";
        return false
    }

}


function btn() {
   var s1=Mobile();
    var s2=Denma();
    var s3=Zinput();
    if (s1&&s2&&s3){
        window.open('index.html','_self');
    }else {
        alert("信息不正确，请重新输入")
    }
}










