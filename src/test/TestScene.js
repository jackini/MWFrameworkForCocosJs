/**
 * Created by Maple on 6/27/15.
 */

var TestScene = mw.GameScene.extend({
    ctor: function() {
        this._super();
        this.init();
    },
    onEnter: function() {
        this._super();
        var testVc = new TestViewController(123);
        this.loadViewController(testVc, "TEST_VIEW_CONTROLLER");
    }
})