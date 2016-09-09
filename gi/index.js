/**
 * Created by akke on 2016/4/20.
 */
var s1 = new createjs.Stage("kamui");
var m1 = new createjs.Bitmap("gl_2.jpg");
var text = new createjs.Text("GREED ISLAND", "80px Arial", "#3A73FF");
var text1 = new createjs.Text("author : spike_yan", "20px Arial", "#1616FF");
var text2 = new createjs.Text("touch to start", "40px Arial", "#3A73FF");
var pic1 = new createjs.Bitmap("pic/pic/gl_11.png");
var book = new createjs.Bitmap("pic/stage/book.png");

var begin_new = new createjs.Bitmap("pic/pic/begin_new.png");
var continue1 = new createjs.Bitmap("pic/pic/continue.png");

var gangimage=new createjs.Bitmap("pic/pic/gang.png");
var qiyaimage=new createjs.Bitmap("pic/pic/qiya.png");
var xisuoimage=new createjs.Bitmap("pic/pic/xisuo.png");
var yilumiimage=new createjs.Bitmap("pic/pic/yilumi.png");
var kulaimage=new createjs.Bitmap("pic/pic/kula.png");
var kuroroimage=new createjs.Bitmap("pic/pic/kuroro.png");

var startimage = new createjs.Bitmap("pic/pic/begin_new.jpg");

var textinfo;
var textinfo1;
var selectid=6;
var selectheropic;

var g = [new createjs.Bitmap("pic/stage/g_1.png"), new createjs.Bitmap("pic/stage/g_2.png"), new createjs.Bitmap("pic/stage/g_3.png"), new createjs.Bitmap("pic/stage/g_4.png"), new createjs.Bitmap("pic/stage/g_5.png"), new createjs.Bitmap("pic/stage/g_6.png"), new createjs.Bitmap("pic/stage/g_7.png"), new createjs.Bitmap("pic/stage/g_8.png"), new createjs.Bitmap("pic/stage/g_9.png"), new createjs.Bitmap("pic/stage/g_10.png")];
g[0].x=258;g[0].y=56;
g[1].x=24;g[1].y=299;
g[2].x=338;g[2].y=289;
g[3].x=202;g[3].y=343;
g[4].x=169;g[4].y=467;
g[5].x=596;g[5].y=24;
g[6].x=502;g[6].y=229;
g[7].x=431;g[7].y=420;
g[8].x=836;g[8].y=59;
g[9].x=840;g[9].y=325;


book.x=book.y=10;

var card={
    c1:false,c2:false,c3:false,c4:false,c5:false,c6:false,c7:false,c8:false,c9:false,c0:false,i:true
};
        //card.c1=card.c2=card.c3=card.c4=card.c5=card.c6=card.c8=card.c7=card.c9=true;
var card0 = new createjs.Bitmap("pic/card/0.jpg");
var card1 = new createjs.Bitmap("pic/card/1.jpg");
var card2 = new createjs.Bitmap("pic/card/2.jpg");
var card3 = new createjs.Bitmap("pic/card/3.jpg");
var card4 = new createjs.Bitmap("pic/card/4.jpg");
var card5 = new createjs.Bitmap("pic/card/5.jpg");
var card6 = new createjs.Bitmap("pic/card/6.jpg");
var card7 = new createjs.Bitmap("pic/card/7.jpg");
var card8 = new createjs.Bitmap("pic/card/8.jpg");
var card9 = new createjs.Bitmap("pic/card/9.jpg");

var bookrect = new createjs.Shape();
bookrect.graphics.beginFill("black").drawRect(2,2,1096,746);
bookrect.alpha=0.6;

var pauselogo = new createjs.Shape();
pauselogo.graphics.beginFill("black").drawRect(10,10,1090,740);
pauselogo.alpha=0.7;

//book.addEventListener("click",openbook);
//createjs.Ticker.setFPS(30);
//createjs.Ticker.addEventListener("tick", s1);

//        logo();

function openbook(){
    if(card.i){
        s1.addChild(bookrect);
        if(card.c0){card0.x=75;card0.y=180;s1.addChild(card0);localStorage.card0=1;card0.addEventListener("click",kamuiweb)}
        if(card.c1){card1.x=275;card1.y=180;s1.addChild(card1);localStorage.card1=1;}
        if(card.c2){card2.x=475;card2.y=180;s1.addChild(card2);localStorage.card2=1;}
        if(card.c3){card3.x=675;card3.y=180;s1.addChild(card3);localStorage.card3=1;}
        if(card.c4){card4.x=875;card4.y=180;s1.addChild(card4);localStorage.card4=1;}
        if(card.c5){card5.x=75;card5.y=460;s1.addChild(card5);localStorage.card5=1;}
        if(card.c6){card6.x=275;card6.y=460;s1.addChild(card6);localStorage.card6=1;}
        if(card.c7){card7.x=475;card7.y=460;s1.addChild(card7);localStorage.card7=1;}
        if(card.c8){card8.x=675;card8.y=460;s1.addChild(card8);localStorage.card8=1;}
        if(card.c9){card9.x=875;card9.y=460;s1.addChild(card9);localStorage.card9=1;}
        card.i=false;
    }else{
        s1.removeChild(card0);s1.removeChild(card1);s1.removeChild(card2);
        s1.removeChild(card3);s1.removeChild(card4);s1.removeChild(card5);
        s1.removeChild(card6);s1.removeChild(card7);s1.removeChild(card8);s1.removeChild(card9);
        s1.removeChild(bookrect);
        card.i=true;
    }

}
function kamuiweb(){
    location.href="kamui.html";
}


function logo(){
    s1.addChild(m1);
    m1.alpha=0;
    m1.addEventListener("click",goplay);
    createjs.Tween.get(m1).to({alpha:1}, 1000).call(wel());

    book.addEventListener("click",openbook);
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", s1);
}

function wel(){
    s1.addChild(text);
    text1.alpha=0;
    text2.alpha=0;
    text.x = s1.canvas.width/2-300;
    text.y = s1.canvas.height/2-100;
    text.alpha = 0;
    text1.x=s1.canvas.width/2+100;
    text1.y=s1.canvas.height/2;
    text2.x=s1.canvas.width/2-100;
    text2.y=s1.canvas.height/2+100;
    s1.addChild(text1);
    s1.addChild(text2);
    createjs.Tween.get(text).wait(1000).to({alpha:1}, 500);
    createjs.Tween.get(text1).wait(1300).to({alpha:1}, 500);
    createjs.Tween.get(text2).wait(1600).to({alpha:1}, 500);
}

function goplay(){
//            s1.removeChild(m1);
    s1.removeChild(text);
    s1.removeChild(text1);
    s1.removeChild(text2);
    main();
}
function main(){
    pic1.alpha=0;
    s1.addChild(pic1);
    s1.addChild(begin_new);
    s1.addChild(continue1);
    begin_new.x=780;
    begin_new.y=550;
    begin_new.addEventListener("click",heroSelect);
    continue1.addEventListener("click",continuegame);
    continue1.x=780;
    continue1.y=600;
    createjs.Tween.get(m1).to({alpha:0}, 1000);
    createjs.Tween.get(pic1).to({alpha:1}, 1000);
    createjs.Tween.get(begin_new).to({alpha:1}, 1000);
    createjs.Tween.get(continue1).to({alpha:1}, 1000);

}
//登录界面制作完成
function heroSelect(){
    s1.removeChild(pic1);
    s1.removeChild(begin_new);
    s1.removeChild(continue1);
    heroSelectmenu();
}

