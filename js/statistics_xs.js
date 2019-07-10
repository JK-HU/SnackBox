(function () {

    // 查询日期
    $('.query_date').bind('click',function() {
        $('.start_date_ipt').val(); //开始日期
        $('.end_date_ipt').val(); //结束日期
        ajax_queryDate();
    });
    
    // 查询日期发送请求, 这里没查询一次,整个页面的数据都要改变
    function ajax_queryDate() {
        $.ajax({
            url : '',
            data : {

            },
            success : function() {},
            error : function() {}
        });
    }
    

})();