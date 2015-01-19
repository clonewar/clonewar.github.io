webTitle = "Java勉強会用";
subTitle = new Array(
	"インストール編",
	"基礎知識編",
	"コンパイルと実行",
	"オブジェクト編",
	"準備中"
);

function outputTitle(mainCnt , subCnt){
	if (mainCnt == 0){
		document.write(webTitle);
	}else if(mainCnt != 0 && subCnt < 5){
		document.write(subTitle[subCnt]);
	}else{
		document.write("要素の指定に誤りがあります");
	}
}