/**
 * Created by Maple on 6/25/15.
 */

(function() {
    var initializing = false;
    var fnTest = /xyz/.test(function() { xyz; }) ? /\b_super\b/ : /.*/;

    // The base Class implementation (does nothing)
    this.Class = function() {}

    // Create a new Class that inherits from this class
    Class.jsExtend = function(props) {
        var _super = this.prototype;

        // Instantiate a base class (but only create the instance, don't run the ctor constructor)
        initializing = true;
        var prototype = new this();
        initializing = false;

        // Copy the properties over onto the new prototype
        for (var name in props) {
            // Check if we're overwriting an existing function
            prototype[name] =
                typeof props[name] == "function" &&
                typeof _super[name] == "function" &&
                fnTest.test(props[name]) ?
                    (function(name, fn) {
                        return function() {
                            var tmp = this._super;

                            // Add a new ._super() method that is the same method, but on the super class
                            this._super = _super[name];

                            // The method only need to be bound temporarily, so we remove it when we're done executing
                            var ret = fn.apply(this, arguments);
                            this._super = tmp;

                            return ret;
                        }
                    })(name, props[name]) :
                    props[name];
        }

        // The dummy class constructor
        function Class() {
            // All construction is actually done in the init method
            if (!initializing && this.ctor) {
                this.ctor.apply(this, arguments);
            }
        }

        // Populate our constructed prototype object
        Class.prototype = prototype;
        // Enforce the constructor to be what we expect
        Class.prototype.constructor = Class;
        // And make this class extendable
        Class.jsExtend = arguments.callee;

        return Class;
    }
})();