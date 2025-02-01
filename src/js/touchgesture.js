var swup_allow_flag = 1
var bodyscroll = new Hammer(document.querySelector('#main'))
bodyscroll.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL })
function up_action() {
    if (swup_allow_flag) {
        scrolltopage2()
    }
}
function down_action() {
    scrolltopage1()
}
bodyscroll.on('swipeup', function(){up_action()})
bodyscroll.on('swipedown', function(){down_action()})
bodyscroll.on('panup', function(){up_action()})
bodyscroll.on('pandown', function(){down_action()})