function continuegame(){
    s1.removeChild(pic1);
    s1.removeChild(begin_new);
    s1.removeChild(continue1);
    if(localStorage.selectid==1){selectheropic = gangimage;}
    if(localStorage.selectid==2){selectheropic = qiyaimage;}
    if(localStorage.selectid==3){selectheropic = xisuoimage;}
    if(localStorage.selectid==4){selectheropic = yilumiimage;}
    if(localStorage.selectid==5){selectheropic = kulaimage;}
    if(localStorage.selectid==6){selectheropic = kuroroimage;}
    if(localStorage.card0==1){card.c0=true;}
    if(localStorage.card1==1){card.c1=true;}
    if(localStorage.card2==1){card.c2=true;}
    if(localStorage.card3==1){card.c3=true;}
    if(localStorage.card4==1){card.c4=true;}
    if(localStorage.card5==1){card.c5=true;}
    if(localStorage.card6==1){card.c6=true;}
    if(localStorage.card7==1){card.c7=true;}
    if(localStorage.card8==1){card.c8=true;}
    if(localStorage.card9==1){card.c9=true;}
    startgame();
}



function heroSelectmenu(){


    startimage.x=850;
    startimage.y=650;

    gangimage.x=gangimage.y=qiyaimage.x=xisuoimage.x=kulaimage.y=100;
    qiyaimage.y=yilumiimage.y=270;
    xisuoimage.y=kuroroimage.y=440;
    yilumiimage.x=kulaimage.x=kuroroimage.x=270;




    s1.addChild(gangimage);
    s1.addChild(qiyaimage);
    s1.addChild(xisuoimage);
    s1.addChild(yilumiimage);
    s1.addChild(kulaimage);
    s1.addChild(kuroroimage);
    s1.addChild(startimage);

    gangimage.addEventListener("click",displaygang);
    qiyaimage.addEventListener("click",displayqiya);
    xisuoimage.addEventListener("click",displayxisuo);
    yilumiimage.addEventListener("click",displayyilumi);
    kulaimage.addEventListener("click",displaykula);
    kuroroimage.addEventListener("click",displaykuroro);
    startimage.addEventListener("click",startgame0);

    function displaygang(){
        s1.removeChild(textinfo);
        s1.removeChild(textinfo1);
        textinfo = new createjs.Text("杰·富力士", "40px Arial", "#3A73FF");
        textinfo.x=630;
        textinfo.y=150;
        textinfo1 = new createjs.Text("从小就在鲸鱼上玩耍所以身手敏捷五种感官特别敏锐。 在参加猎人试验时和奇犽、酷拉皮卡和雷欧力成为好友。 视西索为第一个超越的目标。 为了寻找父亲金的下落而进入了贪婪之岛。 虽然还是没有找到父亲， 但却成功地将游戏完美破关。 必杀技“猜猜拳”。 ", "25px Arial", "#3A73FF");
        textinfo1.lineHeight=40;
        textinfo1.lineWidth=530;
        textinfo1.x=480;
        textinfo1.y=300;

        s1.addChild(textinfo1);
        s1.addChild(textinfo);
        selectid=1;
        localStorage.selectid=1;
        selectheropic = gangimage;

    }
    function displayqiya(){
        s1.removeChild(textinfo);
        s1.removeChild(textinfo1);
        textinfo = new createjs.Text("奇犽 揍敌客", "40px Arial", "#3A73FF");
        textinfo.x=630;
        textinfo.y=150;
        textinfo1 = new createjs.Text("出身在巴托奇亚共和国里位于海拔三千多公尺的枯枯戮 山上的杀手揍敌客家族。 从3岁起就接受面临死亡的严格的恐怖杀手训练。 被家族训练成是一个完全没有感情的杀手。 资质为家族有史以来最好， 因而被寄予厚望将来成为家主。 但不愿意走这安排好的路，于是离家出走。 并猎人考试中结识小杰一行人，与小杰成为挚友。 ", "25px Arial", "#3A73FF");
        textinfo1.lineHeight=40;
        textinfo1.lineWidth=530;
        textinfo1.x=480;
        textinfo1.y=300;

        s1.addChild(textinfo1);
        s1.addChild(textinfo);
        selectid=2;
        localStorage.selectid=2;
        selectheropic = qiyaimage;
    }
    function displayxisuo(){
        s1.removeChild(textinfo);
        s1.removeChild(textinfo1);
        textinfo = new createjs.Text("西索", "40px Arial", "#3A73FF");
        textinfo.x=630;
        textinfo.y=150;
        textinfo1 = new createjs.Text("具有变化系念能力，性格反复无常。 其念能力是“伸缩自如的爱”及“轻薄的假象” ", "25px Arial", "#3A73FF");
        textinfo1.lineHeight=40;
        textinfo1.lineWidth=530;
        textinfo1.x=480;
        textinfo1.y=300;

        s1.addChild(textinfo1);
        s1.addChild(textinfo);
        selectid=3;
        localStorage.selectid=3;
        selectheropic = xisuoimage;
    }
    function displayyilumi(){
        s1.removeChild(textinfo);
        s1.removeChild(textinfo1);
        textinfo = new createjs.Text("伊路米 揍敌客", "40px Arial", "#3A73FF");
        textinfo.x=630;
        textinfo.y=150;
        textinfo1 = new createjs.Text("奇犽的大哥，揍敌客家族长子。 表情很少变化，很难揣摩出他心里在想什么。 是个非常优秀的职业杀手，做事很有原则。 ", "25px Arial", "#3A73FF");
        textinfo1.lineHeight=40;
        textinfo1.lineWidth=530;
        textinfo1.x=480;
        textinfo1.y=300;

        s1.addChild(textinfo1);
        s1.addChild(textinfo);
        selectid=4;
        localStorage.selectid=4;
        selectheropic = yilumiimage;
    }
    function displaykula(){
        s1.removeChild(textinfo);
        s1.removeChild(textinfo1);
        textinfo = new createjs.Text("库拉皮卡", "40px Arial", "#3A73FF");
        textinfo.x=630;
        textinfo.y=150;
        textinfo1 = new createjs.Text("为了夺回同伴们的眼球（火红眼）及打倒灭族凶手 幻影旅团。 参加了第287期猎人试验并成为猎人。 在猎人试验中与小杰、奇犽、雷欧力成为好友。 在试验中被雷欧力评为“各方面能力最平衡”的人。 ", "25px Arial", "#3A73FF");
        textinfo1.lineHeight=40;
        textinfo1.lineWidth=530;
        textinfo1.x=480;
        textinfo1.y=300;

        s1.addChild(textinfo1);
        s1.addChild(textinfo);
        selectid=5;
        localStorage.selectid=5;
        selectheropic = kulaimage;
    }
    function displaykuroro(){
        s1.removeChild(textinfo);
        s1.removeChild(textinfo1);
        textinfo = new createjs.Text("库洛洛 鲁西鲁", "40px Arial", "#3A73FF");
        textinfo.x=630;
        textinfo.y=150;
        textinfo1 = new createjs.Text("身份为盗贼团体幻影旅团的团长，出身于流星街。 他的主要念能力为特质系的“盗贼的极意”。 ", "25px Arial", "#3A73FF");
        textinfo1.lineHeight=40;
        textinfo1.lineWidth=530;
        textinfo1.x=480;
        textinfo1.y=300;

        s1.addChild(textinfo1);
        s1.addChild(textinfo);
        selectid=6;
        localStorage.selectid=6;
        selectheropic = kuroroimage;
    }

    function startgame0(){
        s1.removeChild(gangimage,qiyaimage,xisuoimage,yilumiimage,kulaimage,kuroroimage,startimage,textinfo1,textinfo);
        gangimage.removeEventListener("click",displaygang);
        qiyaimage.removeEventListener("click",displayqiya);
        xisuoimage.removeEventListener("click",displayxisuo);
        yilumiimage.removeEventListener("click",displayyilumi);
        kulaimage.removeEventListener("click",displaykula);
        kuroroimage.removeEventListener("click",displaykuroro);
        startgame();
    }

}

