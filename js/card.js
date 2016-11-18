/**
 * Created by huaxin on 2016/5/4.
 */
$(document).ready(function(){
    $('.chaxun input').click(function(){
        var i=$('.chaxun input').index(this);
        $('.detail ul').eq(i).show().siblings().hide();
    })
});
