(function () {
    // 点击批量操作-显示
    // 显示状态
    $('.batchOperation').bind('click',function(event) {
        if ($('.batchOperation').attr('data-plType') == 'true') {
            $('.bindIcon').attr('style','display:none');
            $('.batchOperation').attr('data-plType','false');
            $('.AllElection').attr('style','display:none');

            return false;
        }
        if ($('.batchOperation').attr('data-plType') == 'false') {
            $('.bindIcon').attr('style','display:block');
            $('.AllElection').attr('style','display:inline-block');
            $('.batchOperation').attr('data-plType','true');
            return false;
        }
        event.stopPropagation();
    });

    // 图标显示隐藏
    $('.con').on('click','.bindIcon',function() {
       
        if ($(this).attr('data-iconType') == 'true') {
            
            $(this).find('i').removeClass('iconfont iconxuanz');
            $(this).find('i').addClass('iconfont iconwxuanz');
            
            $(this).attr('data-iconType','false');
            return false;
        }
        if ($(this).attr('data-iconType') == 'false') {
            $(this).find('i').removeClass('iconfont iconwxuanz');
            $(this).find('i').addClass('iconfont iconxuanz');
            $(this).attr('data-iconType','true');
            return false;
        } 
    });

    // 排序-正序
    var sortFlag = false;
    $('.zx').bind('click',function() {
        if (sortFlag) {
            $(this).find('i').removeClass('iconfont icondx');
            $(this).find('i').addClass('iconfont iconzx');
            $('.sort_txt').text('正序');
            sortFlag = false;
            return false;
        }
        if (!sortFlag) {
            $(this).find('i').removeClass('iconfont iconzx');
            $(this).find('i').addClass('iconfont icondx');
            $('.sort_txt').text('倒序');
            sortFlag = true;
            return false;
        }
    });

    // 其他排序方式
    var qtFlag = false;
    $('.qt').bind('click',function() {
        if (qtFlag) {
            $('.qtul').attr('style','display:none');
            $('.cover').attr('style','display:none');
            $('body').attr('style','overflow:auto');
            qtFlag = false;
            return false;
        }
        if (!qtFlag) {
            $('.qtul').attr('style','display:block');
            $('.cover').attr('style','display:block');
            $('body').attr('style','overflow: hidden');
            qtFlag = true;
            return false;
        }
    });

    // 点击排序li隐藏
    $('.sort_li').bind('click',function() {
        $('.qtul').attr('style','display:none');
        $('.cover').attr('style','display:none');
        $('body').attr('style','overflow:auto');
        qtFlag = false;
        return false;
    });

    // 点击商品显示- 弹框
    $('.swiper-container').on('click','.commodity_a',function(event) {
        var commodId = $(this).attr('data-commodid');
        var tabIndex = $('.tab a.active').index(); //当前tab的索引
        
        $('.cover').attr('style','display:block');
        $('.card').eq(tabIndex).attr('style','display:block');
        $('body').attr('style','overflow:hidden');

        
        
        // commodity(commodId);
        event.stopPropagation();
    });
    $('.cancel').bind('click',function() {
        var commodId = $(this).attr('data-commodid');
        var tabIndex = $('.tab a.active').index(); //当前tab的索引

        $('.cover').attr('style','display:none');
        $('.card').eq(tabIndex).attr('style','display:none');
        $('body').attr('style','overflow:auto');
        
    });

})();