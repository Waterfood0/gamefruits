gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDNewSpriteObjects1= [];
gdjs.MainCode.GDNewSpriteObjects2= [];
gdjs.MainCode.GDNewSprite6Objects1= [];
gdjs.MainCode.GDNewSprite6Objects2= [];
gdjs.MainCode.GDNewSprite9Objects1= [];
gdjs.MainCode.GDNewSprite9Objects2= [];
gdjs.MainCode.GDNewSprite2Objects1= [];
gdjs.MainCode.GDNewSprite2Objects2= [];
gdjs.MainCode.GDNewSprite3Objects1= [];
gdjs.MainCode.GDNewSprite3Objects2= [];
gdjs.MainCode.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.MainCode.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.MainCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.MainCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];


gdjs.MainCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.MainCode.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.MainCode.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "knopka-klik-rezkii-shumnyii-v-prostranstve.mp3", false, 70, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.MainCode.GDFloatingOutButtonDarkBlueObjects1);
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.MainCode.GDTransparentButtonWithWhiteBlueBorderObjects1);
{for(var i = 0, len = gdjs.MainCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].SetLabelText("Русский", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDFloatingOutButtonDarkBlueObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFloatingOutButtonDarkBlueObjects1[i].SetLabelText("Играть", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.MainCode.GDFloatingOutButtonDarkBlueObjects1);
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.MainCode.GDTransparentButtonWithWhiteBlueBorderObjects1);
{for(var i = 0, len = gdjs.MainCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].SetLabelText("Engish", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDFloatingOutButtonDarkBlueObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFloatingOutButtonDarkBlueObjects1[i].SetLabelText("Play", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.MainCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.MainCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "knopka-klik-rezkii-shumnyii-v-prostranstve.mp3", false, 100, 1);
}{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "island-dreams-1-20240427-spok.mp3", false, 100, 1);
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDNewSpriteObjects1.length = 0;
gdjs.MainCode.GDNewSpriteObjects2.length = 0;
gdjs.MainCode.GDNewSprite6Objects1.length = 0;
gdjs.MainCode.GDNewSprite6Objects2.length = 0;
gdjs.MainCode.GDNewSprite9Objects1.length = 0;
gdjs.MainCode.GDNewSprite9Objects2.length = 0;
gdjs.MainCode.GDNewSprite2Objects1.length = 0;
gdjs.MainCode.GDNewSprite2Objects2.length = 0;
gdjs.MainCode.GDNewSprite3Objects1.length = 0;
gdjs.MainCode.GDNewSprite3Objects2.length = 0;
gdjs.MainCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.MainCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.MainCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.MainCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);
gdjs.MainCode.GDNewSpriteObjects1.length = 0;
gdjs.MainCode.GDNewSpriteObjects2.length = 0;
gdjs.MainCode.GDNewSprite6Objects1.length = 0;
gdjs.MainCode.GDNewSprite6Objects2.length = 0;
gdjs.MainCode.GDNewSprite9Objects1.length = 0;
gdjs.MainCode.GDNewSprite9Objects2.length = 0;
gdjs.MainCode.GDNewSprite2Objects1.length = 0;
gdjs.MainCode.GDNewSprite2Objects2.length = 0;
gdjs.MainCode.GDNewSprite3Objects1.length = 0;
gdjs.MainCode.GDNewSprite3Objects2.length = 0;
gdjs.MainCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.MainCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.MainCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.MainCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
