//1.1当DOM加载完成后，执行此回调函数
$(function () {//绑定文档加载完成的监听
    $("#btn").click(function () {
        // alert(this.innerHTML);
        console.log('js方法获取：'+this.innerHTML)
        alert($(this).html());
        console.log('jQ方法获取：'+$(this).html())
        $('<input type="text" name="msg3"><br>').appendTo('div');
    });
})

//遍历数组中所有元素
//1.$.each():隐式遍历数组
var arry = [1,4,3];
$.each(arry,function (index,item) {
    console.log("第"+index+"元素："+item);
})

//2.$.trim():去除两端的空格
var a = '  abcd  efg  ';
console.log('------'+a.trim()+'-----');
console.log('----'+$.trim(a)+'----');
console.log('----------');
console.log("+++++++++++")