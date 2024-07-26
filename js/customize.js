$(document).ready(function() {
    // ��𧢲�毺�� search btn switch
    $('.mobileSearchBtn').click(function() {
        if ($('.mobileShow').hasClass('act')) {
            $('.mobileShow').removeClass('act').fadeOut();
        } else {
            $('.mobileShow').addClass('act').fadeIn();
        }
    });
    // 撖砍漲�㺭��閙�嚗𣬚宏�膄.act
    $(window).resize(function() {
        if ($(window).width() > 991) {
            $('.mobileShow').removeClass('act').hide();
        }
    });

    function checkHeight() {
        if ($('.mask p').height() < 400) {
            $('.mask button.btn').hide();
            $('.mask:after').hide();  // 隢𧢲釣�誯�躰ㄐ :after ��閬��鸌�ê̌��閧�
        } else {
            $('.mask button.btn').show();
            $('.mask:after').show();  // ��䔶��
        }
    }
    // ��脲活瑼Ｘ䰻
    checkHeight();
    // �訜蝒堒藁憭批�讛�𠰴�𡝗���齿鰵瑼Ｘ䰻
    $(window).resize(function() {
        checkHeight();
    });

    // �批捆��䁅� �鰐霈��冽�� btn
    $('.mask .btn').click(function() {
        var $mask = $('.mask');
        var $btn = $(this);
        if ($mask.hasClass('_show')) {
            $mask.removeClass('_show');
            $btn.text('�鰐霈��冽��');
        } else {
            $mask.addClass('_show');
            $btn.text('憿舐內頛�撠穃�批捆');
        }
    });

    // 蝷曄黎icon ��鈭�
    $('.function .share').on('click', function() {
        if (!$(this).hasClass('act')) {
            $(this).addClass('act');
            $(this).siblings('.socialMedia').addClass('Show');
        } else {
            $(this).removeClass('act');
            $(this).siblings('.socialMedia').removeClass('Show');
        }
    });

    // ��𧢲�毺��遝��� menu �黸���
    // $(window).on('scroll', function() {
    //     if ($(window).scrollTop() > 70) {
    //         $('header .menu').addClass('hide');
    //     } else {
    //         $('header .menu').removeClass('hide');
    //     }
    // });

    // select 璅���
    // $('select').each(function(){
    //     var $this = $(this), numberOfOptions = $(this).children('option').length;
    
    //     $this.addClass('select-hidden'); 
    //     $this.wrap('<div class="select"></div>');
    //     $this.after('<div class="select-styled"></div>');

    //     var $styledSelect = $this.next('div.select-styled');
    //     $styledSelect.text($this.children('option').eq(0).text());
    
    //     var $list = $('<ul />', {
    //         'class': 'select-options'
    //     }).insertAfter($styledSelect);
    
    //     for (var i = 0; i < numberOfOptions; i++) {
    //         $('<li />', {
    //             text: $this.children('option').eq(i).text(),
    //             rel: $this.children('option').eq(i).val()
    //         }).appendTo($list);
    //         if ($this.children('option').eq(i).is(':selected')){
    //         $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
    //         }
    //     }
    
    //     var $listItems = $list.children('li');
    
    //     $styledSelect.click(function(e) {
    //         e.stopPropagation();
    //         $('div.select-styled.active').not(this).each(function(){
    //             $(this).removeClass('active').next('ul.select-options').hide();
    //         });
    //         $(this).toggleClass('active').next('ul.select-options').toggle();
    //     });
    
    //     $listItems.click(function(e) {
    //         e.stopPropagation();
    //         $styledSelect.text($(this).text()).removeClass('active');
    //         $this.val($(this).attr('rel'));
    //     $list.find('li.is-selected').removeClass('is-selected');
    //     $list.find('li[rel="' + $(this).attr('rel') + '"]').addClass('is-selected');
    //         $list.hide();
    //         //console.log($this.val());
    //     });
    
    //     $(document).click(function() {
    //         $styledSelect.removeClass('active');
    //         $list.hide();
    //     });
    // });
});