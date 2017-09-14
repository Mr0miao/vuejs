/* 转换 int 类型 */
Vue.filter("int", {
	read : function (value) {
		return parseInt(value);
	},
	write : function (value) {
		return parseInt(value);
	}
});

/* 转换 float 类型 */
Vue.filter("float", {
	read : function (value) {
		return parseFloat(value);
	},
	write : function (value) {
		return parseFloat(value);
	}
});