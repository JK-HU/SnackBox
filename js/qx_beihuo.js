(function() {

    //补回仓库
    $('.bh_ck').bind('click',function() {
        let jzId = $(this).parent().attr('data-hzId');
        $('.cover').attr('style','display:block');
        $('.alertCard').attr('style','display:block');

        $('.cancel').click(function() {
            $('.cover').attr('style','display:none');
            $('.alertCard').attr('style','display:none')
        });
        $('.true').click(function() {
            $('.cover').attr('style','display:none');
            $('.alertCard').attr('style','display:none')
            hzIdFun(jzId);
        });

    });

    //不用备货
    $('.by_bh').bind('click',function() {
        let jzId = $(this).parent().attr('data-hzId');
        noBeiHuo(jzId);
    }); 

    
    // 将盒子id传给后台
    function hzIdFun (jzId) {
        $.ajax({
            url : '',
            data : {
                jzId : jzId
            }
            
        })
    }

    //不用备货方法
    function noBeiHuo(jzId){
        $.ajax({
            url : '',
            data : {
                jzId : jzId
            }
            
        })
    }


})();