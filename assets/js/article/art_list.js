// 文章列表的JS文件
$(function() {
    select();
    //1、渲染下拉列表
    function select() {
        $.ajax({
            method: 'GET',
            url: '/my/cate/list',
            success(res) {
                if (res.code !== 0) {
                    return layui.layer.msg(res.message)
                }
                let str = template('tpl-cate', res)
                $('[name=cate_id]').html(str);
                //内置方法渲染
                layui.form.render();
            }
        })
    }



    let data = {
        pagenum: 1,
        pagesize: 2,
        cate_id: '',
        state: ''
    }
    initTable();
    //2、渲染列表
    function initTable() {
        //发起请求渲染
        $.ajax({
            method: 'GET',
            url: '/my/article/list',
            data,
            success(res) {
                if (res.code !== 0) {
                    return layui.layer.msg(res.message)
                }
                //成功
                let str = template('tpl-table', res)
                $('tbody').html(str);
                layui.form.render();
            }
        })
    }
})