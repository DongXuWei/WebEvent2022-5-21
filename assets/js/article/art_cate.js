// 文章类别的JS文件
$(function() {
    getCateList();
})

//1、获取文章分类列表
function getCateList() {
    $.ajax({
        method: 'GET',
        url: '/my/cate/list',
        success(res) {
            if (res.code !== 0) {
                return layui.layer.msg(res.message)
            }
            //成功  渲染数据要页面 
            let str = template('tpl_table', res);
            $('#tb').html(str);
        }
    })
}