(function () {

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
    $('.sort_li').bind('click',function(event) {
        $('.qtul').attr('style','display:none');
        $('.cover').attr('style','display:none');
        $('body').attr('style','overflow:auto');
        qtFlag = false;
        return false;
    });

    // 点击li.显示弹框
    $('.con').on('click','.detailsList',function() {
        var detailsName = $(this).find('.delivery_title').text(); //当前申请补货的 号

        $('.stock').attr('style','display:block');
        $('.cover').attr('style','display:block');
        $('body').attr('style','ovflow:hidden');

        $('.stock_cancel').bind('click',function(ev) {
            
            $('.stock').attr('style','display:none');
            $('.cover').attr('style','display:none');
            $('body').attr('style','ovflow:auto');
            $('.stock_num_ipt').val(''); //取消时,清空input里面的值

            ev.stopPropagation();
        });

        $('.stock_success').bind('click',function(ev) {

            $('.stock').attr('style','display:none');
            $('.cover').attr('style','display:none');
            $('body').attr('style','ovflow:auto');
            
            ev.stopPropagation();
        });

        event.stopPropagation();
    });

})();