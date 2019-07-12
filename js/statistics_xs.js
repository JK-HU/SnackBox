(function () {

    // 查询日期
    $('.query_date').bind('click',function() {
        let startTime = $('.start_date_ipt').val(); //开始日期时间戳
        let endTime = $('.end_date_ipt').val() //结束日期时间戳

        var begintime = new Date(Date.parse($('.start_date_ipt').val().replace(/-/g,   "/"))).getTime();  
        var endtime = new Date(Date.parse($('.end_date_ipt').val().replace(/-/g,   "/"))).getTime();     
        var nTime = endtime - begintime;  
        var day = Math.floor(nTime/86400000); //相差天数

       
        if(startTime > endTime) {
            alert('开始日期不能大于结束日期');
            return false;
        }
       
        if( day > 30 ){
            alert('日期最大间隔30天');
            return false;
        }


        // ajax_queryDate();
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

