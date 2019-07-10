(function() {
    // 点击批量操作-显示
    // 显示状态

    $('.batchOperation').bind('click',function(event) {
        if ($('.batchOperation').attr('data-plType') == 'true') {
            $('.bindIcon').attr('style','display:none');
            $('.batchOperation').attr('data-plType','false');
            $('.AllElection').attr('style','display:none');
            $('.batch').attr('style','display:none')

            return false;
        }
        if ($('.batchOperation').attr('data-plType') == 'false') {
            $('.bindIcon').attr('style','display:block');
            $('.AllElection').attr('style','display:inline-block');
            $('.batchOperation').attr('data-plType','true');
            $('.batch').attr('style','display:block')
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

    // // 全选
    // $('.AllElection').bind('click',function() {
    //     $('.bindIcon').attr('display','display:block');
    // });

    // 删除
    $('.con').on('click','.delete_product',function() {
        $('.cover').attr('style','display:block');
        $('.confirm').attr('style','display:block');
        var commonitty_this = $(this); //当前点击删除的按钮
        var commonitty_this_id = $(this).parent().parent().parent().attr('data-id'); //当前删除按钮的商品ID
        console.log($(this));
        
        // 取消
        $('.confirm_cancel').bind('click',function(event) {
            $('.cover').attr('style','display:none');
            $('.confirm').attr('style','display:none');
            event.stopPropagation();
        });

        // 确认
        $('.confirm_confirm').bind('click',function(event) {
            $('.cover').attr('style','display:none');
            $('.confirm').attr('style','display:none');

            //执行删除请求
            $.post('url',{deteleCommonittyId:commonitty_this_id},function(data,status) {});
            event.stopPropagation();
        });

    });

   


})();