/**
 * Created by Maple on 6/27/15.
 */

var TestViewController = mw.ViewController.extend({
    member: null,
    ctor: function(member) {
        this._super();
        this.member = member;
    },
    viewDidLoad: function() {
        this._super();

        console.log(this.member);

        var gif = mw.GifSprite.createWithFile("res/GIF/003.gif");
        gif.setPosition(cc.Point(cc.winSize.width * 0.5, cc.winSize.height * 0.5));
        this.view().addChild(gif);
    },
    viewDidUnload: function() {
        this._super();
    },
});