//1.$.each()：遍历数组或对象中的数据
var obj = {
    name: 'tome',
    setName: function () {
        this.name = name
    }
};
$.each(obj, function (key, value) {
    console.log(key, value);
});

console.log($.type(obj));
console.log(typeof (obj));
//2.$.trim():去除字符串两边的空格

//3.$.type(obj):得到数据的类型
console.log($.type(obj));
console.log(typeof (obj));
//4.$.isArray(obj):判断是否是数组
console.log($.isArray([]));
//5.$.isFunction(obj):判断是否是函数
console.log($.isFunction(obj.setName()));
//6.$.parseJSON(json):判断json字符串转换为js对象/数组
var json = '{"name":"tome","age":12}';//json字符串
var jsonObj = {"name":"tome","age":12};//json对象
var jsonArr = '[{"name":"tome","age":12},{"name":"tome","age":12}]';//json对象
console.log(typeof(json))
console.log(typeof(jsonObj))
console.log(typeof(jsonArr))
console.log($.parseJSON(json))
console.log($.parseJSON(jsonArr))
console.log(JSON.parse(json))//json字符串转js对象或数组
console.log(JSON.stringify(obj))//js对象或数组转json字符串