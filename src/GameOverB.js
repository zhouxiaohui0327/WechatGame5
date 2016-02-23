/**
 * Created by Admin on 2016/2/23.
 */

var GameOverB= cc.Scene.extend({
    onEnter:function(){
        this._super();
        this.addChild(new GameOverLayerB());
    }
});

var GameOverLayerB = cc.Layer.extend({
    ctor : function(){
        this._super();
        this.init();
    },
    init: function () {
        this._super();

        var choose = 0;

        //����
        var bg_btn_btn = new cc.Sprite(res.bg_over_over);
        bg_btn_btn.attr({x:cc.winSize.width/2,y:cc.winSize.height/2});
        this.addChild(bg_btn_btn);

        //���־���
        var ov_tk = new cc.Sprite(over_tk_array[level-1]);
        ov_tk.attr({x:cc.winSize.width/2,y:cc.winSize.height/2});
        this.addChild(ov_tk);

        //�����˵�
        var menu = new cc.Menu;
        menu.setPosition(cc.p(0,0));

        if(level<3){
            choose=0;
        }else{
            choose=1;
        }

        //����
        var btn_btn=cc.MenuItemImage.create(btn_btn_gatArray[choose],null,goUp,this);
        btn_btn.attr({x:cc.winSize.width/2,y:cc.winSize.height/2-80,visible:true});
        menu.addChild(btn_btn);
        this.addChild(menu);



    },


});