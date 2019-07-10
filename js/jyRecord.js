(function() {

    // 备注显示隐藏
    var remarks_ipt = false;
    $('.con').on('click','.nc_line_remarks',function() {
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

    // 点击商品cell_b 出现弹出框
    $('.con').on('click','.cell_b',function(event) {

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

        // 当前商品退款commodity_tk
        
        $('.commodity_tk').bind('click',function() {
            var dataTypes = $(this).attr('data-types');
            $('.money_card').attr('style','display:block');
            $('.cover_m').attr('style','display:block');

            // 确认
        $('.money_success').bind('click',function() {
            $('.money_card').attr('style','display:none');
            $('.cover_m').attr('style','display:none');
            post_fun(orderNum,dataTypes);
        });

        });

        // 此订单所有商品allcommodity_tk
        $('.allcommodity_tk').bind('click',function() {
            var dataTypes = $(this).attr('data-types');
            $('.money_card').attr('style','display:block');
            $('.cover_m').attr('style','display:block');

            // 确认
        $('.money_success').bind('click',function() {
            $('.money_card').attr('style','display:none');
            $('.cover_m').attr('style','display:none');
            post_fun(orderNum,dataTypes);
        });

        });
        // 取消
        $('.money_cancel').bind('click',function() {
            $('.money_card').attr('style','display:none');
            $('.cover_m').attr('style','display:none');
        });
        

        event.stopPropagation();
    });


    // 用于post请求数据
    //dataTypes 用于是单个商品退款还是此订单全退款
    function post_fun(orderNum,dataTypes) {
        $.post(
            'url',
            {
                orderNum:orderNum,
                dataTypes:dataTypes
            },
            function(data) {

            }
        )
    }

})();