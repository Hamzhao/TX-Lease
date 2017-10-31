$('form :input').blur(function() { //为表单元素添加失去焦点事件
	var $parent = $(this).parent();
	$parent.find(".formtips").remove(); // 删除以前的提醒元素
	//验证用户名
	if ($(this).is('#username')) {
		if (this.value == "" || this.value.length < 6) {
			var errorMsg = '&nbsp<img src="img/false.png"/> 请输入至少6位的用户名.';
			$parent.append('<span class="formtips onError">'+errorMsg+'</span>');
		} else{
			var okMsg = '&nbsp<img src="img/true.png"/> 输入正确.';
			$parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
		}
	}
	//验证手机号码
	var existTel = '13100000000';//自定义的一个存在号码
	if($(this).is('#phone')) {
		if(this.value == "") {
			var nullMsg = '&nbsp<img src="img/false.png"/> 必填.';
			$parent.append('<span class="formtips onError">' + nullMsg + '</span>');
		} else if(this.value != "" && !/^1[3|4|5|7|8]\d{9}$/.test(this.value)) {
			var errorMsg = '&nbsp<img src="img/false.png"/> 请输入正确的手机号码.';
			$parent.append('<span class="formtips onError">' + errorMsg + '</span>');
		} else {
			if(this.value != existTel) {
				var nullMsg = '&nbsp<img src="img/false.png"/> 手机号码未注册.';
				$parent.append('<span class="formtips onError">' + nullMsg + '</span>');
			} else {
				var okMsg = '&nbsp<img src="img/true.png"/> 输入正确.';
				$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
			}
		}
	}
	//验证新密码
	if($(this).is('#pwd')) {
		if(this.value == "") {
			var errorMsg = '&nbsp<img src="img/false.png"/> 请输入确认密码.';
			$parent.append('<span class="formtips onError">' + errorMsg + '</span>');
		}
	}
	if($(this).is('#pwd2')) {
		if(this.value == "" || (this.value != "" && this.value != $("#pwd").val())) {
			var errorMsg = '&nbsp<img src="img/false.png"/> 两次密码不一样.';
			$parent.append('<span class="formtips onError">' + errorMsg + '</span>');
		} else {
			var okMsg = '&nbsp<img src="img/true.png"/> 密码一致.';
			$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
		}
	}
	//验证身份证 
	if($(this).is('#idcard')) {
		if(this.value == "" || (this.value != "" && !/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(this.value))) {
			var errorMsg = '&nbsp<img src="img/false.png"/> 请输入正确的身份证号码.';
			$parent.append('<span class="formtips onError">' + errorMsg + '</span>');
		} else {
			var okMsg = '&nbsp<img src="img/true.png"/> 输入正确.';
			$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
		}
	}
	//验证邮箱
	if ($(this).is('#email')) {
		if (this.value == "" || (this.value != "" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value))) {
			var errorMsg = '&nbsp<img src="img/false.png"/> 请输入正确的Email地址.';
			$parent.append('<span class="formtips onError">'+errorMsg+'</span>');
		} else{
			var okMsg = '&nbsp<img src="img/true.png"/> 输入正确.';
			$parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
		}
	}
}).keyup(function() { //实时提醒
	$(this).triggerHandler("blur");
}).focus(function() {
	$(this).triggerHandler("blur");
});
//验证条款是否打勾
$('#acceptItem').click(function() {
	if(!($(this).is(":checked"))) {
		$('#submit').attr("disabled", "flase");
		$('#submit').css("background","grey");
	} else {
		$('#submit').removeAttr("disabled");
		$('#submit').css("background","#ff8a00");
	}
});
$(function(){
    $(".form form").submit(function(){
        var name = $(".form form input[type='text']").val();
        if(!$.trim(name) || ($('span').is(".onError"))){
            alert('有空值或者填写内容有错');
            return false;
       }
   });
})