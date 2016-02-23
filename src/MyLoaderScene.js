/**
 * Created by Admin on 2016/2/22.
 */
var MyLoaderScene = cc.Scene.extend({

    _interval : null,
    _length : 0,
    _count : 0,
    _lable : 0,
    _className :"MyLoaderScene",
    loadingBarWidth : 0,
    loadingBarHeight : 0,
    img_fu : null,
    actfor : null,
    actRo : null,
    init : function(){
        var self = this;

        var bgLayer = self._bgLayer = cc.LayerColor.create(cc.color(r=255,b=255,g=255,a=255),cc.winSize.width,cc.winSize.height);
        bgLayer.setPosition(cc.visibleRect.bottomLeft);
        self.addChild(bgLayer,0);

        var img = self._img = new cc.Sprite(res.loaderSprite_png);
        img.attr({
            x : cc.winSize.width/2,
            y : cc.winSize.height/2
        });

        bgLayer.addChild(this._img,1);

        //加载进度条
        var resLoadingBar = [];
        resLoadingBar.push(res.processUp_png);
        cc.loader.load(resLoadingBar,
            function (result, count, loadedCount) {
            }, function () {
                var ProcessBarUp = self.ProcessBarUp = new cc.Sprite(res.processUp_png);
                ProcessBarUp.attr({
                    x:cc.winSize.width/6+43,
                    y:cc.winSize.height*0.17+28.7,
                    anchorX:0,
                    anchorY:0,
                    scaleX:1,
                    scaleY:1
                });
                var size_loadingBar = self.ProcessBarUp.getContentSize()
                self.loadingBarWidth = size_loadingBar.width;
                self.loadingBarHeight = size_loadingBar.height;
                self.ProcessBarUp.setTextureRect(cc.rect(0,0,0,self.loadingBarHeight));
                self.addChild(self.ProcessBarUp, 2);
                self.schedule(self._startLoading, 0.3);//开始处 延迟 0.5
                return true;
            });


    },
    onEnter : function(){
        var self = this ;
        cc.Node.prototype.onEnter.call(self);
    },
    onExit : function(){
        cc.Node.prototype.onExit.call(this);
    },
    initWithResources : function (resources, cb) {
        if(typeof resources == "string") resources = [resources];
        this.resources = resources || [];
        this.cb = cb;
    },
    _startLoading : function(){
        var self = this;
        self.unschedule(self._startLoading);
        var res = self.resources;
        cc.loader.load(res,function(result,count,loadedCount) {
            var loadedCount1 = 1 + loadedCount;
            var percent = loadedCount1 / count;
            self.ProcessBarUp.setTextureRect(cc.rect(0, 0, self.loadingBarWidth * percent, self.loadingBarHeight));
        },function(){
            if (self.cb)
            //加载完后停滞一会在进入游戏
                self.schedule(self.cb,0,0,0.7);
        });
    }
});

MyLoaderScene.preload = function(resources, cb){
    var _myLoaderScene = null;
    if(!_myLoaderScene) {
        _myLoaderScene = new MyLoaderScene();
        _myLoaderScene.init();
    }
    _myLoaderScene.initWithResources(resources, cb);

    cc.director.runScene(_myLoaderScene);
    return _myLoaderScene;
};