function startgame(){
    s1.addChild(book);
    for(var i=0;i<10;i++){
        g[i].alpha=0.3;
        s1.addChild(g[i]);
    }


    var selectmap=0;
    var selectmapPic = new createjs.Bitmap("pic/stage/entermap.png");
    selectmapPic.x=850;
    selectmapPic.y=610;
    s1.addChild(selectmapPic);

    selectmapPic.addEventListener("click",goMap);

    g[0].addEventListener("click",clickMap0);
    g[1].addEventListener("click",clickMap1);
    g[2].addEventListener("click",clickMap2);
    g[3].addEventListener("click",clickMap3);
    g[4].addEventListener("click",clickMap4);
    g[5].addEventListener("click",clickMap5);
    g[6].addEventListener("click",clickMap6);
    g[7].addEventListener("click",clickMap7);
    g[8].addEventListener("click",clickMap8);
    g[9].addEventListener("click",clickMap9);

    function goMap(){
        s1.removeChild(selectmapPic);
        for(var i=0;i<10;i++){
            s1.removeChild(g[i]);
        }
        switch (selectmap){
            case 0: entrance();break;
            case 1: will();break;
            case 2: dragon();break;
            case 3: theif();break;
            case 4: love();break;
            case 5: cardx();break;
            case 6: battle();break;
            case 7: port();break;
            case 8: magic();break;
            case 9: boss();break;

        }
    }



    function clickMap0(){selectmap=0;createjs.Tween.get(g[0]).to({alpha:1}, 500);for(var i=0;i<10;i++){if(i!=0){createjs.Tween.get(g[i]).to({alpha:0.3}, 500);}}}
    function clickMap1(){selectmap=1;createjs.Tween.get(g[1]).to({alpha:1}, 500);for(var i=0;i<10;i++){if(i!=1){createjs.Tween.get(g[i]).to({alpha:0.3}, 500);}}}
    function clickMap2(){selectmap=2;createjs.Tween.get(g[2]).to({alpha:1}, 500);for(var i=0;i<10;i++){if(i!=2){createjs.Tween.get(g[i]).to({alpha:0.3}, 500);}}}
    function clickMap3(){selectmap=3;createjs.Tween.get(g[3]).to({alpha:1}, 500);for(var i=0;i<10;i++){if(i!=3){createjs.Tween.get(g[i]).to({alpha:0.3}, 500);}}}
    function clickMap4(){selectmap=4;createjs.Tween.get(g[4]).to({alpha:1}, 500);for(var i=0;i<10;i++){if(i!=4){createjs.Tween.get(g[i]).to({alpha:0.3}, 500);}}}
    function clickMap5(){selectmap=5;createjs.Tween.get(g[5]).to({alpha:1}, 500);for(var i=0;i<10;i++){if(i!=5){createjs.Tween.get(g[i]).to({alpha:0.3}, 500);}}}
    function clickMap6(){selectmap=6;createjs.Tween.get(g[6]).to({alpha:1}, 500);for(var i=0;i<10;i++){if(i!=6){createjs.Tween.get(g[i]).to({alpha:0.3}, 500);}}}
    function clickMap7(){selectmap=7;createjs.Tween.get(g[7]).to({alpha:1}, 500);for(var i=0;i<10;i++){if(i!=7){createjs.Tween.get(g[i]).to({alpha:0.3}, 500);}}}
    function clickMap8(){selectmap=8;createjs.Tween.get(g[8]).to({alpha:1}, 500);for(var i=0;i<10;i++){if(i!=8){createjs.Tween.get(g[i]).to({alpha:0.3}, 500);}}}
    function clickMap9(){selectmap=9;createjs.Tween.get(g[9]).to({alpha:1}, 500);for(var i=0;i<10;i++){if(i!=9){createjs.Tween.get(g[i]).to({alpha:0.3}, 500);}}}


}

function entrance(){
    selectheropic.x=10;selectheropic.y=590;s1.addChild(selectheropic);
    var g1_text1=new createjs.Text("成功晋级下一场！", "60px Arial", "#ff7700");
    var g1_result;
    var g1_step=0;
    var g1_jiandao = new createjs.Bitmap("pic/g1/jiandao.jpg");
    var g1_shitou = new createjs.Bitmap("pic/g1/shitou.jpg");
    var g1_bu = new createjs.Bitmap("pic/g1/bu.jpg");
    var g1e_jiandao = new createjs.Bitmap("pic/g1/jiandao.jpg");
    var g1e_shitou = new createjs.Bitmap("pic/g1/shitou.jpg");
    var g1e_bu = new createjs.Bitmap("pic/g1/bu.jpg");
    var enemy = [new createjs.Bitmap("pic/g1/enemy1.jpg"),new createjs.Bitmap("pic/g1/enemy2.jpg"),new createjs.Bitmap("pic/g1/enemy3.jpg"),new createjs.Bitmap("pic/g1/enemy4.jpg"),new createjs.Bitmap("pic/g1/enemy5.jpg")];
    if(card.c7){g1_step=4}//持有风险骰子，直接跳到最后一关。
    g1_text1.textAlign="center";
    g1_text1.textBaseline="middle";
    g1_text1.x=550;g1_text1.y=370;
    g1_refresh();
    s1.addChild(g1_shitou,g1_jiandao,g1_bu);
    s1.addChild(g1e_shitou,g1e_jiandao,g1e_bu);
    for(var i=0;i<5;i++){enemy[i].x=940;enemy[i].y=10;}
    s1.addChild(enemy[0]);


    function g1_refresh(){
        g1_jiandao.addEventListener("click",f1_jiandao);
        g1_shitou.addEventListener("click",f1_shitou);
        g1_bu.addEventListener("click",f1_bu);
        pauselogo.removeEventListener("click",g1_refresh);
        g1_jiandao.x=250;g1_jiandao.y=450;
        g1_shitou.x=530;g1_shitou.y=450;
        g1_bu.x=810;g1_bu.y=450;
        g1e_jiandao.x=180;g1e_jiandao.y=70;
        g1e_shitou.x=460;g1e_shitou.y=70;
        g1e_bu.x=740;g1e_bu.y=70;
        s1.removeChild(pauselogo,g1_text1);
    }

    function f1_jiandao() {
        g1_jiandao.y = 400;
        enemychu();
        if (g1_result == 0) {
            g1_text1.text="打平！";
            s1.addChild(pauselogo,g1_text1);
            pauselogo.addEventListener("click",g1_refresh);
        } else if(g1_result ==1 ) {
            g1_text1.text="失败，被遣回！";
            s1.addChild(pauselogo,g1_text1);
            pauselogo.addEventListener("click",g1_over);
        } else{
            g1_step++;
            g1_text1.text="胜利！晋级下一场！";
            if(g1_step==5){g1_text1.text="恭喜获得冠军！获得卡片NO.8!"}
            s1.addChild(pauselogo,g1_text1);
            pauselogo.addEventListener("click",g1_nextenemy);
        }
    }
    function f1_shitou(){
        g1_shitou.y = 400;
        enemychu();
        if (g1_result == 1) {
            g1_text1.text="打平！";
            s1.addChild(pauselogo,g1_text1);
            pauselogo.addEventListener("click",g1_refresh);
        } else if(g1_result ==2 ) {
            g1_text1.text="失败，被遣回！";
            s1.addChild(pauselogo,g1_text1);
            pauselogo.addEventListener("click",g1_over);
        } else{
            g1_step++;
            g1_text1.text="胜利！晋级下一场！";
            if(g1_step==5){g1_text1.text="恭喜获得冠军！获得卡片NO.8!"}
            s1.addChild(pauselogo,g1_text1);
            pauselogo.addEventListener("click",g1_nextenemy);
        }
    }
    function f1_bu(){
        g1_bu.y = 400;
        enemychu();
        if (g1_result == 2) {
            g1_text1.text="打平！";
            s1.addChild(pauselogo,g1_text1);
            pauselogo.addEventListener("click",g1_refresh);
        } else if(g1_result ==0 ) {
            g1_text1.text="失败，被遣回！";
            s1.addChild(pauselogo,g1_text1);
            pauselogo.addEventListener("click",g1_over);
        } else{
            g1_step++;
            g1_text1.text="胜利！晋级下一场！";
            if(g1_step==5){g1_text1.text="恭喜获得冠军！获得卡片NO.8!"}
            s1.addChild(pauselogo,g1_text1);
            pauselogo.addEventListener("click",g1_nextenemy);
        }
    }

    function enemychu() {
        var g1e_chu = parseInt(Math.random() * 3);
        if (g1e_chu == 0) {
            g1e_jiandao.y = 120;
        } else if (g1e_chu == 1) {
            g1e_shitou.y = 120;
        } else {
            g1e_bu.y = 120;
        }
        g1_result = g1e_chu;
    }

    function g1_nextenemy(){

        if (g1_step==1){s1.removeChild(enemy[0]);s1.addChild(enemy[1]);}
        if (g1_step==2){s1.removeChild(enemy[1]);s1.addChild(enemy[2]);}
        if (g1_step==3){s1.removeChild(enemy[2]);s1.addChild(enemy[3]);}
        if (g1_step==4){s1.removeChild(enemy[3]);s1.addChild(enemy[4]);}
        if (g1_step==5){g1_text1.text="恭喜拿到冠军，或者卡片NO.8！";card.c8=true;g1_over();}
        g1_refresh();
        pauselogo.removeEventListener("click",g1_nextenemy);
    }

    function g1_over(){
        pauselogo.removeEventListener("click",g1_over);
        s1.removeChild(g1_jiandao,g1_shitou,g1_bu,g1e_jiandao,g1e_shitou,g1e_bu);
        s1.removeChild(selectheropic);
        s1.removeChild(pauselogo,g1_text1);
        for(var i=0;i<5;i++){s1.removeChild(enemy[i]);}
        startgame();
    }

}

