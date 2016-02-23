var res = {
    bg : "res/bg.jpg",
    loaderSprite_png : "res/bg_loading.jpg",
    processUp_png   :   "res/jdt1.png",
    playBtn : "res/playBtn.png",
    ruleBtn : "res/ruleBtn.png",
    jiangpin : "res/jiangpin.png",
    bg_guide : "res/bg_guide.jpg",
    bg_rule : "res/rule.jpg",
    img_hand : "res/hand.png",
    bg_main  : "res/Main_bg.jpg",
    btn_LookAward   :   "res/LookAward.jpg",//查看奖品
    btn_again       :  "res/again.jpg",//再玩一次
    btn_money       :  "res/money.jpg",//获取 3，4，5等奖
    btn_Oaward      :  "res/Oaward.jpg",//领取奖品1，2
    btn_btn_money   : "res/btn_money.jpg",//升级钱 3 4 5
    btn_btn_award   : "res/btn_aeward.jpg",//升级奖品 1 2
    bg_hadAward     :   "res/over_finish.jpg",//已经获过奖 level=0
    bg_A            :   "res/over_A.jpg",//一等奖                  1
    bg_B            :   "res/over_B.jpg",//二等奖                  2
    bg_C            :   "res/over_C.jpg",//3等奖
    bg_D            :   "res/over_D.jpg",//4等奖                3,4,5
    bg_E            :   "res/over_E.jpg",//5等奖                3,4,5//             3,4,5
    bg_escape       :   "res/over_escape.jpg",//超时 未获奖

    img_a           :   "res/gt1.png",
    img_b           :   "res/gt2.png",
    img_c           :   "res/gt3.png",
    img_d           :   "res/gt4.png",
    img_text : "res/text.png",//进度条文字
    img_prDn : "res/pDn.png",//主游戏界面进度条底座
    img_prUp : "res/pUp.png",//主游戏界面进度条
    img_fu  : "res/fu.png"//进度条圆圈圈
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
