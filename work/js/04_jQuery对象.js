//1.统计一共有几个按钮
var $btns = $('button');
console.log($btns.length,$btns.size());
//2.取出第二个button的文本
console.log($btns[1].innerHTML,$btns.get(1).innerHTML);
//3.输出所有button标签的文本
$.each($btns,function (index,iteam) {
    console.info(index,iteam.innerHTML,this);
})
$btns.each(function (index,domEle) {
    console.info(index,domEle.innerHTML,this);
})

//this 是DOM元素
$btns.each(function () {
    console.log(this);
})


//4.输出‘测试三’按钮是所有按钮中的第几个
console.log($('#test3').index());

console.log($btns instanceof Object);

var weiArr= {};
weiArr.length=0;
weiArr[0]='123';
weiArr.length=1;
weiArr[1]='nanjing';
console.log(weiArr.length);
for (var i = 0;i<=weiArr.length;i++){
    var obj = weiArr[i];
    console.log(i,obj);
}

console.log(weiArr.forEach)