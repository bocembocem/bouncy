$(function() {
    let bgCount = 1;
    $('.contact-block-top').each(function() {
        $(this).css({
            backgroundImage: 'url(../img/contact_banner' + bgCount +'.png)'
        });
        bgCount++;
    });
});

