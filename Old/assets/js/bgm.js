cc.Class({
    extends: cc.Component,
 
    properties: {
        bgAudio: {
            default: null,
            type: cc.AudioClip
        }
    },
 
    // LIFE-CYCLE CALLBACKS:
 
    onLoad () {
        cc.game.addPersistRootNode(this.node);          // 将该节点添加为常驻节点
        cc.audioEngine.playEffect(this.bgAudio);        // 播放背景音乐
    },
});