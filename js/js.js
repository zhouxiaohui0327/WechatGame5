/**
 * Created by Admin on 2016/2/23.
 */
    //JavaScript Document
//�ҵĽ�Ʒ--1�Ƚ�
$(function(){
    var w1=document.documentElement.clientWidth;
    var h1=document.documentElement.clientHeight;
    var img_h=1040*(w1/640);
    document.getElementById("bg_1deng").style.top= img_h*0+ 'px';
    document.getElementById("bg_1deng").style.left= w1*0+ 'px';
    document.getElementById("tk_1deng").style.top= img_h*0.33+ 'px';
    document.getElementById("ljfs_1deng").style.top= img_h*0.75+ 'px';
    document.getElementById("dhm_1deng").style.top= img_h*0.663+ 'px';
    document.getElementById("btn_return1").style.top= img_h*0.92+ 'px';

});

//�ҵĽ�Ʒ--2�Ƚ�
$(function(){
    var w1=document.documentElement.clientWidth;
    var h1=document.documentElement.clientHeight;
    var img_h=1040*(w1/640);
    document.getElementById("bg_2deng").style.top= img_h*0+ 'px';
    document.getElementById("bg_2deng").style.left= w1*0+ 'px';
    document.getElementById("tk_2deng").style.top= img_h*0.33+ 'px';
    document.getElementById("ljfs_2deng").style.top= img_h*0.75+ 'px';
    document.getElementById("dhm_2deng").style.top= img_h*0.663+'px';
    document.getElementById("btn_return2").style.top= img_h*0.92+ 'px';
});

//�ҵĽ�Ʒ--3�Ƚ�
$(function(){
    var w1=document.documentElement.clientWidth;
    var h1=document.documentElement.clientHeight;
    var img_h=1040*(w1/640);
    document.getElementById("bg_3deng").style.top= img_h*0+ 'px';
    document.getElementById("bg_3deng").style.left= w1*0+ 'px';
    document.getElementById("tk_3deng").style.top= img_h*0.33+ 'px';
    document.getElementById("ljfs_3deng").style.top= img_h*0.75+ 'px';
    document.getElementById("dhm_3deng").style.top= img_h*0.665+ 'px';
    document.getElementById("btn_return3").style.top= img_h*0.92+ 'px';
});

//�ҵĽ�Ʒ--4�Ƚ�
$(function(){
    var w1=document.documentElement.clientWidth;
    var h1=document.documentElement.clientHeight;
    var img_h=1040*(w1/640);
    document.getElementById("bg_4deng").style.top= img_h*0+ 'px';
    document.getElementById("bg_4deng").style.left=w1*0+ 'px';
    document.getElementById("tk_4deng").style.top= img_h*0.33+ 'px';
    document.getElementById("ljfs_4deng").style.top= img_h*0.75+ 'px';
    document.getElementById("dhm_4deng").style.top= img_h*0.663+ 'px';
    document.getElementById("btn_return4").style.top= img_h*0.92+ 'px';
});

//�ҵĽ�Ʒ--5�Ƚ�
$(function(){
    var w1=document.documentElement.clientWidth;
    var h1=document.documentElement.clientHeight;
    var img_h=1040*(w1/640);
    document.getElementById("bg_5deng").style.top= img_h*0+ 'px';
    document.getElementById("bg_5deng").style.left= w1*0+ 'px';
    document.getElementById("tk_5deng").style.top= img_h*0.33+ 'px';
    document.getElementById("ljfs_5deng").style.top= img_h*0.75+ 'px';
    document.getElementById("dhm_5deng").style.top= img_h*0.663+ 'px';
    document.getElementById("btn_return5").style.top= img_h*0.92+ 'px';
});

//����ҳ��-�廨
$(function(){
    var w1=document.documentElement.clientWidth;
    var h1=document.documentElement.clientHeight;
    var img_h=1040*(w1/640);
    document.getElementById("bg_cunhua").style.top= img_h*0+ 'px';
    document.getElementById("bg_cunhua").style.left= w1*0+ 'px';
    document.getElementById("dhm_cunhua").style.top= img_h*0.55+ 'px';
});

//����ҳ��-���
$(function(){
    var w1=document.documentElement.clientWidth;
    var h1=document.documentElement.clientHeight;
    var img_h=1040*(w1/640);
    document.getElementById("bg_fengjie").style.top= img_h*0+ 'px';
    document.getElementById("bg_fengjie").style.left= w1*0+ 'px';
    document.getElementById("dhm_fengjie").style.top= img_h*0.534+ 'px';
});

//����ҳ��-��Ů
$(function(){
    var w1=document.documentElement.clientWidth;
    var h1=document.documentElement.clientHeight;
    var img_h=1040*(w1/640);
    document.getElementById("bg_longnv").style.top= img_h*0+ 'px';
    document.getElementById("bg_longnv").style.left= w1*0+ 'px';
    document.getElementById("dhm_longnv").style.top= img_h*0.551+ 'px';
});

//����ҳ��-�绨
$(function(){
    var w1=document.documentElement.clientWidth;
    var h1=document.documentElement.clientHeight;
    var img_h=1040*(w1/640);
    document.getElementById("bg_ruhua").style.top= img_h*0+ 'px';
    document.getElementById("bg_ruhua").style.left= w1*0+ 'px';
    document.getElementById("dhm_ruhua").style.top= img_h*0.55+ 'px';
});

