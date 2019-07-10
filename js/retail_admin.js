

(function() {


    // 点击批量操作 控制全部显示隐藏
    var pilFlag = false;
    $('.batchOperation').on('touchend',function() {
        if(pilFlag) {
            $('.bh_xg').attr('style','display:none');
            $('.cell_b').attr('style','display:none');
            $('.pl').attr('style','display:none');
            pilFlag = false;
            return false;
        }
        if(!pilFlag) {
            $('.bh_xg').attr('style','display:block');
            $('.cell_b').attr('style','display:block');
            $('.pl').attr('style','display:flex');
            pilFlag = true;
            return false;
        }
    });

    // 点击全选 全部显示
    
    $('.qx').click(function() {
        var dataAllelection = $(this).attr('data-allelection'); //全选状态

        if ($(this).attr('data-allelection') == 'true') {
            $('.cell_b').find('i').removeClass('iconfont iconxuanz');
            $('.cell_b').find('i').addClass('iconfont iconwxuanz');
            $('.cell_b').attr('data-iconFlag','no');
            $(this).attr('data-allelection','false');
            return false;
        }
        if ($(this).attr('data-allelection') == 'false') {
            $('.cell_b').find('i').removeClass('iconfont iconwxuanz');
            $('.cell_b').find('i').addClass('iconfont iconxuanz');
            $('.cell_b').attr('data-iconFlag','yes');
            $(this).attr('data-allelection','true');
            return false;
        }
    });

    // 排序-正序
    var sortFlag = false;
    $('.zx').bind('click',function() {
        if (sortFlag) {
            $(this).find('i').removeClass('iconfont icondx');
            $(this).find('i').addClass('iconfont iconzx');
            $(this).attr('data-attrs','zxsort');
           
            $('.sort_txt').text('正序');
            sortFlag = false;
            return false;
        }
        if (!sortFlag) {
            $(this).find('i').removeClass('iconfont iconzx');
            $(this).find('i').addClass('iconfont icondx');
            $(this).attr('data-attrs','dxsort');
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

    // 点击li 给icon添加样式
    $('.swiper-container').on('click','.cell_b',function() {
        if ($(this).attr('data-iconFlag') == 'no') {
            $(this).find('i').removeClass('iconfont iconwxuanz');
            $(this).find('i').addClass('iconfont iconxuanz');
            $(this).attr('data-iconFlag','yes');
            return false;
        }
        if ($(this).attr('data-iconFlag') == 'yes') {
            $(this).find('i').removeClass('iconfont iconxuanz');
            $(this).find('i').addClass('iconfont iconwxuanz');
            $(this).attr('data-iconFlag','no');
            return false;
        }
    });

    // 点击商品显示- 弹框
    $('.swiper-container').on('click','.commodity_a',function(event) {
        var commodId = $(this).attr('data-commodid'); //获取当前商品的id,
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

    // 商品弹框-公共方法
    function commodity(commodId) {

        $.ajax({
            url : '',
            data : {
                commodId:commodId
            },
            type: 'POST',
            success : function(data) {
                $('.delivery_title').text();
            },
            error : function() {

            }
        });
    }

    // 排序方法
    function sort_fun() {

    }


})();