function will(){

    selectheropic.x=10;selectheropic.y=590;s1.addChild(selectheropic);
    var g2_text = new createjs.Text("恭喜！成功围住！获得卡片！", "60px Arial", "#ff7700");
    g2_text.textAlign="center";
    g2_text.textBaseline="middle";
    g2_text.x=550;g2_text.y=370;

    var gameView = new createjs.Container();
    gameView.x = 320;
    gameView.y = 150;
    s1.addChild(gameView);

    var circleArr = [[],[],[],[],[],[],[],[],[]];
    var currentCat;
    var MOVE_NONE=-1,MOVE_LEFT = 0,MOVE_UP_LEFT=1,MOVE_UP_RIGHT= 2,MOVE_RIGHT= 3,MOVE_DOWN_RIGHT= 4,MOVE_DOWN_LEFT=5;

    function getMoveDir(cat){

        var distanceMap=[];
        //left
        var can = true;
        for(var x = cat.indexX;x>=0;x--){
            if(circleArr[x][cat.indexY].getCircleType() == Circle.TYPE_SELECTED){
                can = false;
                distanceMap[MOVE_LEFT] = cat.indexX-x;
                break;
            }
        }
        if(can){
            return MOVE_LEFT;
        }
        //left up
        can = true;
        var x = cat.indexX;y = cat.indexY;
        while(true){
            if(circleArr[x][y].getCircleType() == Circle.TYPE_SELECTED){
                can = false;
                distanceMap[MOVE_UP_LEFT] = cat.indexY-y;
                break;
            }
            if(y%2 == 0){
                x--;
            }
            y--;
            if(y<0||x<0){
                break;
            }
        }
        if(can){
            return MOVE_UP_LEFT;
        }
        //right up
        can = true;
        x = cat.indexX;y = cat.indexY;
        while(true){
            if(circleArr[x][y].getCircleType() == Circle.TYPE_SELECTED){
                can = false;
                distanceMap[MOVE_UP_RIGHT] = cat.indexY - y;
                break;
            }

            if(y%2 ==1){
                x++
            }
            y--;
            if(y<0 || x>8){
                break
            }
        }

        if(can){
            return MOVE_UP_RIGHT;
        }

        //right
        can = true;
        for(var x = cat.indexX;x<9;x++){
            if(circleArr[x][cat.indexY].getCircleType() == Circle.TYPE_SELECTED){
                can = false;
                distanceMap[MOVE_RIGHT] = x - cat.indexX;
                break;
            }
        }
        if(can){
            return MOVE_RIGHT;
        }
        //right down
        can = true;
        x = cat.indexX;y = cat.indexY;
        while(true){
            if(circleArr[x][y].getCircleType() == Circle.TYPE_SELECTED){
                can = false;
                distanceMap[MOVE_DOWN_RIGHT] = y-cat.indexY;
                break;
            }
            if(y%2 == 1){
                x++;
            }
            y++;
            if(y>8 ||x>8){
                break;
            }
        }
        if(can){
            return MOVE_DOWN_RIGHT;
        }
        //left down
        can = true;
        x = cat.indexX;y=cat.indexY;
        while(true){
            if(circleArr[x][y].getCircleType() == Circle.TYPE_SELECTED){
                can = false;
                distanceMap[MOVE_DOWN_LEFT] = y-cat.indexY;
                break;
            }
            if(y%2==0){
                x--;
            }
            y++;
            if(y>8||x<0){
                break;
            }
        }
        if(can){
            return MOVE_DOWN_LEFT;
        }
        var maxDir = -1,maxValue= -1;
        for(var dir = 0;dir <distanceMap.length;dir++){
            if(distanceMap[dir]>maxValue){
                maxValue = distanceMap[dir];
                maxDir = dir;
            }
        }
        if(maxValue>1){
            return maxDir;
        }else{
            return MOVE_NONE;
        }
    }

    function circleClicked(event){
        if(event.target.getCircleType() != Circle.TYPE_CAT ){
            event.target.setCircleType(Circle.TYPE_SELECTED);
        }else
        {
            return;
        }
        if(currentCat.indexX == 0 || currentCat.indexX==8 ||currentCat.indexY == 0 || currentCat.indexY==8){
            g2_text.text="游戏失败，被遣返！";
            s1.addChild(pauselogo,g2_text);
            pauselogo.addEventListener("click",g2_over);
        }

        var dir = getMoveDir(currentCat);
        switch (dir){
            case MOVE_LEFT:
                currentCat.setCircleType(Circle.TYPE_UNSELECTED);
                currentCat = circleArr[currentCat.indexX-1][currentCat.indexY];
                currentCat.setCircleType(Circle.TYPE_CAT);
                break;
            case MOVE_UP_LEFT:
                currentCat.setCircleType(Circle.TYPE_UNSELECTED);
                currentCat = circleArr[currentCat.indexY%2?currentCat.indexX:currentCat.indexX-1][currentCat.indexY-1];
                currentCat.setCircleType(Circle.TYPE_CAT);
                break;
            case MOVE_UP_RIGHT:
                currentCat.setCircleType(Circle.TYPE_UNSELECTED);
                currentCat = circleArr[currentCat.indexY%2?currentCat.indexX+1:currentCat.indexX][currentCat.indexY-1];
                currentCat.setCircleType(Circle.TYPE_CAT);
                break;
            case MOVE_RIGHT:
                currentCat.setCircleType(Circle.TYPE_UNSELECTED);
                currentCat = circleArr[currentCat.indexX+1][currentCat.indexY];
                currentCat.setCircleType(Circle.TYPE_CAT);
                break;
            case MOVE_DOWN_RIGHT:
                currentCat.setCircleType(Circle.TYPE_UNSELECTED);
                currentCat = circleArr[currentCat.indexY%2?currentCat.indexX+1:currentCat.indexX][currentCat.indexY+1];
                currentCat.setCircleType(Circle.TYPE_CAT);
                break;
            case MOVE_DOWN_LEFT:
                currentCat.setCircleType(Circle.TYPE_UNSELECTED);
                currentCat = circleArr[currentCat.indexY%2?currentCat.indexX:currentCat.indexX-1][currentCat.indexY+1];
                currentCat.setCircleType(Circle.TYPE_CAT);
                break;
            default :
                g2_text.text="成为围住，获得卡片NO.9";
                card.c9=true;
                s1.addChild(pauselogo,g2_text);
                pauselogo.addEventListener("click",g2_over);
        }



    }

    function addCircles(){
        for(var indexY=0;indexY<9;indexY++){
            for(var indexX = 0;indexX<9;indexX++){
                var c = new Circle();
                gameView.addChild(c);
                circleArr[indexX][indexY] = c;
                c.indexX = indexX;
                c.indexY = indexY;
                c.x = indexY%2?indexX*55+25:indexX*55;
                c.y = indexY*55;

                if(indexX==4&&indexY==4){
                    c.setCircleType(3);
                    currentCat = c;
                }else if(Math.random()<0.1){
                    c.setCircleType(Circle.TYPE_SELECTED);
                }
                c.addEventListener("click",circleClicked);
            }
        }
    }
    addCircles();
    function g2_over(){
        pauselogo.removeEventListener("click",g2_over);
        s1.removeChild(gameView,pauselogo,g2_text,selectheropic);
        startgame();
    }
}

