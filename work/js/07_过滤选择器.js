//1.选择第一个div
//$('div:first').css('background','red');

//2.选择最后一个div
//$('div:last').css('background','red');

//3.选择所有class属性中不为box的div
//$('div:not(.box)').css('background','red');

//4.选择第二个和第三个li元素
//gt是大于，lt是小于
//多个过滤器不是同时执行的，而是依次执行的
//$('li:gt(0):lt(2)').css('background','red');

//5.选择的内容为BBBBBB的li
//$('li:contains("BBBBBB")').css('background','red');

//6.选择隐藏的li
//$('li:hidden').css('background','red');
console.log($('li:hidden').length,$('li:hidden')[0].innerHTML);

//7.选择有title属性的li元素
//$('li[title]').css('background','red');

//8.选择所有属性title为hello的li元素
$('li[title="hello"]').css('background','red');