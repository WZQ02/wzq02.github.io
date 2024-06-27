var swup_allow_flag = 1//允许向上滑动显示page2

var bodyscroll = new Hammer(document.querySelector('#main'));//上下方向触摸手势
bodyscroll.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });//允许上下滑动
function up_action() {//向上滑动action
    if (swup_allow_flag) {
        scrolltopage2();
    }
    //console.log(swup_allow_flag)
}
function down_action() {//向下
    if (sec_scroll_r) {
        scrolltopage1();
    }
}
bodyscroll.on('swipeup', function(){up_action()});
bodyscroll.on('swipedown', function(){down_action()});
bodyscroll.on('panup', function(){up_action()});
bodyscroll.on('pandown', function(){down_action()});
var bodyscroll2 = new Hammer(page2);
bodyscroll2.on('swipeleft', function() {//左右方向触摸手势
    secleft();
    resetbodyscroll3();
});
bodyscroll2.on('swiperight', function() {
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