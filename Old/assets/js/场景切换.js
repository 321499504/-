cc.Class({
    extends: cc.Component,
 
    properties: {
       
        scene:""//要切换的场景
    },
 
    start () {
 
    },
 
    changeScene(){
 
        //切换场景
        cc.director.loadScene(this.scene);
    }
 
    // update (dt) {},
});