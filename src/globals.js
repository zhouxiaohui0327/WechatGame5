/**
 * Created by Admin on 2016/2/22.
 */
var g_time = 20;//时间
var g_num = 0;//滑动次数
var btn_status=0;//规则页面状态
var g_sub = 0;//退化数初始化
var distance=0;
var count = 0;//主游戏 进度条 数据
var timrOver_status=true;//时间 是/否 用完
var Award_Bg_Array = [res.bg_hadAward,res.bg_A,res.bg_B,res.bg_C,res.bg_D,res.bg_E,res.bg_escape];//已经获奖，一等奖，二等，3-5等 超时逃跑
var btn_getArray = [res.btn_Oaward,res.btn_money,res.btn_again,res.btn_LookAward];//1-2等，3-5等,再玩一次，查看奖品
var btn_btn_gatArray = [res.btn_btn_award,res.btn_btn_money];//升级后 1-2等，3-5等;
//var over_tk_array = [res.over_tk_a,res.over_tk_b,res.over_tk_c,res.over_tk_d,res.over_tk_e];//升级界面文字
var Red_array=[res.img_a,res.img_b,res.img_c,res.img_d];//红盖头