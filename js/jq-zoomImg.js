$(function() {
//	$('#pImgBox>dd>ul>li>img').each(function(i) {
//		$(this).click(function() {
//			$('#currentImg').attr('id', 'img' + i);
//			$(this).attr('id', 'currentImg');
//			$('.bigimg').attr('src', $(this).attr('bigSrc'));
//			$('.bigimg').attr('zoomSrc', $(this).attr('zoomSrc'));
//		});
//	});

	function mouseover(e) {
		changeViewImg();
		if ($(".sm-box").css("display") == "none") {
			$(".sm-box,.big-box").show();
		}
		$(".sm-box").css(fixedPosition(e));
		e.stopPropagation();
	}

	function mouseOut(e) {
		if ($(".sm-box").css("display") != "none") {
			$(".sm-box,.big-box").hide();
		}
		e.stopPropagation();
	}

	function changeViewImg() {
		var bigImgSrc = $(".bigimg").attr("zoomSrc");
		$(".big-box img").attr("src", bigImgSrc);
	}

	$(".big-img").mouseover(mouseover);
	$(".big-img,.sm-box").mousemove(mouseover).mouseout(mouseOut);
	var selectorWidth = $(".sm-box").width(), //选择器宽度
		selectorHeight = $(".sm-box").height(), //选择器高度
		midImgWidth = $(".bigimg").width(), //中图宽度
		midImgHeight = $(".bigimg").height(), //中图高度
		bigImgWidth = null,
		bigImgHeight = null,
		viewBoxHeight = null;
	$(".big-box").scrollLeft(0).scrollTop(0);

	function fixedPosition(e) {
		if (e == null) {
			return;
		}
		var imgLeft = $(".bigimg").offset().left-55, //中图左边距
			imgTop = $(".bigimg").offset().top-55, //中图上边距
			X = e.pageX - imgLeft - selectorWidth / 2, //selector顶点坐标 X
			Y = e.pageY - imgTop - selectorHeight / 2; //selector顶点坐标 Y

		X = X < 0 ? 0 : X;
		Y = Y < 0 ? 0 : Y;
		X = (X + selectorWidth) > $(".big-img").width() ? $(".big-img").width() - selectorWidth : X;
		Y = (Y + selectorHeight) > $(".big-img").height() ? $(".big-img").height() - selectorHeight : Y;

		if (bigImgWidth == null) {
			bigImgWidth = $(".big-box img").outerWidth();
			bigImgHeight = $(".big-box img").height();
			if (bigImgWidth < 100 || bigImgHeight < 100) {
				bigImgWidth = bigImgHeight = 1500;
			}
			viewBoxHeight = selectorHeight * bigImgHeight / midImgHeight;
		}
		var scrollX = X * bigImgWidth / midImgWidth - 242.65,
			scrollY = Y * bigImgHeight / midImgHeight - 242.65;

		$(".big-box img").css({
			"left": scrollX * -1,
			"top": scrollY * -1
		});

		return {
			left: X,
			top: Y
		};
	}
});