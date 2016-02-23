/**
 * Created by Admin on 2016/2/23.
 */

var GameOver= cc.Scene.extend({
    onEnter:function(){
        this._super();
        this.addChild(new GameOverLayer());
    }
});


var GameOverLayer = cc.Layer.extend({
    No_award:1,

    ctor : function(){
        this._super();
        this.init();
    },
    init:function() {
        this._super();
        if(!timrOver_status){
//            alert("status");
            level=6;
        }
        var setX = 0;//������Xλ��
        var setY = 0;//������Yλ��
        var setVisibA = false;//�Ƿ���ʾ ��ȡ��Ʒ/�Ż�ȯ
        var setVisibB = false;//�Ƿ���ʾ again
        var chooseBtnA= null;//���ְ�ť 0��ȡ 1-2����ť��1��ȡ 3-5��ť   2������һ�Ρ�  3��ȡ���Ѿ���ȡ����ť
        var chooseBtnB = null;//���ְ�ť 0��ȡ 1-2����ť��1��ȡ 3-5��ť   2������һ�Ρ�  3��ȡ���Ѿ���ȡ����ť
        this.bg = 0;

//        alert("cocos"+level);
        if(level!=0){
            if(level==1)
            {
                setX = cc.winSize.width/2;
                setY = cc.winSize.height/9;
                setVisibA=true;
                setVisibB=true;
                chooseBtnA=0;
                chooseBtnB=2;
                this.bg=1;
            }else if(level==2)
            {
                setX = cc.winSize.width/2;
                setY = cc.winSize.height/9;
                setVisibA=true;
                setVisibB=true;
                chooseBtnA=0;
                chooseBtnB=2;
                this.bg=2;
            }else if(level==3)
            {
                setX = cc.winSize.width/2;
                setY = cc.winSize.height/9;
                setVisibA=true;
                setVisibB=true;
                chooseBtnA=1;
                chooseBtnB =2;
                this.bg=3;
            }else if(level==4)
            {
                setX = cc.winSize.width/2;
                setY = cc.winSize.height/9;
                setVisibA=true;
                setVisibB=true;
                chooseBtnA=1;
                chooseBtnB =2;
                this.bg=4;
            }else if(level==5)
            {
                setX = cc.winSize.width/2;
                setY = cc.winSize.height/9;
                setVisibA=true;
                setVisibB=true;
                chooseBtnA=1;
                chooseBtnB =2;
                this.bg=5;
            }else if(level==6)
            {//ʧ��
                setX = cc.winSize.width/2-120;
                setY = cc.winSize.height/9-45;
                setVisibB=true;//btn_again
                chooseBtnB=2;// btn_again ��ͼƬ ΪchooseBtn+1
                this.bg=6;
            }
        }else{//�����
            setX = cc.winSize.width/2+120;
            setY = cc.winSize.height/9+15;
            setVisibA=true;
            chooseBtnA=3;
            this.bg=0;
        }

        var setXBB = setX-120;
        var setXB = setX+120;
        //����
        this.overBg = new cc.Sprite(Award_Bg_Array[this.bg]);
        this.overBg.attr({x:cc.winSize.width/2,y:cc.winSize.height/2});
        this.addChild(this.overBg);

        //�����˵�
        this.menu = new cc.Menu;
        this.menu.setPosition(cc.p(0,0));

        //again
        var btn_again=cc.MenuItemImage.create(btn_getArray[chooseBtnB],null,this.onAgain,this);
        btn_again.attr({x:setXB,y:setY,visible:setVisibB});
        this.menu.addChild(btn_again);

        //getAward  or lookAward
        var btn_getAward = cc.MenuItemImage.create(btn_getArray[chooseBtnA],null,this.onGet,this);
        btn_getAward.attr({x:setXBB,y:setY,visible:setVisibA});
        this.menu.addChild(btn_getAward);
        this.addChild(this.menu);


    },
    onGet: function () {
        if( this.bg==0){
//            alert(  this.bg);
            onAward();
        }else{
            if(this.No_award==1){
                this.No_award=5;
                goUp();

            }

        }
    },
    onAgain: function () {
        //������ ��ʼ��
        timrOver_status=true;
        g_num=0;
        g_time=20;
        level=0;
        count = 0;
//        this.removeAllChildrenWithCleanup(true);
        this.removeChild(this.menu,true);
        this.removeChild(this.overBg,true);
        cc.director.runScene(new GameMain());

    }
});
