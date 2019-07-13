(function () {
    // 点击促销,变色
    $('.cx').bind('click',function() {
        if ($('.lsjg').attr('data-lsFlag') == 'false') {
            $(this).attr('style','color:#2ecc71');
            $(this).find('i').attr('style','color:#2ecc71');
            $('.lsjg').attr('data-lsFlag','true');
            return false;
        }
        if ($('.lsjg').attr('data-lsFlag') == 'true') {
            $(this).attr('style','color:#333');
            $(this).find('i').attr('style','color:#333');
            $('.lsjg').attr('data-lsFlag','false');
            return false;
        }
    });

    // 零售价格,变色
    $('.lsjg').bind('click',function() {
        if ($('.lsjg').attr('data-lsFlag') == 'false') {
            $(this).attr('style','color:#2ecc71');
            $(this).find('i').attr('style','color:#2ecc71');
            $('.lsjg').attr('data-lsFlag','true');
            return false;
        }
        if ($('.lsjg').attr('data-lsFlag') == 'true') {
            $(this).attr('style','color:#333');
            $(this).find('i').attr('style','color:#333');
            $('.lsjg').attr('data-lsFlag','false');
            return false;
        }
    });
 
    //点击选择商品图 边框变色 commodityImgli
    $('.commodityImg').on('click','.commodityImgli',function() {
        $(this).attr('style','border:1px solid #dc2424');
        $(this).siblings().attr('style','border:1px solid #eee');

        let imgSrc = $(this).find('img').attr('src');
        $('.choiceImg').attr('src',imgSrc);

    });


    

})();