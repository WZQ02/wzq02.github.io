var bodyscroll = new Hammer(document.body);//上下方向触摸手势
bodyscroll.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });//允许上下滑动
bodyscroll.on('swipeup', function(ev) {
    scrolltopage2();
});
bodyscroll.on('swipedown', function(ev) {
    scrolltopage1();
});
bodyscroll.on('panup', function(ev) {
    scrolltopage2();
});
bodyscroll.on('pandown', function(ev) {
    scrolltopage1();
});
var bodyscroll2 = new Hammer(page2);
bodyscroll2.on('swipeleft', function(ev) {//左右方向触摸手势
    secleft();
    resetbodyscroll3();
});
bodyscroll2.on('swiperight', function(ev) {
    secright();
    resetbodyscroll3();
});
//
var bodyscroll3 = new Hammer(document.getElementsByClassName("secdisplay")[0]);
function resetbodyscroll3() {
    setTimeout(function(){
        bodyscroll3 = Hammer(document.getElementsByClassName("secdisplay")[0]);
    },"500")
}