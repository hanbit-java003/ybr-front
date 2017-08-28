$('.h-tm .h-tm-btn').on('click', function () {

    if ($(this).hasClass('active')) {
        return;
    }
    var tabIndex = $(this).index();

    var tabBtns = $(this).parent('.h-tm').find('.h-tm-btn');
    tabBtns.removeClass('active');
    $(tabBtns[tabIndex]).addClass('active');

    if (typeof callback[tabIndex] === 'function') {
        callback[tabIndex]();
    }
});