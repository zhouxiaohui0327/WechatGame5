
//��ҳ ��� �鿴 ��Ʒ **********�����ӿ� 1���鿴��Ʒ 2����Ϸ�ɹ�����
var level = 0 ;//�񽱵ȼ� �ӿڣ� ע��level=0-->�Ѿ������Ʒ     || ǰ����д ���ùܣ�level=6ʱ����ʾ��ʱ���ܣ�ǰ����д ���ùܣ���
var btn = 0;//  �ж��Ƿ���������ť 0δ��� 1���
//������code---��̨�齱����
var code  = "";
//��ҳ �齱
function onAward(){
    $.post("myPrizeServlet.action",function(data){
        var przie= eval('(' + data + ')');//alert(przie);
        switch (przie.award){
            case 0:
            {
                alert("����û���н�,��ȥ�μ���Ϸ��!");
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

//��Ϸ���� ���ú����ӿ�
function goOver(){
    //alert("��Ϸ�ɹ�!");
//    level = 000;  //******��̨����
//    $.post("selectPrizeServlet.action",function(data){//alert(data);
//        level = parseInt(data.msg);//alert("�н�����Ϊ:"+level);
//        code = data.msgcode;//alert("�н���Ϊ:"+code);
//	alert(level);
        cc.director.runScene(new GameOver());
    //});





}
//��������
function goUp() {
    //btn=1;//���������ť
    $.post("saveInfoServlet.action",{"award":level,"prizecode":code},function(data){//alert(data);
        if(data.savemsg=="error"){//alert(data.savemsg);
            alert("�������ˣ��ѱ�������");
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



