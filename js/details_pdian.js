(function () {
    // 点击批量操作-显示
    // 显示状态
    var batchFlag = false;
    $('.batchOperation').bind('click',function(event) {
        if (batchFlag) {
            $('.cell_c').attr('style','display:none');
            batchFlag = false;
            return false;
        }
        if (!batchFlag) {
            $('.cell_c').attr('style','display:block');
            batchFlag = true;
            return false;
        }
        event.stopPropagation();
    });

    // 图标显示隐藏
    // var iconFlag = false;
    // $('.cell_c').bind('click',function() {
    //     if (iconFlag) {
    //         $(this).find('i').removeClass('iconfont iconxuanz');
    //         $(this).find('i').addClass('iconfont iconwxuanz');
            
    //         iconFlag = false;
    //         return false;
    //     }
    //     if (!iconFlag) {
    //         $(this).find('i').removeClass('iconfont iconwxuanz');
    //         $(this).find('i').addClass('iconfont iconxuanz');
    //         iconFlag = true;
    //         return false;
    //     }
    // });

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

    // 备注显示隐藏
    var remarks_ipt = false;
    $('.nc_line_remarks').on('click',function() {
        if(remarks_ipt) {
            $('.nc_line_remarks_ipt').attr('style','display:none');
            $('.nc_line_remarks_btn').attr('style','display:none');
            remarks_ipt = false;
            return false;
        }
        if (!remarks_ipt) {
            $('.nc_line_remarks_ipt').attr('style','display:block');
            $('.nc_line_remarks_btn').attr('style','display:inline-block');
            remarks_ipt = true;
            return false;
        }
    });




})();