//����ҳ��-Ů��
$(function(){
    var w1=document.documentElement.clientWidth;
    var h1=document.documentElement.clientHeight;
    var img_h=1040*(w1/640);
    document.getElementById("bg_nvshen").style.top= img_h*0+ 'px';
    document.getElementById("bg_nvshen").style.left= w1*0+ 'px';
    document.getElementById("dhm_nvshen").style.top= img_h*0.55+ 'px';
});
//�жϿͻ��ն���ios ����android �����ֺŴ�С
var browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE�ں�
            presto: u.indexOf('Presto') > -1, //opera�ں�
            webKit: u.indexOf('AppleWebKit') > -1, //ƻ�����ȸ��ں�
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//����ں�
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //�Ƿ�Ϊ�ƶ��ն�
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios�ն�
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android�ն˻���uc�����
            iPhone: u.indexOf('iPhone') > -1 , //�Ƿ�ΪiPhone����QQHD�����
            iPad: u.indexOf('iPad') > -1, //�Ƿ�iPad
            webApp: u.indexOf('Safari') == -1, //�Ƿ�webӦ�ó���û��ͷ����ײ�
            weixin: u.indexOf('MicroMessenger') > -1, //�Ƿ�΢�� ��2015-01-22������
            qq: u.match(/\sQQ/i) == " qq" //�Ƿ�QQ
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
}

//�ж��Ƿ���iosϵͳ
if(browser.versions.gecko){
    // alert("is huohu");
    document.getElementById("dhm_1deng").style.fontSize=18+'px';
    document.getElementById("dhm_cunhua").style.fontSize=15+'px';
    document.getElementById("dhm_fengjie").style.fontSize=15+'px';
    document.getElementById("dhm_longnv").style.fontSize=15+'px';
    document.getElementById("dhm_ruhua").style.fontSize=15+'px';
    document.getElementById("dhm_nvshen").style.fontSize=15+'px';

}
//�ж��Ƿ���iosϵͳ
if(browser.versions.ios){
    //alert("is ios");
    document.getElementById("dhm_1deng").style.fontSize=17+'px';
    document.getElementById("dhm_2deng").style.fontSize=17+'px';
    document.getElementById("dhm_3deng").style.fontSize=17+'px';
    document.getElementById("dhm_4deng").style.fontSize=17+'px';
    document.getElementById("dhm_5deng").style.fontSize=17+'px';
    /*	document.getElementById("dhm_1deng").style.lineHeight=img_h*0.2+ 'px';
     document.getElementById("dhm_2deng").style.lineHeight=img_h*0.2+ 'px';
     document.getElementById("dhm_3deng").style.lineHeight=img_h*0.2+ 'px';
     document.getElementById("dhm_4deng").style.lineHeight=img_h*0.2+ 'px';
     document.getElementById("dhm_5deng").style.lineHeight=img_h*0.2+ 'px';
     */	document.getElementById("dhm_cunhua").style.fontSize=14+'px';
    document.getElementById("dhm_fengjie").style.fontSize=14+'px';
    document.getElementById("dhm_longnv").style.fontSize=14+'px';
    document.getElementById("dhm_ruhua").style.fontSize=14+'px';
    document.getElementById("dhm_nvshen").style.fontSize=14+'px';
    /*	document.getElementById("dhm_cunhua").style.lineHeight=img_h*0.2+ 'px';
     document.getElementById("dhm_fengjie").style.lineHeight=img_h*0.2+ 'px';
     document.getElementById("dhm_longnv").style.lineHeight=img_h*0.2+ 'px';
     document.getElementById("dhm_ruhua").style.lineHeight=img_h*0.2+ 'px';
     document.getElementById("dhm_nvshen").style.lineHeight=img_h*0.2+ 'px';
     */}


//�ж��Ƿ�׿ϵͳ
if(browser.versions.android){
    //alert("is android");
    document.getElementById("dhm_1deng").style.fontSize=24+'px';
    document.getElementById("dhm_2deng").style.fontSize=24+'px';
    document.getElementById("dhm_3deng").style.fontSize=24+'px';
    document.getElementById("dhm_4deng").style.fontSize=24+'px';
    document.getElementById("dhm_5deng").style.fontSize=24+'px';
    /*	document.getElementById("dhm_1deng").style.lineHeight=img_h*0.2+ 'px';
     document.getElementById("dhm_2deng").style.lineHeight=img_h*0.2+ 'px';
     document.getElementById("dhm_3deng").style.lineHeight=img_h*0.2+ 'px';
     document.getElementById("dhm_4deng").style.lineHeight=img_h*0.2+ 'px';
     document.getElementById("dhm_5deng").style.lineHeight=img_h*0.2+ 'px';
     */	document.getElementById("dhm_cunhua").style.fontSize=24+'px';
    document.getElementById("dhm_fengjie").style.fontSize=24+'px';
    document.getElementById("dhm_longnv").style.fontSize=24+'px';
    document.getElementById("dhm_ruhua").style.fontSize=24+'px';
    document.getElementById("dhm_nvshen").style.fontSize=24+'px';
    /*	document.getElementById("dhm_cunhua").style.lineHeight=img_h*0.2+ 'px';
     document.getElementById("dhm_fengjie").style.lineHeight=img_h*0.2+ 'px';
     document.getElementById("dhm_longnv").style.lineHeight=img_h*0.2+ 'px';
     document.getElementById("dhm_ruhua").style.lineHeight=img_h*0.2+ 'px';
     document.getElementById("dhm_nvshen").style.lineHeight=img_h*0.2+ 'px';
     */
}