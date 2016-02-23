/**
 * Created by Admin on 2016/2/23.
 */
var GameMain = cc.Scene.extend({
    BarWidth:0,
    BarHeight:0,
    onEnter:function(){
        this._super();
        this.addChild(new GameMainLayer());
    }
});

var GameMainLayer = cc.Layer.extend({
    redG:null,
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        this._super();
        var self = this;

        this.UI();
        this.onPlay();
        this.onShow();//��Ϸ����
        this.img_a();

        this.scheduleUpdate();

    },

    UI:function(){
        var overBg = new cc.Sprite(res.bg_main);
        overBg.attr({
            x:cc.winSize.width/2,
            y:cc.winSize.height/2
        });
        this.addChild(overBg);
//������ ����
        var TX = new cc.Sprite(res.img_text);
        TX.attr({
            x:cc.winSize.width*0.14,
            y:cc.winSize.height*0.67,
            anchorX:0.5,
            anchorY:0.5
        });
        this.addChild(TX);

        var prDn = new cc.Sprite(res.img_prDn);
        prDn.attr({
            x:cc.winSize.width*0.02,
            y:cc.winSize.height*0.34,
            anchorX:0,
            anchorY:0
        });
        this.addChild(prDn);

        var prUp = self.ProUp = new cc.Sprite(res.img_prUp);
        prUp.attr({
            x:cc.winSize.width*0.02+4.2,y:cc.winSize.height*0.34+3,
            anchorX:0,
            anchorY:0,
            scaleX:1,
            scaleY:1
        });
        var size_loadingBar = self.ProUp.getContentSize();
        self.BarWidth = size_loadingBar.width;
        self.BarHeight = size_loadingBar.height;

        this.addChild(prUp);

        var fu = self.fu=new cc.Sprite(res.img_fu);
        fu.attr({x:cc.winSize.width*0.06,y:cc.winSize.height*0.36,anchorX:0.5,anchorY:0.5});

        this.addChild(fu);

    },

    onPlay : function(){
        cc.log("==onPlay clicked");
        this.schedule(function() {//ʱ��--
            g_time--;
            this.label1.setString(g_time);
            this.label2.setString(g_num);

            g_num = g_num - g_sub;

            if(g_time == 0) {
                cc.eventManager.removeListeners(cc.EventListener.TOUCH_ONE_BY_ONE);//ɾ�����ж�㴥�ؼ���
                this.unscheduleAllCallbacks();
                timrOver_status = false;//û�гɹ� level=6;
                goOver();//2s��������
            }
        },1);
        //******************************��Ϊ���㴥��

        var listener4 = cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan:function(touch,event){
                var target=event.getCurrentTarget(); //��ȡ�¼����󶨵�target
                //��ȡ��ǰ����������ڰ�ť����λ�õ�����
                var locationInNode=target.convertToNodeSpace(touch.getLocation());
                var s=target.getContentSize();
                var rect=cc.rect(0,0, s.width, s.height);
                if(cc.rectContainsPoint(rect,locationInNode)) {       //�жϴ������Ƿ��ڰ�ť��Χ��
                    // target.opacity=100;//����Ƿ��ɫ �Ƿ�͸��
                    // _num=2;
                    cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y+"num..."+g_num);

                    return true;
                }
                return false;
            },
            onTouchMoved:function(touch,event) {                 //�������������ڣ����Խ��뵽 ����ƶ�ҳ��
                var target = event.getCurrentTarget();
                var delta = touch.getDelta();
                distance = delta.y;//��ȡ����
            },
            onTouchEnded: function (touch, event){
                var target = event.getCurrentTarget();
                //    target.setOpacity(255);//��ɫ����
                if(distance>5) {
                    distance = 0;
                    g_num++;
                    target.changeGaiTou();
                }else if(distance<-1){ //���»� sub
                    distance=0;
                    g_num--;
                    target.changeGaiTou();
                }
            }
        });
        cc.eventManager.addListener(listener4,this);//�����Ļ
    },
    changeGaiTou: function () {
        this.label2.setString(g_num);
        var large = 0;
        cc.log("g_num.." + g_num);
        if (g_num < 0) {
            g_num = 0;

        }
    },
    onShow:function(){
        this.label1 = cc.LabelTTF.create(g_time,"ʱ��", 20);
        this.label2 = cc.LabelTTF.create("0","Ǯ��", 20);
        this.label1.setColor(cc.color(255,255,255));
        this.label2.setColor(cc.color(255,255,255));
        this.label1.attr({
            x:cc.winSize.width/4+35,
            y:cc.winSize.height-45,
            visible:false
        });
        this.label2.attr({
            x:cc.winSize.width/1.3+32,
            y:cc.winSize.height-45,
            visible:false
        });
        this.addChild(this.label1,2);
        this.addChild(this.label2,2);
    },
    img_a: function () {
        this.removeChild(this.redG,true);//ɾ��

        this.redG = new cc.Sprite(Red_array[0]);
        this.redG.attr({x:cc.winSize.width/2+5,y:cc.winSize.height/2-25});
        this.addChild(this.redG,3);
    },
    img_b: function () {
        this.removeChild(this.redG,true);//ɾ��

        this.redG = new cc.Sprite(Red_array[1]);
        this.redG.attr({x:cc.winSize.width/2+1,y:cc.winSize.height/2-25});

        this.addChild(this.redG,3);
    },
    img_c: function () {
        this.removeChild(this.redG,true);//ɾ��


        this.redG = new cc.Sprite(Red_array[2]);
        this.redG.attr({x:cc.winSize.width/2+1,y:cc.winSize.height/2-24});

        this.addChild(this.redG,3);
    },
    //img_d: function () {
    //
    //    this.removeChild(this.redG,true);//ɾ��
    //
    //    this.redG = new cc.Sprite(Red_array[3]);
    //    this.redG.attr({x:cc.winSize.width/2+5,y:cc.winSize.height/2-20});
    //
    //    this.addChild(this.redG,3);
    //},
    update: function () {
        var change = g_num-count;
        count = g_num;
        if(g_num==25||g_num>25){
            self.ProUp.setTextureRect(cc.rect(0,0,self.BarWidth,self.BarHeight));

            self.fu.setPositionY(675);

            var aaa= self.fu.y;
            cc.log("y!!!!..."+aaa);

        }else{
            var percent= ((count*4)/100);
//            cc.log("%..."+percent);
//        self.ProUp.scaleY=percent;
            self.ProUp.setTextureRect(cc.rect(0,self.BarHeight-percent*self.BarHeight-10,self.BarWidth,percent*self.BarHeight+10));
            self.fu.setPositionY(self.fu.y+change*13.7);
//            self.fu.setPositionY(675);

            var aaa= self.fu.y;
            cc.log("y!!!!..."+aaa);

        }

        this.TestNum();//�жϸ�ͷ״̬


    },
    TestNum: function () {
        if(g_num<1){
            g_sub=0;//***ע�� ��ʽ����ʱ 1��2��3��5
            this.img_a();

        }else if(g_num<15){
            g_sub=1;//***ע�� ��ʽ����ʱ 1��2��3��5

            this.img_b();

        }else if(g_num<20){
            g_sub=1;//***ע�� ��ʽ����ʱ 1��2��3��5

            this.img_c();
//                this.img_b();

        }else if(g_num<25){
            g_sub=1;//***ע�� ��ʽ����ʱ 1��2��3��5

            this.img_d();
//                this.img_b();

        }else{

            //   alert(g_time+".....goOver....."+"g_num..."+g_num);

            this.unscheduleAllCallbacks();


            goOver();//2s��������

        }
        //С��0 ֹͣ��ʱ��
        if(g_num-1<0){
            g_sub=0;
        }
    }
});