function dragon(){
    var g3_stage = new createjs.Container();
    var g3_dragon = new createjs.Bitmap("pic/g3/g3_dragon.jpg");
    var g3_dragonbaby = new createjs.Bitmap("pic/g3/g3_dragonbaby.jpg");
    var g3_text = new createjs.Text("攻击无效，被遣返！", "60px Arial", "#ff7700");
    var g3_attack = new createjs.Bitmap("pic/g3/g3_attack.jpg");
//            var g3_test = new createjs.Bitmap("gl_2.jpg");
    g3_stage.x=0;
    g3_stage.y=0;
    g3_text.textAlign="center";
    g3_text.textBaseline="middle";
    g3_text.lineWidth=1000;
    g3_text.x=550;g3_text.y=370;
    s1.addChild(g3_stage);
    g3_attack.x=800;g3_attack.y=600;
    selectheropic.x=10;selectheropic.y=590;g3_stage.addChild(selectheropic);
    g3_dragon.x=g3_dragonbaby.x=940;
    g3_dragon.y=g3_dragonbaby.y=10;
    g3_stage.addChild(g3_dragon);
    g3_stage.addChild(g3_attack);
    g3_attack.addEventListener("click",g3_attackgo);

    function g3_attackgo(){
        if(card.c8){
            g3_stage.removeChild(g3_dragon);
            g3_stage.addChild(g3_dragonbaby);
            g3_text.text="使用真实之剑，巨龙恢复原形， 获得卡片NO.6";
            card.c6=true;
            s1.addChild(pauselogo);
            g3_stage.addChild(g3_text);
            pauselogo.addEventListener("click",g3_over);
        }else{
            s1.addChild(pauselogo);
            g3_stage.addChild(g3_text);
            pauselogo.addEventListener("click",g3_over);
        }
    }
    function g3_over(){
        pauselogo.removeAllEventListeners();
        g3_attack.removeAllEventListeners();
        g3_stage.removeChild(g3_text);
        g3_stage.removeChild(g3_dragon);
        g3_stage.removeChild(g3_dragonbaby);
        s1.removeChild(pauselogo);
        s1.removeChild(g3_stage);
        startgame();
    }

}

function theif(){

    var g4_stage = new createjs.Container();
    var g4_background = new createjs.Bitmap("pic/g4/g4_background.jpg");
    var g4_kuroro = new createjs.Bitmap("pic/g4/g4_kuroro.png");
    var g4_text = new createjs.Text("这里是盗贼之城 你身上的卡太少了 都不值得我动手 滚开吧","40px Arial", "#ff7700");

    var g4_textback = new createjs.Shape();

    var g4_cardnum = 0;

    g4_textback.graphics.beginFill("black").drawRect(0,600,1100,750);
    g4_textback.alpha=0.5;

    g4_stage.x=g4_stage.y=g4_background.x=g4_background.y=0;

    g4_text.textAlign="center";
    g4_text.textBaseline="middle";
    g4_text.lineWidth=1100;
    g4_text.x=550;
    g4_text.y=650;

    g4_kuroro.x=770;g4_kuroro.y=303;

    g4_textback.alpha=g4_text.alpha=g4_kuroro.alpha=0;

    s1.addChild(g4_stage);
    g4_stage.addChild(g4_background);
    g4_stage.addChild(g4_kuroro);
    g4_stage.addChild(g4_textback);
    g4_stage.addChild(g4_text);
    g4_main();
    function g4_main(){
        if(card.c7){g4_friend();}else{g4_check();}
    }
    function g4_check(){
        if(card.c0){g4_cardnum++;}
        if(card.c1){g4_cardnum++;}
        if(card.c2){g4_cardnum++;}
        if(card.c3){g4_cardnum++;}
        if(card.c4){g4_cardnum++;}
        if(card.c5){g4_cardnum++;}
        if(card.c6){g4_cardnum++;}
        if(card.c8){g4_cardnum++;}
        if(card.c9){g4_cardnum++;}

        if(g4_cardnum>2){
            g4_through();
        }else{g4_not();}
    }
    function g4_friend(){
        g4_text.text="你已经拥有了神奇的骰子 去外面闯荡吧";
        createjs.Tween.get(g4_background).to({alpha:0.7}, 1000);
        createjs.Tween.get(g4_kuroro).wait(500).to({alpha:1}, 500);
        createjs.Tween.get(g4_textback).wait(1000).to({alpha:0.5}, 500);
        createjs.Tween.get(g4_text).wait(1500).to({alpha:1}, 500);
        g4_textback.addEventListener("click",g4_over);
    }
    function g4_through(){
        g4_text.text="我偷走了你身上所有的卡 作为回报 送你一个神奇的骰子";
        card.c7=true;
        card.c0=card.c1=card.c2=card.c3=card.c4=card.c5=card.c6=card.c8=card.c9=false;
        createjs.Tween.get(g4_background).to({alpha:0.7}, 1000);
        createjs.Tween.get(g4_kuroro).wait(500).to({alpha:1}, 500);
        createjs.Tween.get(g4_textback).wait(1000).to({alpha:0.5}, 500);
        createjs.Tween.get(g4_text).wait(1500).to({alpha:1}, 500);
        g4_textback.addEventListener("click",g4_over);
    }
    function g4_not(){
        createjs.Tween.get(g4_background).to({alpha:0.7}, 1000);
        createjs.Tween.get(g4_kuroro).wait(500).to({alpha:1}, 500);
        createjs.Tween.get(g4_textback).wait(1000).to({alpha:0.5}, 500);
        createjs.Tween.get(g4_text).wait(1500).to({alpha:1}, 500);
        g4_textback.addEventListener("click",g4_over);
    }
    function g4_over(){
        g4_textback.removeAllEventListeners();
        g4_stage.removeAllChildren();
        s1.removeAllChildren();
        startgame();
    }

}

