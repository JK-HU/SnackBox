(function() {
    // 点击未查
    $('.con').on('click','.product_r_state',function(event) {
        var cur_comondity_id = $(this).parent().parent().parent().attr('data-commodid'); //点击查看这个商品的id
        $.post('url',{cur_comondity_id:cur_comondity_id},function(data) {
            
        });
        /**
         * 
         if ($(this).attr('data-lookState') == 'no') {
            $(this).attr('style','background-color:#3498DB');
            $(this).attr('data-lookState','yes'); 
            $(this).text('已查');
            return false;  
        }
         * */

        event.stopPropagation();
        
        
    });

    $('.pdian').bind('click',function() {
        //查看盘点的时候要先去检查一下有多少商品未查(), 已弹框的形式 提示还有多少没有查看
        let stataArr = [];
        // console.log($('.product_r_state').attr('data-lookState'))
        
        let product_r_state = $('.product_r_state');
        for ( let i = 0 ; i < product_r_state.length ; i++) {
            //检查有多少商品是没有检查的状态
            if ($('.product_r_state').eq(i).attr('data-lookState') == 'no') {
                stataArr.push($('.product_r_state').eq(i).attr('data-lookState'))
            }
        }

        $('.noPdian').text(stataArr.length);
        $('.card').attr('style','display: block');
        $('.cover').attr('style','display: block');
        
        $('.cancel').click(function() {
            $('.card').attr('style','display: none');
            $('.cover').attr('style','display: none');
        });
        $('.determine').click(function() {
            $('.card').attr('style','display: none');
            $('.cover').attr('style','display: none');
            // window.location.href='pdian.html';
        });

    });


    // 加 盘点 add_i
    $('.con').on('click','.add_i',function(event) {
        // console.log($(this).siblings('.add_product_text'))
        let productNum = parseInt($(this).siblings('.add_product_text').text());
        console.log(productNum)
        productNum++;
        $(this).next().text(productNum);

        event.stopPropagation();
    });

    // 减 盘点 reduce_i
    $('.con').on('click','.reduce_i',function(event) {
        let productNum = parseInt($(this).siblings('.add_product_text').text());
        productNum--;
        if (productNum <= 0){
            productNum = 0
        }
         
        $(this).prev().text(productNum);

        event.stopPropagation();
    });

    


})();