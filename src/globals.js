/**
 * Created by Admin on 2016/2/22.
 */
var g_time = 20;//ʱ��
var g_num = 0;//��������
var btn_status=0;//����ҳ��״̬
var g_sub = 0;//�˻�����ʼ��
var distance=0;
var count = 0;//����Ϸ ������ ����
var timrOver_status=true;//ʱ�� ��/�� ����
var Award_Bg_Array = [res.bg_hadAward,res.bg_A,res.bg_B,res.bg_C,res.bg_D,res.bg_E,res.bg_escape];//�Ѿ��񽱣�һ�Ƚ������ȣ�3-5�� ��ʱ����
var btn_getArray = [res.btn_Oaward,res.btn_money,res.btn_again,res.btn_LookAward];//1-2�ȣ�3-5��,����һ�Σ��鿴��Ʒ
var btn_btn_gatArray = [res.btn_btn_award,res.btn_btn_money];//������ 1-2�ȣ�3-5��;
//var over_tk_array = [res.over_tk_a,res.over_tk_b,res.over_tk_c,res.over_tk_d,res.over_tk_e];//������������
var Red_array=[res.img_a,res.img_b,res.img_c,res.img_d];//���ͷ