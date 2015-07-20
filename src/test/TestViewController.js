/**
 * Created by Maple on 6/27/15.
 */

var TestViewController = mw.ViewController.extend({
    _member: null,
    ctor: function(member) {
        this._super();
        this._member = member;
    },
    viewDidLoad: function() {
        cc.log("TestViewController::viewDidLoad", this._member);

        var gif = mw.GifSprite.createWithFile("res/GIF/003.gif");
        gif.setPosition(cc.p(cc.winSize.width * 0.5, cc.winSize.height * 0.5));
        this.view().addChild(gif);
    },
    viewDidUnload: function() {
        cc.log("TestViewController::viewDidUnload");
    },
});