var ok=false,ok2=false,ok3=false,ok4=false,ok5=false;
$('form :input').blur(function() { //为表单元素添加失去焦点事件
	var $parent = $(this).parent();
	$parent.find(".formtips").remove(); // 删除以前的提醒元素
	//验证用户名
	var existUser  = 'test123'; //自定义信息，由ajax提取信息补上
	if ($(this).is('.u1')) {
		if (this.value == "" || !/^(?!_)(?!.*?_$)[0-9a-zA-Z][a-zA-Z0-9_]{3,20}$/.test(this.value)) {
			var errorMsg = '&nbsp<img src="img/false.png"/> 请输入4-20位字符的用户名.';
			$parent.append('<span class="formtips onError">'+errorMsg+'</span>');
		} else if ($('#form .u1').val() != existUser) {
			var okMsg = '&nbsp<img src="img/true.png"/> 输入正确.';
			$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
			ok=true;
		} else{
			var existUMsg = '&nbsp<img src="img/false.png"/> 用户名已存在.';
			$parent.append('<span class="formtips onError">' + existUMsg + '</span>');
		}
	}
	if ($(this).is('.u2')) {
		if (this.value == "" || this.value.length < 6) {
			var errorMsg = '&nbsp<img src="img/false.png"/> 请输入至少6位的用户名.';
			$parent.append('<span class="formtips onError">'+errorMsg+'</span>');
		} else if ($('#form .u2').val() != existUser) {
			var okMsg = '&nbsp<img src="img/true.png"/> 输入正确.';
			$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
		} else{
			var existUMsg = '&nbsp<img src="img/false.png"/> 用户名已存在.';
			$parent.append('<span class="formtips onError">' + existUMsg + '</span>');
		}
	}
	//验证手机号码
	var existTel = '13100000000';
	if($(this).is('.ph1')) {
		if(this.value == "") {
			var nullMsg = '&nbsp<img src="img/false.png"/> 必填.';
			$parent.append('<span class="formtips onError">' + nullMsg + '</span>');
		} else if(this.value != "" && !/^1[3|4|5|7|8]\d{9}$/.test(this.value)) {
			var errorMsg = '&nbsp<img src="img/false.png"/> 请输入正确的手机号码.';
			$parent.append('<span class="formtips onError">' + errorMsg + '</span>');
		} else {
			if ($('.ph1').val() == existTel) {
				var existMsg = '&nbsp<img src="img/false.png"/> 该手机号码已被注册.';
				$parent.append('<span class="formtips onError">' + existMsg + '</span>');
			} else{
				var okMsg = '&nbsp<img src="img/true.png"/> 输入正确.';
				$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
			}
		}
	}
	if($(this).is('.ph2')) {
		if(this.value == "") {
			var nullMsg = '&nbsp<img src="img/false.png"/> 必填.';
			$parent.append('<span class="formtips onError">' + nullMsg + '</span>');
		} else if(this.value != "" && !/^1[3|4|5|7|8]\d{9}$/.test(this.value)) {
			var errorMsg = '&nbsp<img src="img/false.png"/> 请输入正确的手机号码.';
			$parent.append('<span class="formtips onError">' + errorMsg + '</span>');
		} else {
			if ($('.ph2').val() == existTel) {
				var existMsg = '&nbsp<img src="img/false.png"/> 该手机号码已被注册.';
				$parent.append('<span class="formtips onError">' + existMsg + '</span>');
			} else{
				var okMsg = '&nbsp<img src="img/true.png"/> 输入正确.';
				$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
			}
		}
	}
	//验证新密码
	if($(this).is('.ppwd')) {
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
	if($(this).is('.ppwd2')) {
		if(this.value == "" || (this.value != "" && this.value != $(".ppwd").val())) {
			var errorMsg = '&nbsp<img src="img/false.png"/> 两次密码不一样.';
			$parent.append('<span class="formtips onError">' + errorMsg + '</span>');
		} else {
			var okMsg = '&nbsp<img src="img/true.png"/> 密码一致.';
			$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
		}
	}
	if($(this).is('.cpwd')) {
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
	if($(this).is('.cpwd2')) {
		if(this.value == "" || (this.value != "" && this.value != $(".cpwd").val())) {
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
	var existEmail = '123@qq.com';
	if ($(this).is('#email')) {
		if (this.value == "" || (this.value != "" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value))) {
			var errorMsg = '&nbsp<img src="img/false.png"/> 请输入正确的Email地址.';
			$parent.append('<span class="formtips onError">'+errorMsg+'</span>');
		} else{
			if ($('#email').val() == existEmail) {
				var existMsg = '&nbsp<img src="img/false.png"/> 该邮箱已被注册.';
				$parent.append('<span class="formtips onError">' + existMsg + '</span>');
			} else{
				var okMsg = '&nbsp<img src="img/true.png"/> 输入正确.';
				$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
			}
		}
	}
}).keyup(function() { //实时提醒
	$(this).triggerHandler("blur");
}).focus(function() {
	$(this).triggerHandler("blur");
});
//验证条款是否打勾
//$('.selected').css("display", "none");
//$('.selected2').css("display", "none");
$('#acceptItem').click(function() {
	if(!($(this).is(":checked"))) {
		$('#submit').attr("disabled", "flase");
		$('#submit').css("background","grey");
	} else {
		$('#submit').removeAttr("disabled");
		$('#submit').css("background","#ff8a00");
	}
});
$('.acceptItem').click(function() {
	if(!($(this).is(":checked"))) {
		$('.submit').attr("disabled", "flase");
		$('.submit').css("background","grey");
	} else {
		$('.submit').removeAttr("disabled");
		$('.submit').css("background","#ff8a00");
	}
});
$(function(){
	$("#form").submit(function(){
    var name = $("#form input[type='text']").val();
    var name2  = $("#form input[type='password']").val();
    if(!$.trim(name) || (!$.trim(name2))){
        $('.tips').text(' 不能为空');
        return false;
    }
    if ($(this).contains('onError')) {
        $('.tips').text(' 填写信息有误，请修改');
       	return false;
    }
 	});
 });
$(function(){
	$("#form2").submit(function(){
        var name3 = $("#form2 input[type='text']").val();
        var name4 = $("#form2 input[type='file']").val();
        var name5 = $("#form2 input[type='password']").val();
        if(!$.trim(name3) || (!$.trim(name4)) || (!$.trim(name5))){
            $('.tips2').text(' 不能为空');
            return false;
       }
         if ($(this).contains('onError')) {
       		 $('.tips2').text(' 填写信息有误，请修改');
       		return false;
       }
   });
})
