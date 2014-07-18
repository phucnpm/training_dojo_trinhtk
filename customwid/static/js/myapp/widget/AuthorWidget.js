
define([
    "dojo/_base/declare",
    "dojo/_base/fx",
    "dojo/_base/lang",
    "dojo/dom-style",
    "dojo/mouse",
    "dojo/on",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/AuthorWidget.html"
], function(declare, baseFx, lang, domStyle, mouse, on, _WidgetBase, _TemplatedMixin, template){
    return declare([_WidgetBase, _TemplatedMixin], {
        name: "No Name",
        avatar: require.toUrl("./images/defaultAvatar.jpg"),
        bio: "",
        templateString: template,
        baseClass: "AuthorWidget",
        mouseAnim: null,
        baseBackgroundColor: "#fff",
        mouseBackgroundColor: "#def",

        postCreate: function(){
        var domNode = this.domNode;
        this.inherited(arguments);
        domStyle.set(domNode, "backgroundColor", this.baseBackgroundColor);
        this.own(
            on(domNode, mouse.enter, lang.hitch(this, "_changeBackground", this.mouseBackgroundColor)),
            on(domNode, mouse.leave, lang.hitch(this, "_changeBackground", this.baseBackgroundColor))
        );
        },

        _changeBackground: function(newColor) {
            if (this.mouseAnim) {
                this.mouseAnim.stop();
            }
            this.mouseAnim = baseFx.animateProperty({
                node: this.domNode,
                properties: {
                    backgroundColor: newColor
                },
                onEnd: lang.hitch(this, function() {
                    this.mouseAnim = null;
                })
            }).play();
        },

        _setAvatarAttr: function(imagePath) {
            if (imagePath != "") {
                this._set("avatar", imagePath);
                this.avatarNode.src = imagePath;
            }
            else{
                this._set("avatar", "/static/js/myapp/widget/images/defaultAvatar.jpg");
                this.avatarNode.src = "/static/js/myapp/widget/images/defaultAvatar.jpg";
            }

        }
    });
});