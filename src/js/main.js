$(function() {
    let contactBgCount = 1;
    let teamSlideCount = 0;
    let teamControlCount = 0;
    let testimonialsSlideCount = 0;
    let testimonialsControlCount = 0;
    let blogSlideCount = 0;
    let blogControlCount = 0;

    /* check scroll around section service */

    let serviceLoadcheck = setInterval(function() {
            let serviceTop = $('.service').offset().top;
            if(serviceTop - 500 < (document.documentElement.scrollTop || self.pageYOffset)) {
                setTimeout(circlePercentLoad, 1000);
                clearInterval(serviceLoadcheck);            
            }
        }, 500);

    /* check scroll around section team */

    let teamLoadcheck = setInterval(function() {
        let teamTop = $('.team').offset().top;
        if(teamTop - 500 < (document.documentElement.scrollTop || self.pageYOffset)) {
            setTimeout(teamPercentLoad(0), 2000);
            clearInterval(teamLoadcheck);            
        }
    }, 500);

    /* section contact, blocks background rules */

    $('.contact-block-top').each(function() {
        // npm run build 'url(./img/contact_banner' + contactBgCount +'.png)' or npm run dev // npm run build 'url(../img/contact_banner' + contactBgCount +'.png)'
        $(this).css({
            backgroundImage: 'url(./img/contact_banner' + contactBgCount +'.png)'
        });
        contactBgCount++;
    });

    /* menu toggle */

    $('.slider-nav-mini').on('click', function() {
        $('.slider-nav-menu').slideToggle();
    });
    
    /* add on main button scroll */
    $('.slider-caption-down').on('click', function() {
        let delta = $('.about').position().top;
        $('html').animate({
            scrollTop: delta
        });        
    });

    /* resize blocks on section feature */

    $('.feature-image-layer').on('click', function() {
        if($(document).outerWidth() > 576) {
            $('.feature-image-layer').animate({
                width: '25%'
            }).children('h6').css({
                display: 'flex'
            });
            $(this).stop().animate({
                width: '50%'
            }).children('h6').css({
                display: 'none'
            });
        } else {
            $('.feature-image-layer').children('h6').css({
                display: 'flex'
            });
            $(this).stop().children('h6').css({
                display: 'none'
            });
        }
        
    });
    
    /* hover animation on menu section portfolio */

    $('.portfolio-menu-link').on('mouseenter', function() {
        $(this).children('.portfolio-menu-border').stop().animate({
            opacity: 1,
            width: '80%'
        });
    });
    $('.portfolio-menu-link').on('mouseleave', function() {
        $(this).children('.portfolio-menu-border').stop().animate({
            opacity: 0,
            width: 0
        });
    });

    /* hover on image section portfolio */

    $('.portfolio-images-item').on('mouseenter', function() {
        $(this).children('.portfolio-images-item-layer').css({
            display: 'flex'
        });
    });
    $('.portfolio-images-item').on('mouseleave', function() {
        $(this).children('.portfolio-images-item-layer').css({
            display: 'none'
        });
    });

    /* carousel animation section team */

    $('.team-carousel-slide').each(function() {
        $(this).attr('data-team-slide', teamSlideCount);
        teamSlideCount++;
    });
    $('.team-controls').children('span').each(function() {
        $(this).attr('data-team-slide', teamControlCount).on('click', function() {
            let slideWidth = $('.team-carousel-slide').outerWidth();
            $('.team-controls').children('span').css({
                backgroundColor: 'transparent'
            });
            $(this).css({
                backgroundColor: '#19bd9a'
            });
            $('.team-carousel-slide').first().animate({
                marginLeft: -slideWidth * $(this).attr('data-team-slide')
            });
            teamPercentLoad($(this).attr('data-team-slide'));
        });
        teamControlCount++;
    });

    /* carousel animation section testimonials */

    $('.testimonials-slide-inner').each(function() {
        $(this).attr('data-testimonials-slide', testimonialsSlideCount);
        testimonialsSlideCount++;
    });
    $('.testimonials-controls').children('span').each(function() {
        $(this).attr('data-testimonials-slide', testimonialsControlCount).on('click', function() {
            let slideWidth = $('.testimonials-slide-inner').outerWidth();
            $('.testimonials-controls').children('span').css({
                backgroundColor: 'transparent'
            });
            $(this).css({
                backgroundColor: '#19bd9a'
            });
            $('.testimonials-slide-inner').first().animate({
                marginLeft: -slideWidth * $(this).attr('data-testimonials-slide')
            });
        });
        testimonialsControlCount++;
    });

    /* carousel animation section blog */

    $('.blog-slide-inner').each(function() {
        $(this).attr('data-blog-slide', blogSlideCount);
        blogSlideCount++;
    });
    $('.blog-controls').children('span').each(function() {
        $(this).attr('data-blog-slide', blogControlCount).on('click', function() {
            $('.blog-controls').children('span').css({
                backgroundColor: 'transparent'
            });
            $(this).css({
                backgroundColor: '#b2b3b3'
            });
            if($('.blog-controls').css('flex-direction') == 'row') {
                let slideWidth = $('.blog-slide-inner').outerWidth();
                $('.blog-slide-inner').first().animate({
                    marginLeft: -slideWidth * $(this).attr('data-blog-slide')
                });
            } else {
                let slideHeight = $('.blog-slide-inner').outerHeight();
                $('.blog-slide-inner').first().animate({
                    marginTop: -slideHeight * $(this).attr('data-blog-slide')
                });
            }
        });
        blogControlCount++;
    });

    /* animation section price */

    $('.price-item').on('mouseenter', function() {
        $(this).children('.price-item-layer').css({
            display: 'flex'
        }).stop().animate({
            top: 0
        });
    });
    $('.price-item').on('mouseleave', function() {
        $(this).children('.price-item-layer').stop().animate({
            top: '-240px'
        }, function() {
            $(this).css({
                display: 'none'
            });
        });
    });

    /* action section map */

    $('.map-layer').on('click', function() {
        $(this).css({
            display: 'none'
        });
    });

    /* get normal on resize */

    $(window).on('resize', function() {
        $('.blog-slide-inner').first().animate({
            marginLeft: 0,
            marginTop: 0
        });
        $('.blog-controls').children('span').css({
            backgroundColor: 'transparent'
        }).first().css({
            backgroundColor: '#b2b3b3'
        });
        $('.testimonials-slide-inner').first().animate({
            marginLeft: 0
        });
        $('.testimonials-controls').children('span').css({
            backgroundColor: 'transparent'
        }).first().css({
            backgroundColor: '#19bd9a'
        });
        $('.team-carousel-slide').first().animate({
            marginLeft: 0
        }, teamPercentLoad(0));
        $('.team-controls').children('span').css({
            backgroundColor: 'transparent'
        }).first().css({
            backgroundColor: '#19bd9a'
        });
        if (parseInt($(window).outerWidth()) < 770) {
            $('.slider-nav-menu').slideUp();
        } else {
            $('.slider-nav-menu').css({
                display: 'block'
            });
        }
        if (parseInt($(window).outerWidth()) < 576) {
            $('.feature-image-layer').animate({
                width: '100%'
            }).each(function() {
                $(this).children('h6').css({
                    display: 'flex'
                });
            }).first().children('h6').css({
                display: 'none'
            });
        }
    });
});


