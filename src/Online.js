
//首页 点击 查看 奖品 **********两个接口 1、查看奖品 2、游戏成功结束
var level = 0 ;//获奖等级 接口！ 注：level=0-->已经领过奖品     || 前端填写 不用管！level=6时，表示超时逃跑（前端填写 不用管！）
var btn = 0;//  判断是否点击升级按钮 0未点击 1点击
//获奖所得code---后台抽奖传入
var code  = "";
//首页 查奖
function onAward(){
    $.post("myPrizeServlet.action",function(data){
        var przie= eval('(' + data + ')');//alert(przie);
        switch (przie.award){
            case 0:
            {
                alert("您还没有中奖,快去参加游戏吧!");
            }
                break;
            case 1:
            {
                var game = $("#gameCanvas");
                game.css("display","none");
                var award = $("#deng1");
                award.css("display","block");
                $("#dhm_1deng").html(przie.prizecode);
            }
                break;
            case 2:
            {
                var game = $("#gameCanvas");
                game.css("display","none");
                var award = $("#deng2");
                award.css("display","block");
                $("#dhm_2deng").html(przie.prizecode);
            }
                break;
            case 3:
            {
                var game = $("#gameCanvas");
                game.css("display","none");
                var award = $("#deng3");
                award.css("display","block");
                $("#dhm_3deng").html(przie.prizecode);
            }
                break;
            case 4:
            {
                var game = $("#gameCanvas");
                game.css("display","none");
                var award = $("#deng4");
                award.css("display","block");
                $("#dhm_4deng").html(przie.prizecode);
            }
                break;
            case 5:
            {
                var game = $("#gameCanvas");
                game.css("display","none");
                var award = $("#deng5");
                award.css("display","block");
                $("#dhm_5deng").html(przie.prizecode);
            }
                break;

        }
    });

//    window.location.href="";

}

//游戏结束 所用函数接口
function goOver(){
    //alert("游戏成功!");
//    level = 000;  //******后台数据
//    $.post("selectPrizeServlet.action",function(data){//alert(data);
//        level = parseInt(data.msg);//alert("中奖类型为:"+level);
//        code = data.msgcode;//alert("中奖码为:"+code);
//	alert(level);
        cc.director.runScene(new GameOver());
    //});





}
//升级奖励
function goUp() {
    //btn=1;//点击升级按钮
    $.post("saveInfoServlet.action",{"award":level,"prizecode":code},function(data){//alert(data);
        if(data.savemsg=="error"){//alert(data.savemsg);
            alert("下手慢了，已被人领走");
        }else{//alert(code);
            switch (level) {
                case 1:
                {
                    var game = $("#gameCanvas");
                    game.css("display", "none");
                    var award = $("#ruhua");
                    award.css("display", "block");
                    $("#dhm_ruhua").html(code);
                }
                    break;
                case 2:
                {
                    var game = $("#gameCanvas");
                    game.css("display", "none");
                    var award = $("#fengjie");
                    award.css("display", "block");
                    $("#dhm_fengjie").html(code);
                }
                    break;
                case 3:
                {
                    var game = $("#gameCanvas");
                    game.css("display", "none");
                    var award = $("#longnv");
                    award.css("display", "block");
                    $("#dhm_longnv").html(code);
                }
                    break;
                case 4:
                {
                    var game = $("#gameCanvas");
                    game.css("display", "none");
                    var award = $("#cunhua");
                    award.css("display", "block");
                    $("#dhm_cunhua").html(code);
                }
                    break;
                case 5:
                {
                    var game = $("#gameCanvas");
                    game.css("display", "none");
                    var award = $("#nvshen");
                    award.css("display", "block");
                    $("#dhm_nvshen").html(code);
                }
                    break;

            }

        }
    });
}



