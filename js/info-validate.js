$('form :input').blur(function() { //为表单元素添加失去焦点事件
	var $parent = $(this).parent();
	$parent.find(".formtips").remove(); // 删除以前的提醒元素
	//验证用户名
	var existUser  = 'test123';
	if($(this).is('#user')) {
		if(this.value == "" || this.value.length < 6) {
			var errorMsg = '&nbsp<img src="img/false.png"/> 请输入至少6位的用户名.';
			$parent.append('<span class="formtips onError">' + errorMsg + '</span>');
		} else {
			if ($('#user').val() != existUser) {
				var okMsg = '&nbsp<img src="img/true.png"/> 输入正确.';
				$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
			} else{
				var existUMsg = '&nbsp<img src="img/false.png"/> 用户名已存在.';
				$parent.append('<span class="formtips onError">' + existUMsg + '</span>');
		}
		}
	}

	//验证手机号码
	var existTel = '13100000000';
	if($(this).is('#phone')) {
		if(this.value == "") {
			var nullMsg = '&nbsp<img src="img/false.png"/> 必填.';
			$parent.append('<span class="formtips onError">' + nullMsg + '</span>');
		} else if(this.value != "" && !/^1[3|4|5|7|8]\d{9}$/.test(this.value)) {
			var errorMsg = '&nbsp<img src="img/false.png"/> 请输入正确的手机号码.';
			$parent.append('<span class="formtips onError">' + errorMsg + '</span>');
		} else {
			if ($('#phone').val() == existTel) {
				var existMsg = '&nbsp<img src="img/false.png"/> 该手机号码已被注册.';
				$parent.append('<span class="formtips onError">' + existMsg + '</span>');
			} else{
				var okMsg = '&nbsp<img src="img/true.png"/> 输入正确.';
				$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
			}
		}
	}
	//详细地址不为空
	if($(this).is('#address')) {
		if(this.value == "" || this.value.length < 8) {
			var nullMsg = '&nbsp<img src="img/false.png"/> 详细地址不少于8字.';
			$parent.append('<span class="formtips onError">' + nullMsg + '</span>');
		} else {
			var okMsg = '&nbsp<img src="img/true.png"/> 输入正确.';
			$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
		}
	}
	//验证身份证 
	if($(this).is('#idcard')) {
		if(this.value == "" || (this.value != "" && !/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(this.value))) {
			var errorMsg = '&nbsp<img src="img/false.png"/> 请输入正确的身份证号码.';
			$parent.append('<span class="formtips onError">' + errorMsg + '</span>');
		} else {
			var okMsg = '&nbsp<img src="img/true.png"/> 输入正确.';
			$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
		}
	}
	//验证邮箱
	var existEmail = '123@qq.com';
	if($(this).is('#email')) {
		if(this.value == "" || (this.value != "" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value))) {
			var errorMsg = '&nbsp<img src="img/false.png"/> 请输入正确的Email地址.';
			$parent.append('<span class="formtips onError">' + errorMsg + '</span>');
		} else {
			if ($('#email').val() == existEmail) {
				var existMsg = '&nbsp<img src="img/false.png"/> 该邮箱已被注册.';
				$parent.append('<span class="formtips onError">' + existMsg + '</span>');
			} else{
				var okMsg = '&nbsp<img src="img/true.png"/> 输入正确.';
				$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
			}
		}
	}

	//验证新密码
	if($(this).is('#newpwd')) {
		if(this.value == "") {
			var nullMsg = '&nbsp<img src="img/false.png"/> 请输入密码.';
			$parent.append('<span class="formtips onError">' + nullMsg + '</span>');
		}else if(this.value != "" && !/^[0-9A-Za-z#@!~%^&*.]{6,20}$/.test(this.value)){
			var errorMsg = '&nbsp<img src="img/false.png"/> 由6-20个数字、字母或符号组成.';
			$parent.append('<span class="formtips onError">' + errorMsg + '</span>');
		}else{
				var okMsg = '&nbsp<img src="img/true.png"/>';
				$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
		}
	}
	if($(this).is('#confirmpwd')) {
		if(this.value == "" || (this.value != "" && this.value != $("#newpwd").val())) {
			var errorMsg = '&nbsp<img src="img/false.png"/> 两次密码不一样.';
			$parent.append('<span class="formtips onError">' + errorMsg + '</span>');
		} else {
			var okMsg = '&nbsp<img src="img/true.png"/> 密码一致.';
			$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
		}
	}
}).keyup(function() { //实时提醒
	$(this).triggerHandler("blur");
}).focus(function() {
	$(this).triggerHandler("blur");
});
$(function(){
    $(".info").submit(function(){
        var name = $(".info input[type='text']").val();
        if(!$.trim(name)){
            $('.tips1').text(' 不能为空');
            return false;
       }
       if ($(".info .int span").hasClass("onError")) {
       		 $('.tips1').text(' 填写信息有误');
       		return false;
       }
       $('.tips1').text('保存成功').css("color","#999");
   });
})
$(function(){
	$(".changepwd").submit(function(){
        var name3 = $(".changepwd input[type='text']").val();
        var name4 = $(".changepwd input[type='password']").val();
        if(!$.trim(name3) || (!$.trim(name4))){
            $('.tips2').text(' 不能为空');
            return false;
       }
         if ($(".changepwd .int span").hasClass("onError")) {
       		 $('.tips2').text(' 填写信息有误');
       		return false;
       }
       $('.tips2').text('修改成功').css("color","#999");
   });
})