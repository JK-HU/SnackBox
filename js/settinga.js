(function() {
    // 是否开启
    $('.lsjg').bind('click',function() {
        if ($(this).attr('data-lsFlag') == 'false') {
            $(this).attr('style','color:#2ecc71;margin-left:16%');
            $(this).find('i').attr('style','color:#2ecc71');
            $(this).attr('data-lsFlag','true');
            return false;
        }
        if ($(this).attr('data-lsFlag') == 'true') {
            $(this).attr('style','color:#333;margin-left:16%');
            $(this).find('i').attr('style','color:#333');
            $(this).attr('data-lsFlag','false');
            return false;
        }
    });

    // 是否主动补货
    $('.zdbh').bind('click',function() {
        if ($(this).attr('data-lsFlag') == 'false') {
            $(this).attr('style','color:#2ecc71;margin-left:16%');
            $(this).find('i').attr('style','color:#2ecc71');
            $(this).attr('data-lsFlag','true');
            return false;
        }
        if ($(this).attr('data-lsFlag') == 'true') {
            $(this).attr('style','color:#333;margin-left:16%');
            $(this).find('i').attr('style','color:#333');
            $(this).attr('data-lsFlag','false');
            return false;
        }
    });

    // 是否营业
    $('.yy').bind('click',function() {
        if ($(this).attr('data-lsFlag') == 'false') {
            $(this).attr('style','color:#2ecc71;margin-left:16%');
            $(this).find('i').attr('style','color:#2ecc71');
            $(this).attr('data-lsFlag','true');
            return false;
        }
        if ($(this).attr('data-lsFlag') == 'true') {
            $(this).attr('style','color:#333;margin-left:16%');
            $(this).find('i').attr('style','color:#333');
            $(this).attr('data-lsFlag','false');
            return false;
        }
    });

    $('.save_mess').bind('click',function() {

    });


})();