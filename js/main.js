function changeBack(){
 	var chooseColor = document.getElementById("color");
	document.body.style.backgroundColor=chooseColor.options[chooseColor.selectedIndex].value;
}

var btn = document.getElementById('button');
btn.addEventListener('click', chooseFontSizeBtn);
var font = document.getElementById('chooseFont');
var elem = document.getElementsByTagName('p');

function chooseFontSizeBtn() {
	if (font.value < 25 & font.value > 7 ) {
		for (var i = 0; i < elem.length; i++) {
			elem[i].style.fontSize = font.value + 'px'
		}
	}
}

function chooseFontStyle(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    for (var i = 0; i < elem.length; i++) {
		elem[i].style.fontFamily = listValue;
	}
}
$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
		if($('#nav-icon1').hasClass('open')) {
			$(".sideBar").stop(true, true).animate({
				right: 0,
				opacity: 1
			},250)
		} else {
			$(".sideBar").stop(true, true).animate({
				right: "-50px",
				opacity: 0
			},200)
			
		}
	});
	$("#deleteLast").click(function(){
		$(".openP").toggleClass('close');
		if($(".openP").hasClass('close')) {
			$("#deleteLast").attr('value', 'Add');
		} else {
			$("#deleteLast").attr('value', 'Delete');
		}
	});
});