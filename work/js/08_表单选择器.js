//1.选择不可用的文本输入框
//$(':text:disabled').css('background','red');

//2.显示选择爱好的个数
console.log($(':checkbox:checked').length,$(':checkbox:checked')[0]);

//3.显示选择的城市名称
$(':submit').click(function(){
   var city = $('select>option:selected').html();//选择的option的标签体文本
   city=$('select').val();//选择的option的value的属性值
   alert(city);
});