function circlePercentLoad() {
    $('circle').each(function() {
        let circle = $(this);
        let title = circle.parent().next();
        let titleInner = parseInt(title.attr('data-circle-per')) / 100;
        let percent = (339.292 - circle.attr('data-stroke-dashoffset')) / 100;
        let tick = Math.random() * (12 - 8) + 8;
        let count = 0;
        if(percent != null) {
            let timer = setInterval(function() {
                circle.attr('stroke-dashoffset', (339.292 - (percent * count)));
                title.html(parseInt(titleInner * count) + '<span>%</span>');
                count++;
                if(count > 100) {
                    clearInterval(timer);
                }
            }, circle.attr('stroke-dashoffset') / tick);
        }
    });
}

function teamPercentLoad(num) {
    $('.loader').css({
        width: 0
    });
    $('.team-carousel-slide').each(function() {
        if($(this).attr('data-team-slide') == num) {
            let child = $(this).children('.team-carousel-slide-block')
                               .children('.team-carousel-slide-block-progress')
                               .children('.team-carousel-slide-block-progress-line')
                               .children('.loader');
            child.each(function() {
                let percent = $(this).parent().prev().children('p');
                let percentInner = parseInt(percent.html());
                $(this).animate({
                    width: percentInner + '%'
                }, 2000);
            });            
        }
    });
}