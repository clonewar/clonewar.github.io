 myJpeg = new Array(
 // �摜��URL, �^�C�g��, �摜�̕�, �摜�̍���
 "images/install/1.JPG", "InstallImage1", 1000, 800,
 "images/install/2.JPG", "InstallImage2", 1000, 800,
 "images/install/3.JPG", "InstallImage3",  500, 400,
 "images/install/4.JPG", "InstallImage4",  500, 400,
 "images/install/5.JPG", "InstallImage5",  600, 400,
 "images/install/6.JPG", "InstallImage6",  500, 400,
 "images/setting/1.JPG", "SettingImage1", 1000, 800,
 "images/setting/2.JPG", "SettingImage2",  600, 400,
 "images/setting/3.JPG", "SettingImage3",  600, 400,
 "images/setting/4.JPG", "SettingImage4",  600, 400,
 "images/setting/5.JPG", "SettingImage5",  600, 400,
 "images/setting/6.JPG", "SettingImage6",  600, 400,
 "images/setting/7.JPG", "SettingImage7",  800, 500,
 "images/setting/8.JPG", "SettingImage8",  800, 500
 );

 function myGo(myTblNo){
      myAry = myTblNo * 4; // �z��̐擪
      myXX=myJpeg[myAry+2]; // �E�B���h�E����
      myYY=myJpeg[myAry+3]; // �E�B���h�E�c��
      myWinName = "Win" + myTblNo; // �E�B���h�E��
      myWinSize = "resizable=yes,width=" + myXX + ",height=" + myYY; // �E�B���h�E�I�v�V����
      myWin = window.open("" , myWinName , myWinSize); // �E�B���h�E���J��
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