function love(){
//            alert("还没有完工哟,阿华田还没想好呢！");
//            startgame();
    var g5_stage = new createjs.Container();
    var g5_ahua = new createjs.Bitmap("pic/g5/ahua.jpg");
    var g5_text = new createjs.Text("伦家还没有想好故事呢 卡片你先拿去吧","40px Arial", "#ff7700");

    var g5_textback = new createjs.Shape();


    g5_textback.graphics.beginFill("black").drawRect(0,600,1100,750);
    g5_textback.alpha=0.5;

    g5_text.textAlign="center";
    g5_text.textBaseline="middle";
    g5_text.lineWidth=1100;
    g5_text.x=550;
    g5_text.y=650;
    g5_text.alpha=0;


    g5_ahua.x=350;g5_ahua.y=170;
    g5_textback.alpha=g5_text.alpha=g5_ahua.alpha=0;

    s1.addChild(g5_stage);
    g5_stage.addChild(g5_ahua);
    g5_stage.addChild(g5_text);
    g5_stage.addChild(g5_textback);

    g5_main();
    function g5_main(){
        card.c3=true;
        createjs.Tween.get(g5_ahua).wait(500).to({alpha:1}, 500);
        createjs.Tween.get(g5_textback).wait(1000).to({alpha:0.5}, 500);
        createjs.Tween.get(g5_text).wait(1500).to({alpha:1}, 500);
        g5_textback.addEventListener("click",g5_over);
    }
    function g5_over(){
        g5_textback.removeAllEventListeners();
        g5_stage.removeAllChildren();
        s1.removeAllChildren();
        startgame();
    }




}

function cardx(){
    var g6_stage = new createjs.Container();
    var g6_background = new createjs.Bitmap("pic/g6/g6_stage.jpg");
    var g6_paike = new createjs.Bitmap("pic/g6/g6_paike.png");
    var g6_text = new createjs.Text("你有4号卡吗？ 我愿意用5号卡跟你交换","40px Arial", "#ff7700");

    var g6_textback = new createjs.Shape();


    g6_textback.graphics.beginFill("black").drawRect(0,600,1100,750);
    g6_textback.alpha=0.5;

    g6_stage.x=g6_stage.y=g6_background.x=g6_background.y=0;

    g6_text.textAlign="center";
    g6_text.textBaseline="middle";
    g6_text.lineWidth=1100;
    g6_text.x=550;
    g6_text.y=650;

    g6_paike.x=770;g6_paike.y=303;

    g6_textback.alpha=g6_text.alpha=g6_paike.alpha=0;

    s1.addChild(g6_stage);
    g6_stage.addChild(g6_background);
    g6_stage.addChild(g6_paike);
    g6_stage.addChild(g6_textback);
    g6_stage.addChild(g6_text);

    g6_main();

    function g6_main(){
        createjs.Tween.get(g6_background).to({alpha:0.7}, 1000);
        createjs.Tween.get(g6_paike).wait(500).to({alpha:1}, 500);
        createjs.Tween.get(g6_textback).wait(1000).to({alpha:0.5}, 500);
        createjs.Tween.get(g6_text).wait(1500).to({alpha:1}, 500);
        createjs.Tween.get().wait(2000).call(function(){if(card.c4){g6_textback.addEventListener("click",g6_through);}else{g6_textback.addEventListener("click",g6_not);}});
    }

    function g6_through(){
        g6_text.alpha=0;
        g6_text.text="看来你已经获得了4号卡 那我们交换吧";
        card.c5=true;
        card.c4=false;
        createjs.Tween.get(g6_text).to({alpha:1}, 500);
        g6_textback.removeEventListener("click",g6_through);
        g6_textback.addEventListener("click",g6_over);

    }

    function g6_not(){
        g6_text.alpha=0;
        g6_text.text="看来你没有我想要的卡片 那再见咯";
        createjs.Tween.get(g6_text).to({alpha:1}, 500);
        g6_textback.removeEventListener("click",g6_not);
        g6_textback.addEventListener("click",g6_over);
    }
    function g6_over(){
        g6_textback.removeAllEventListeners();
        g6_stage.removeAllChildren();
        s1.removeAllChildren();
        startgame();
    }
}

