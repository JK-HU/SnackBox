(function() {
    // 点击增加icon
    // 单价全部模拟为5
    // curCommodityPrise 用于存放当前商品的价格 

    $('.con').on('click','.add_i',function() {
        var thisNum = Number($(this).siblings('.add_product_text').text());  //数量
        var djia = Number($(this).siblings('.product_moneys').text()).toFixed(2); //单价

        thisNum++;

        var a = Number($('.beihuo_money').text()) + Number(djia); //这里只是直接单价和总和相加了
        $('.beihuo_money').text(a);

        

        $(this).siblings('.add_product_text').attr('style','display:block');
        $(this).siblings('.reduce_i').attr('style','display:block');
        $(this).siblings('.add_product_text').text(thisNum);


        /**
        * 计算价格
        *  1.这里直接将商品的单价找出来,直接将 商品的单价 和 总价 直接相加减
        **/

    });

    // 点击减少icon
    $('.con').on('click','.reduce_i',function() {
        var thisNum = Number($(this).siblings('.add_product_text').text()); //数量
        var djia = Number($(this).siblings('.product_moneys').text()).toFixed(2); //单价
        --thisNum;
        if (thisNum <= 0) {
            $(this).siblings('.add_product_text').attr('style','display:none');
            $(this).attr('style','display:none');
            thisNum = 0;
        }
        $(this).siblings('.add_product_text').text(thisNum);
        var money = Number($('.beihuo_money').text()) - Number(djia);
        $('.beihuo_money').text(money);

       
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

    // auto_beihuo自动备货按钮
    $('.auto_beihuo').bind('click',function() {

    });

    // moban 点击模板
    $('.moban').bind('click',function() {
        $('.cover').attr('style','display:block');
        $('.card').attr('style','display:block');

        $('.card_cancel').bind('click',function() {
            $('.cover').attr('style','display:none');
            $('.card').attr('style','display:none');
        });
    });

        // 控制通用模板模板名称
        $('.preview_peis').on('click',function(event) {
            $('.stockTrmalate').attr('style','display:none');
            $('.stockTrmalateb').attr('style','display:block');
            $('.cover').attr('style','display:block');
            $('body').attr('style','ovflow:auto');
    
            $('.canel_tb').bind('click',function(event) {
                $('.stockTrmalateb').attr('style','display:none');
                $('.cover').attr('style','display:none');
            });
    
            event.stopPropagation();
        });

})();
