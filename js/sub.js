 myJpeg = new Array(
 // 画像のURL, タイトル, 画像の幅, 画像の高さ
 "images/install/1.jpg", "InstallImage1", 1000, 800,
 "images/install/2.jpg", "InstallImage2", 1000, 800,
 "images/install/3.jpg", "InstallImage3",  500, 400,
 "images/install/4.jpg", "InstallImage4",  500, 400,
 "images/install/5.jpg", "InstallImage5",  600, 400,
 "images/install/6.jpg", "InstallImage6",  500, 400,
 "images/setting/1.jpg", "SettingImage1", 1000, 800,
 "images/setting/2.jpg", "SettingImage2",  600, 400,
 "images/setting/3.jpg", "SettingImage3",  600, 400,
 "images/setting/4.jpg", "SettingImage4",  600, 400,
 "images/setting/5.jpg", "SettingImage5",  600, 400,
 "images/setting/6.jpg", "SettingImage6",  600, 400
 );

 function myGo(myTblNo){
      myAry = myTblNo * 4; // 配列の先頭
      myXX=myJpeg[myAry+2]; // ウィンドウ横幅
      myYY=myJpeg[myAry+3]; // ウィンドウ縦幅
      myWinName = "Win" + myTblNo; // ウィンドウ名
      myWinSize = "resizable=yes,width=" + myXX + ",height=" + myYY; // ウィンドウオプション
      myWin = window.open("" , myWinName , myWinSize); // ウィンドウを開く
      myWin.document.open();
      myWin.document.write( "<html>" );
      myWin.document.write( "<head>" );
      myWin.document.write( "<title>", myJpeg[myAry+1] , "</title>" );
      myWin.document.write( "</head>" );
      myWin.document.write( "<body style='margin:0px;padding:0px'>" );
      myWin.document.write( "<img src='" , myJpeg[myAry] , "'>" );
      myWin.document.write( "</body>" );
      myWin.document.write( "</html>" );
      myWin.document.close();
 }