function battle(){

    var g7_stage = new createjs.Container();g7_stage.x=g7_stage.y=0;

    var g7_text1 = new createjs.Text("READY !", "60px Arial", "#ff7700");
    var g7_text2 = new createjs.Text("STEADY ! !", "80px Arial", "#ff7000");
    var g7_text3 = new createjs.Text("GO  !  !  !", "100px Arial", "#ff0000");
    var g7_text4 = new createjs.Text("恭喜胜利！晋级下一场", "60px Arial", "#ff7700");
    var g7_enemy = [new createjs.Bitmap("pic/g7/enemy1.jpg"),new createjs.Bitmap("pic/g7/enemy1.jpg"),new createjs.Bitmap("pic/g7/enemy2.jpg"),new createjs.Bitmap("pic/g7/enemy3.jpg"),new createjs.Bitmap("pic/g7/enemy4.jpg")];
    var g7_checktime=0;
    var g7_begintime=0;var g7_endtime;

    var g7_enemyno=1;

    g7_text1.textAlign=g7_text2.textAlign=g7_text3.textAlign=g7_text4.textAlign="center";
    g7_text1.textBaseline=g7_text2.textBaseline=g7_text3.textBaseline=g7_text4.textBaseline="middle";
    g7_text1.x=g7_text2.x=g7_text3.x=g7_text4.x=550;
    g7_text1.y=g7_text2.y=g7_text3.y=g7_text4.y=370;
    g7_text1.alpha=0;
    g7_text2.alpha=0;
    g7_text3.alpha=0;
    g7_text1.scaleX=g7_text1.scaleY=g7_text2.scaleX=g7_text2.scaleY=g7_text3.scaleX=g7_text3.scaleY=3;

    selectheropic.x=10;selectheropic.y=590;
    for(var i=0;i<5;i++){
        g7_enemy[i].x=940;g7_enemy[i].y=10;
    }

    var g7_pauselogo = new createjs.Shape();
    g7_pauselogo.graphics.beginFill("23AB1E").drawRect(0,0,1100,750);
    g7_pauselogo.alpha=0.1;

    var g7_check = [0,1500,1000,500,200];
    if(card.c7){g7_check[3]=1000;g7_check[4]=1000;}

    s1.addChild(g7_stage);

    g7_stage.addChild(selectheropic);

    g7_stage.addChild(g7_text1);g7_stage.addChild(g7_text2);g7_stage.addChild(g7_text3);
    g7_stage.addChild(g7_pauselogo);
    g7_pauselogo.addEventListener("click",g7_attack);

    g7_main();


    function g7_main(){
        g7_begintime=0;
        g7_pauselogo.addEventListener("click",g7_attack);
        g7_stage.addChild(g7_enemy[g7_enemyno]);
        g7_stage.addChild(g7_text1);g7_stage.addChild(g7_text2);g7_stage.addChild(g7_text3);
        createjs.Tween.get(g7_text1).wait(500).to({alpha:1,scaleX:1,scaleY:1}, 100).wait(500).to({alpha:0},500);
        createjs.Tween.get(g7_text2).wait(2100).to({alpha:1,scaleX:1,scaleY:1}, 100).wait(500).to({alpha:0},500);
        createjs.Tween.get(g7_text3).wait(3200).wait(g7_randomtime()).to({alpha:1,scaleX:1,scaleY:1}, 100).call(g7_gettime).to({alpha:0},300);
//                createjs.Tween.get().wait(3200+g7_checktime+g7_check[g7_enemyno]).call(g7_lose);
    }

    function g7_randomtime(){
        var tt= Math.random()*5000;
        g7_checktime = tt;
        return tt;
    }

    function g7_attack(){
        g7_endtime=Date.now();
        g7_stage.removeChild(g7_text1);g7_stage.removeChild(g7_text2);g7_stage.removeChild(g7_text3);
        if(((g7_endtime>g7_begintime)&&(g7_endtime<(g7_begintime+g7_check[g7_enemyno])))&&g7_begintime!=0){
            g7_win();
        }else if(g7_endtime<g7_begintime||g7_begintime==0){
            g7_stage.addChild(pauselogo);
            g7_text4.text="出手过早！失败，被遣返！";
            g7_stage.addChild(g7_text4);
            pauselogo.addEventListener("click",g7_over);
        }else{
            g7_stage.addChild(pauselogo);
            g7_text4.text="出手过晚！失败，被遣返！";
            g7_stage.addChild(g7_text4);
            pauselogo.addEventListener("click",g7_over);
        }
    }

    function g7_gettime(){
        g7_begintime=Date.now();
    }

    function g7_win(){
        if(g7_enemyno==4){
            card.c4=true;
            g7_stage.addChild(pauselogo);
            g7_text4.text="恭喜夺冠！获得卡片NO.4！";
            g7_stage.addChild(g7_text4);
            pauselogo.addEventListener("click",g7_over);
        }else{
            g7_stage.addChild(pauselogo);
            g7_text4.text="恭喜晋级！";
            g7_stage.addChild(g7_text4);
            pauselogo.addEventListener("click",g7_next);
        }

    }
//            function g7_lose(){
//                if(!((g7_endtime>g7_begintime)&&(g7_endtime<(g7_begintime+g7_check[g7_enemyno])))){
//                    g7_stage.addChild(pauselogo);
//                    g7_text4.text="被击中失败，被遣返！";
//                    g7_stage.addChild(g7_text4);
//                    pauselogo.addEventListener("click",g7_over);
//                }
//            }
    function g7_next(){
        g7_refresh();
        if(g7_enemyno<4){g7_enemyno++;}
        g7_main();
    }
    function g7_refresh(){
        pauselogo.removeAllEventListeners();
        g7_stage.removeChild(g7_enemy[g7_enemyno]);
        g7_stage.removeChild(g7_text1);g7_stage.removeChild(g7_text2);g7_stage.removeChild(g7_text3);g7_stage.removeChild(g7_text4);
        g7_stage.removeChild(pauselogo);
    }
    function g7_over(){
        g7_stage.removeAllEventListeners();
        g7_stage.removeAllChildren();
        pauselogo.removeAllEventListeners();
        g7_pauselogo.removeAllEventListeners();
        s1.removeChild(g7_stage);
        startgame();
    }






}

function port(){

    var g8_stage = new createjs.Container();
    var g8_background = new createjs.Bitmap("pic/g8/g8_stage.jpg");
    var g8_captain = new createjs.Bitmap("pic/g8/g8_captain.png");
    var g8_text1 = new createjs.Text("很遗憾 你需要集满1-9号卡才能够离开贪婪之岛", "40px Arial", "#ff7700");
    var g8_text2 = new createjs.Text("看来你已经集了我需要的卡 我现在给你0号卡 本港口是不能离开贪婪之岛的 0号卡会指引你的方向 ", "40px Arial", "#ff7700");
    var g8_textback = new createjs.Shape();

    g8_textback.graphics.beginFill("black").drawRect(0,600,1100,750);
    g8_textback.alpha=0.5;

    g8_stage.x=g8_stage.y=g8_background.x=g8_background.y=0;

    g8_text1.textAlign=g8_text2.textAlign="center";
    g8_text1.textBaseline=g8_text2.textBaseline="middle";
    g8_text1.lineWidth=g8_text2.lineWidth=1100;
    g8_text1.x=g8_text2.x=550;
    g8_text1.y=g8_text2.y=650;


    g8_captain.x=510;g8_captain.y=330;

    g8_textback.alpha=g8_text1.alpha=g8_text2.alpha=g8_captain.alpha=0;

    s1.addChild(g8_stage);
    g8_stage.addChild(g8_background);
    g8_stage.addChild(g8_captain);
    g8_stage.addChild(g8_textback);

    g8_main();

    function g8_main(){
        if(card.c1&&card.c2&&card.c3&&card.c4&&card.c5&&card.c6&&card.c7&&card.c8&&card.c9){
            g8_through();
        }else{
            g8_not();
        }
    }
    function g8_through(){
        g8_stage.addChild(g8_text2);
        card.c0=true;
        createjs.Tween.get(g8_background).to({alpha:0.7}, 1000);
        createjs.Tween.get(g8_captain).wait(500).to({alpha:1}, 500);
        createjs.Tween.get(g8_textback).wait(1000).to({alpha:0.5}, 500);
        createjs.Tween.get(g8_text2).wait(1500).to({alpha:1}, 500);
        g8_textback.addEventListener("click",g8_over);
    }
    function g8_not(){
        g8_stage.addChild(g8_text1);
        createjs.Tween.get(g8_background).to({alpha:0.7}, 1000);
        createjs.Tween.get(g8_captain).wait(500).to({alpha:1}, 500);
        createjs.Tween.get(g8_textback).wait(1000).to({alpha:0.5}, 500);
        createjs.Tween.get(g8_text1).wait(1500).to({alpha:1}, 500);
        g8_textback.addEventListener("click",g8_over);
    }
    function g8_over(){
        g8_textback.removeAllEventListeners();
        g8_stage.removeAllChildren();
        s1.removeAllChildren();
        startgame();
    }

}

