/**
 * Created by Admin on 2016/2/22.
 */
var GameStart = cc.Scene.extend({

    onEnter : function(){
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild(layer);
    }
});

var GameLayer = cc.Layer.extend({
    share:null,
    ctor : function(){
        this._super();
        this.init();
    },
    init : function(){
        this._super();
        var winsize = cc.director.getWinSize();
        var Sprite_bg = cc.Sprite.create(res.bg);
        Sprite_bg.setPosition(cc.p(winsize.width/2,winsize.height/2));
        this.addChild(Sprite_bg);

        //创建一个游戏开始菜单
        var menu = new cc.Menu;
        menu.setPosition(cc.p(0,0));

        //play
        var MenuItem=cc.MenuItemImage.create(res.playBtn,null,this.OnStart,this);
        MenuItem.setPosition(cc.p(winsize.width/2,winsize.height*0.25));
        menu.addChild(MenuItem);

        //我的奖品
        var award=cc.MenuItemImage.create(res.jiangpin,null,onAward,this);//online
        award.setPosition(cc.p(winsize.width/2,winsize.height*0.33));
        menu.addChild(award);

        //游戏规则
        var RuleItem=cc.MenuItemImage.create(res.ruleBtn,null,this.OnRule,this);
        RuleItem.setPosition(cc.p(winsize.width/2,winsize.height *0.41));
        menu.addChild(RuleItem);

        //menu.setScale(1.8);  //设置按钮大小

        this.addChild(menu);
    },


    OnStart : function(){
        this.rule = new cc.Sprite(res.bg_guide);
        this.rule.attr({
            x:cc.winSize.width/2,
            y:cc.winSize.height/2
        });
        this.handAction();
        this.addChild(this.rule,10,"start");
        var self = this;
        var listener1 = cc.EventListener.create({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches : true,
            onTouchBegan : function(touch,event){
                self.onPlay();
                return false;
            }
        });

        cc.eventManager.addListener(listener1,this.rule);
    },


    OnRule:function(){

        if(btn_status==0){
            this.share = cc.Sprite.create(res.bg_rule);
            this.share.attr({
                x:cc.winSize.width/2,
                y:cc.winSize.height/2,
                scale:0.8
            });
            var self=this;
            var listener = cc.EventListener.create({
                event:cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches:true,
                onTouchBegan:function(touch,event){
                    var target = event.getCurrentTarget();
                    var locationInNode = target.convertToNodeSpace(touch.getLocation());
                    var s = target.getContentSize();
                    var rect = cc.rect(0,0, s.width, s.height);
                    if(cc.rectContainsPoint(rect,locationInNode)){
                        btn_status=1;//不响应分享

                        //  alert(btn_status);
                        return true;
                    }
                    return false;
                },
                onTouchEnded: function (touch, event) {     //实现 onTouchBegan 事件处理回调函数
                    var target = event.getCurrentTarget();

                    //alert(btn_status);
                    self.removeChild(target,true);
                    btn_status=0;
                    return false;
                }
            });
            cc.eventManager.addListener(listener,this.share);
            this.addChild(this.share,40);
        }
    },

    onPlay : function(){
        cc.director.runScene(new GameMain());
    },

    handAction : function(){
        var hand = new cc.Sprite(res.img_hand);
        hand.attr({
            x:cc.winSize.width*0.82,
            y:cc.winSize.height*0.36
        });
        this.rule.addChild(hand,5);
        hand.setOpacity(0);
        var arrowAction = cc.repeatForever(cc.sequence(cc.spawn(cc.moveTo(0.8,cc.p(hand.x,hand.y+80)).easing(cc.easeIn(0.5)),cc.fadeIn(1)),cc.fadeOut(0.8),cc.callFunc(function(){
            hand.y = hand.y-100;
            hand.opacity = 255;
        },this)));
        hand.runAction(arrowAction);
    }
});