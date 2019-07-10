(function () {
    // 点击批量操作-显示
    // 显示状态
    var batchFlag = false;
    $('.batchOperation').bind('click',function(event) {
        if (batchFlag) {
            $('.cell_c').attr('style','display:none');
            $('.AllElection').attr('style','display:none !important')
            batchFlag = false;
            return false;
        }
        if (!batchFlag) {
            $('.cell_c').attr('style','display:block');
            $('.AllElection').attr('style','display:inline-block !important')
            batchFlag = true;
            return false;
        }
        event.stopPropagation();
    });

    // 全选按钮
    $('.AllElection').click(function() {
        var dataAllelection = $(this).attr('data-allelection'); //全选状态

        if ($(this).attr('data-allelection') == 'true') {
            $('.cell_c').find('i').removeClass('iconfont iconxuanz');
            $('.cell_c').find('i').addClass('iconfont iconwxuanz');
            $('.cell_c').attr('data-iconFlag','no');
            $(this).attr('data-allelection','false');
            return false;
        }
        if ($(this).attr('data-allelection') == 'false') {
            $('.cell_c').find('i').removeClass('iconfont iconwxuanz');
            $('.cell_c').find('i').addClass('iconfont iconxuanz');
            $('.cell_c').attr('data-iconFlag','yes');
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
    
    

    // 弹框
    $('.con').on('click','.cell_a',function(event) {

        //订单号orderNum
        var orderNum = $(this).siblings('.cell_c').find('.payment_time_ls').text();
        $('.stock').attr('style','display:block');
        $('.cover').attr('style','display:block');
        $('.stock_order').text(orderNum);
        $('body').attr('style','ovflow:hidden');

        $('.stock_cancel').bind('click',function(ev) {
            
            $('.stock').attr('style','display:none');
            $('.cover').attr('style','display:none');
            $('body').attr('style','ovflow:auto');

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

    // 点击li 给icon添加样式
    $('.swiper-container').on('click','.cell_c',function() {
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

    // 弹框商品 ; 点击弹框商品后,弹框消失
    $('.card').on('click','.commodity',function() {
        $('.card').attr('style','display:none');
        $('.cover').attr('style','display:none');
        
        window.location.href = 'save_template.html';
    })



})();

// 商品数量累加
(function() {
    // 点击增加icon
    // 单价全部模拟为2
    var djia = 2;
    var s = 0;
    var a = 0;
    $('.con').on('click','.add_i',function() {
        var thisNum = Number($(this).siblings('.add_product_text').text());
        var beihuoMoney = Number($('.beihuo_money').text());
        console.log(beihuoMoney)
        thisNum++;
        $(this).siblings('.add_product_text').attr('style','display:block');
        $(this).siblings('.reduce_i').attr('style','display:block');
        $(this).siblings('.add_product_text').text(thisNum);

        

        /**
         * 计算价格
         * 点击增加时直接加到总和上, 减少时在总和上直接减少
         **/
        var djia_fixed = Number(djia) * Number(thisNum);
        console.log(djia_fixed+'单价*数量');
        s = Number($('.beihuo_money').text()) + Number(djia_fixed);
        
        console.log(s);
        console.log('-----');
        
        $('.beihuo_money').text(s);
        


    });

    // 点击减少icon
    $('.con').on('click','.reduce_i',function() {
        var thisNum = Number($(this).siblings('.add_product_text').text());
        --thisNum;
        if (thisNum <= 0) {
            $(this).siblings('.add_product_text').attr('style','display:none');
            $(this).attr('style','display:none');
            thisNum = 0;
        }
        $(this).siblings('.add_product_text').text(thisNum);


       
    });


    // 控制出库入库的弹框
    $('.con').on('click','.add_product_btn',function(event) {
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