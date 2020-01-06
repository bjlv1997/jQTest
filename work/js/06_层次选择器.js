//1.选中ul所有的span
// $("ul span").css("background","red");

//2.选中url下所有的子元素span
// $("ul>span").css("background","red");

//3.选中class为box的下一个li
// $(".box+li").css("background","red");

//4.选中url下的class为box的元素后面的所有兄弟元素
$("ul .box~*").css("background","red");
