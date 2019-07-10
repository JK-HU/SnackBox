(function() {
    // 点击删除
    $('.con').on('click','.product_r_delete',function() {

        let cur_comondity_id = $(this).parent().parent().parent().attr('data-commodid'); //点击查看这个商品的id
        console.log(cur_comondity_id)
        $('.card').attr('style','display:block');
        $('.cover').attr('style','display:block');
        
        
        $('.cancel').bind('click',function() {
            $('.card').attr('style','display:none');
            $('.cover').attr('style','display:none');
        });
        $('.true').bind('click',function() {
            
           $.ajax({
               url : '',
               data : {
                cur_comondity_id : cur_comondity_id
               },
               type : "POST",
               success : function() {
                $('.card').attr('style','display:none');
                $('.cover').attr('style','display:none');
               },
               error : function() {
                   alert('删除失败!');
               }
           })
        });
    });


})();