function magic(){
    var g9_stage = new createjs.Container();
    var g9_background = new createjs.Bitmap("pic/g9/g9_stage.jpg");
    var g9_gang = new createjs.Bitmap("pic/g9/g9_gang.png");
    var shape = new createjs.Shape();
    var shape1 = new createjs.Shape();
    var shape2 = new createjs.Shape();
    var shape3 = new createjs.Shape();
    var g9_p = new createjs.Tween.get(shape3,{loop:true});
    var g9_text = new createjs.Text("旁边的大树上有卡 用力敲树干那张卡才会掉下来 ", "40px Arial", "#ff7700");
    var g9_textback = new createjs.Shape();


    g9_textback.graphics.beginFill("black").drawRect(15,600,1100,750);
    g9_textback.alpha=0.5;

    g9_text.textAlign="center";
    g9_text.textBaseline="middle";
    g9_text.lineWidth=1100;
    g9_text.x=550;
    g9_text.y=650;
    g9_text.alpha=0;
    g9_textback.alpha=g9_text.alpha=g9_gang.alpha=0;

    shape.graphics.beginFill("black").drawCircle(520, 420, 120);
    shape1.graphics.beginFill("red").drawRoundRect(0, 0, 120,10,5);
    shape2.graphics.beginFill("red").drawCircle(0, 0, 20);
    shape3.graphics.beginFill("blue").drawRoundRect(0, 0, 120,5,2.5);

    shape3.regY=2.5;
    shape3.x=520;
    shape3.y=420;

    shape2.x=520;
    shape2.y=420;

    shape.alpha=0.3;
    shape1.alpha=0.5;
    shape1.regY=5;
    shape1.x=520;
    shape1.y=420;
    shape1.rotation=-30;

    g9_stage.y=0;
    g9_stage.x=-15;
    g9_gang.x=150;
    g9_gang.y=400;

    s1.addChild(g9_stage);
    g9_stage.addChild(g9_background);
    g9_stage.addChild(g9_gang);
    g9_stage.addChild(g9_textback);
    g9_stage.addChild(g9_text);

    g9_main();

    function g9_main(){
        createjs.Tween.get(g9_gang).wait(500).to({alpha:1}, 500);
        createjs.Tween.get(g9_textback).wait(1000).to({alpha:0.5}, 500);
        createjs.Tween.get(g9_text).wait(1500).to({alpha:1}, 500);
        g9_textback.addEventListener("click",g9_letsgo);
    }
    function g9_letsgo(){
        g9_textback.removeAllEventListeners();
        g9_stage.removeChild(g9_text);
        g9_stage.removeChild(g9_textback);

        g9_textback.alpha=g9_text.alpha=0;

        g9_stage.addChild(shape);
        g9_stage.addChild(shape1);
        g9_stage.addChild(shape2);
        g9_stage.addChild(shape3);


        g9_power();
        shape.addEventListener("click",g9_powerstop);

    }
    function g9_power(){
        g9_p.to({rotation:360},1000);
    }

    function g9_powerstop(){
        g9_p.setPaused(true);
        g9_shake();
        g9_check();
        shape.removeAllEventListeners();
    }
    function g9_check(){
        if(shape3.rotation>327&&shape.rotation<333){
            g9_win();
        }else{
            g9_lose();
        }
    }
    function g9_shake(){
        createjs.Tween.get(g9_background).to({x:-30},50).to({x:0},50).to({x:-25},60).to({x:-5},60).to({x:-25},70).to({x:-5},70).to({x:-25},70).to({x:-15},80);
    }
    function g9_fly(){
        createjs.Tween.get(g9_gang).to({x:1100,y:-250,rotation:-720},500);
    }

    function g9_win(){
        g9_fly();
        g9_clear();
        g9_text.text="你成功的拿到了2号卡-大天使的呼吸";
        card.c2=true;
        createjs.Tween.get(g9_textback).wait(1000).to({alpha:0.5}, 500);
        createjs.Tween.get(g9_text).wait(1500).to({alpha:1}, 500);
        g9_textback.addEventListener("click",g9_over);
    }
    function g9_lose(){
        createjs.Tween.get(g9_gang).to({x:135},50).to({x:165},50).to({x:140},60).to({x:160},60).to({x:140},70).to({x:160},70).to({x:140},70).to({x:150},80);
        g9_clear();
        g9_text.text="哈哈 你的力气不够哟 练练再来吧 再见咯";
        createjs.Tween.get(g9_textback).wait(1000).to({alpha:0.5}, 500);
        createjs.Tween.get(g9_text).wait(1500).to({alpha:1}, 500);
        g9_textback.addEventListener("click",g9_over);
    }
    function g9_clear(){
        g9_stage.removeChild(shape);
        g9_stage.removeChild(shape1);
        g9_stage.removeChild(shape2);
        g9_stage.removeChild(shape3);
        g9_stage.addChild(g9_textback);
        g9_stage.addChild(g9_text);

    }
    function g9_over(){
        g9_textback.removeAllEventListeners();
        g9_stage.removeAllChildren();
        s1.removeChild(g9_stage);
        startgame();
    }
}

function boss(){
    var g10_stage = new createjs.Container();
    var g10_background = new createjs.Bitmap("pic/g10/g10_stage.jpg");
    var g10_text = new createjs.Text("问：奇犽的妹妹叫什么名字？", "60px Arial", "#ff7700");
    var g10_text1 = new createjs.Text("A.米索不达米亚平原", "40px Arial", "#ff7700");
    var g10_text2 = new createjs.Text("B.米索不达米亚平原", "40px Arial", "#ff7700");
    var g10_text3 = new createjs.Text("C.米索不达米亚平原", "40px Arial", "#ff7700");

    var g10_wen = ["库拉皮卡中指的能力是什么？","奇犽的妹妹叫什么名字？","尼特罗会长是什么系的？","一下哪个人物年龄最大？","恭喜答对获得1号卡片！"];
    var g10_a1 = ["A，束缚一切","A，鸭绿江·揍敌客","A，强化系","A，马哈·揍敌客"," "];
    var g10_a2 = ["B，辨别谎言","B，伊路米·揍敌客","B，变化系","B，杰格·揍敌客"," "];
    var g10_a3 = ["C，治愈一切","C，亚路嘉·揍敌客","C，具现化系","C，桀诺·揍敌客","点击返回主场景"];

    var g10_count = 0;
    var g10_result = [1,3,1,1,2,1,3,3,1];

    g10_text.x=g10_text1.x=g10_text2.x=g10_text3.x=210;g10_text.y=170;
    g10_text1.y=300;g10_text2.y=400;g10_text3.y=500;
    g10_background.alpha=0.5;


    s1.addChild(g10_stage);
    g10_stage.addChild(g10_background);

    g10_main();
    function g10_main(){
        if(g10_count==4){card.c1=true}
        g10_text.text=g10_wen[g10_count];
        g10_text1.text=g10_a1[g10_count];g10_text2.text=g10_a2[g10_count];g10_text3.text=g10_a3[g10_count];
        g10_stage.addChild(g10_text,g10_text1,g10_text2,g10_text3);
        g10_text1.addEventListener("click",g10_checkA);
        g10_text2.addEventListener("click",g10_checkB);
        g10_text3.addEventListener("click",g10_checkC);
    }
    function g10_checkA(){
        if(g10_result[g10_count]==1){g10_count++;g10_gonext();}else{g10_over();}
    }
    function g10_checkB(){
        if(g10_result[g10_count]==2){g10_count++;g10_gonext();}else{g10_over();}
    }
    function g10_checkC(){
        if(g10_result[g10_count]==3){g10_count++;g10_gonext();}else{g10_over();}
    }
    function g10_gonext(){
        g10_stage.removeChild(g10_text,g10_text1,g10_text2,g10_text3);
        g10_main();
    }
    function g10_over(){
        g10_text1.removeEventListener("click",g10_checkA);
        g10_text2.removeEventListener("click",g10_checkB);
        g10_text3.removeEventListener("click",g10_checkC);
        g10_stage.removeAllChildren();
        s1.removeChild(g10_stage);
        startgame();
    }


}
