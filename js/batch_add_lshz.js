(function() {
    $('.batch_btn').bind('click',function() {
        let batchArr = [];
        let temp = [];  //临时数组
        let batchVlaue = $('#batch_add_lshz').val();
        batchArr  = batchVlaue.split(",");

        for ( let i = 0 ; i < batchArr.length ; i++ ) {
            if (temp.indexOf(batchArr[i]) == -1) {
                temp.push(batchArr[i]);
            }else {
                alert('命名重复了,请检查');
                return false;
            }
        } 
        
        /**
        $.ajax({
            url : '',
            data : {
                temp : temp
            },
            type : "POST",  
            success : function(e) {
                console.log(e)
            },
            error : function() {}
        })
         * 
         **/
        
        
    });

})();