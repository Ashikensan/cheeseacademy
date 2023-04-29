function ScrollTimelineAnime(){
	$('.timeline li').each(function(){// それぞれのli要素の
		var elemPos = $(this).offset().top;// 上からの高さ取得
		var scroll = $(window).scrollTop();// スクロール値取得
		var windowHeight = $(window).height();// windowの高さ取得
		var startPoint = 100; //線をスタートさせる位置を指定※レイアウトによって調整してください
		if (scroll >= elemPos - windowHeight-startPoint){				
			var H = $(this).outerHeight(true)//liの余白と高さを含めた数値を取得
			//スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
			var percent = (scroll+startPoint - elemPos) / (H/2) *100;//liの余白と高さの半分で線を100％に伸ばす

			// 100% を超えたらずっと100%を入れ続ける
			if(percent  > 100){
				percent  = 100;
			}
			// ボーダーの長さをセット
			$(this).children('.border-line').css({
				height: percent + "%", //CSSでパーセント指定
			});
		} 
	});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).on('scroll', function(){
	ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
	ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
});


// alert("ABC"); 
// console.log("テスト") 
// console.log("テスト1")
// console.log("テスト２")

// let name1 = "あいううえお"
// let age1 = 111

// let sei = "あしかり"
// let mei = "けんじ"
// let name = sei + " " + mei;
// alert(name);

// let i_1 = 1;
// let c_2 = 10;
// c_2 = 1000;
// let add = i_1 + c_2;
// alert(add);

// let s1 = 1 + 1;
// let s2 = 10 - 100;
// let s3 = 3 * 3;
// let s4 = 30 / 3;
// console.log(s1);
// console.log(s2);
// console.log(s3);
// console.log(s4);

// let n = 1;
// // n = n + 10;
// n += 10;
// n += 10;
// alert(n);

// let a = "正解"
// let b = "間違い"
// if(a=1){
// 	console.log("正解")
// }

const a= 9;
if(a==10){
	alert("10だよ");
}else if(a==11){
	alert("11だよ");
}else if(a==12){
	alert("12だよ");
}else{
	alert("それいがい");
}