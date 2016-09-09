/**
 * Created by akke on 2016/4/12.
 */
function Ship(ctx){
    gameMonitor.im.loadImage(['static/img/player.png']);
    this.width = 80;
    this.height = 80;
    this.left = gameMonitor.w/2 - this.width/2;
    this.top = gameMonitor.h - 2*this.height;
    this.player = gameMonitor.im.createImage('static/img/player.png');

    this.paint = function(){
        ctx.drawImage(this.player, this.left, this.top, this.width, this.height);
    }

    this.setPosition = function(event){
        if(gameMonitor.isMobile()){
            var tarL = event.changedTouches[0].clientX;
            var tarT = event.changedTouches[0].clientY;
        }
        else{
            var tarL = event.offsetX;
            var tarT = event.offsetY;
        }
        this.left = tarL - this.width/2 - 16;
        this.top = tarT - this.height/2;
        if(this.left<0){
            this.left = 0;
        }
        if(this.left>320-this.width){
            this.left = 320-this.width;
        }
        if(this.top<0){
            this.top = 0;
        }
        if(this.top>gameMonitor.h - this.height){
            this.top = gameMonitor.h - this.height;
        }
        this.paint();
    }

    this.controll = function(){
        var _this = this;
        var stage = $('#gamepanel');
        var currentX = this.left,
            currentY = this.top,
            move = false;
        stage.on(gameMonitor.eventType.start, function(event){
            _this.setPosition(event);
            move = true;
        }).on(gameMonitor.eventType.end, function(){
            move = false;
        }).on(gameMonitor.eventType.move, function(event){
            event.preventDefault();
            if(move){
                _this.setPosition(event);
            }

        });
    }

    this.eat = function(foodlist){
        for(var i=foodlist.length-1; i>=0; i--){
            var f = foodlist[i];
            if(f){
                var l1 = this.top+this.height/2 - (f.top+f.height/2);
                var l2 = this.left+this.width/2 - (f.left+f.width/2);
                var l3 = Math.sqrt(l1*l1 + l2*l2);
                if(l3<=this.height/2 + f.height/2){
                    foodlist[f.id] = null;
                    if(f.type==0){
                        gameMonitor.stop();
                        $('#gameoverPanel').show();

                        setTimeout(function(){
                            $('#gameoverPanel').hide();
                            $('#resultPanel').show();
                            gameMonitor.getScore();
                        }, 2000);
                    }
                    else{
                        $('#score').text(++gameMonitor.score);
                        $('.heart').removeClass('hearthot').addClass('hearthot');
                        setTimeout(function() {
                            $('.heart').removeClass('hearthot')
                        }, 200);
                    }
                }
            }

        }
    }
}

function Food(type, left, id){
    this.speedUpTime = 300;
    this.id = id;
    this.type = type;
    this.width = 50;
    this.height = 50;
    this.left = left;
    this.top = -50;
    this.speed = 0.04 * Math.pow(1.2, Math.floor(gameMonitor.time/this.speedUpTime));
    this.loop = 0;

    var p = this.type == 0 ? 'static/img/food1.png' : 'static/img/food2.png';
    this.pic = gameMonitor.im.createImage(p);
}
Food.prototype.paint = function(ctx){
    ctx.drawImage(this.pic, this.left, this.top, this.width, this.height);
}
Food.prototype.move = function(ctx){
    if(gameMonitor.time % this.speedUpTime == 0){
        this.speed *= 1.2;
    }
    this.top += ++this.loop * this.speed;
    if(this.top>gameMonitor.h){
        gameMonitor.foodList[this.id] = null;
    }
    else{
        this.paint(ctx);
    }
}


function ImageMonitor(){
    var imgArray = [];
    return {
        createImage : function(src){
            return typeof imgArray[src] != 'undefined' ? imgArray[src] : (imgArray[src] = new Image(), imgArray[src].src = src, imgArray[src])
        },
        loadImage : function(arr, callback){
            for(var i=0,l=arr.length; i<l; i++){
                var img = arr[i];
                imgArray[img] = new Image();
                imgArray[img].onload = function(){
                    if(i==l-1 && typeof callback=='function'){
                        callback();
                    }
                }
                imgArray[img].src = img
            }
        }
    }
}


var gameMonitor = {
    w : 320,
    h : 568,
    bgWidth : 320,
    bgHeight : 1126,
    time : 0,
    timmer : null,
    bgSpeed : 2,
    bgloop : 0,
    score : 0,
    im : new ImageMonitor(),
    foodList : [],
    bgDistance : 0,//鑳屾櫙浣嶇疆
    eventType : {
        start : 'touchstart',
        move : 'touchmove',
        end : 'touchend'
    },
    init : function(){
        var _this = this;
        var canvas = document.getElementById('stage');
        var ctx = canvas.getContext('2d');

        //缁樺埗鑳屾櫙
        var bg = new Image();
        _this.bg = bg;
        bg.onload = function(){
            ctx.drawImage(bg, 0, 0, _this.bgWidth, _this.bgHeight);
        }
        bg.src = 'static/img/bg.jpg';

        _this.initListener(ctx);


    },
    initListener : function(ctx){
        var _this = this;
        var body = $(document.body);
        $(document).on(gameMonitor.eventType.move, function(event){
            event.preventDefault();
        });
        body.on(gameMonitor.eventType.start, '.replay, .playagain', function(){
            $('#resultPanel').hide();
            var canvas = document.getElementById('stage');
            var ctx = canvas.getContext('2d');
            _this.ship = new Ship(ctx);
            _this.ship.controll();
            _this.reset();
            _this.run(ctx);
        });

        body.on(gameMonitor.eventType.start, '#frontpage', function(){
            $('#frontpage').css('left', '-100%');
        });

        body.on(gameMonitor.eventType.start, '#guidePanel', function(){
            $(this).hide();
            _this.ship = new Ship(ctx);
            _this.ship.paint();
            _this.ship.controll();
            gameMonitor.run(ctx);
        });

        body.on(gameMonitor.eventType.start, '.share', function(){
            $('.weixin-share').show().on(gameMonitor.eventType.start, function(){
                $(this).hide();
            });
        });

        WeixinApi.ready(function(Api) {
            // 寰俊鍒嗕韩鐨勬暟鎹�
            //鍒嗕韩缁欏ソ鍙嬬殑鏁版嵁
            var wxData = {
                "appId": "",
                "imgUrl" : "static/img/icon.png",
                "link" : "http://dev.360.cn/html/zhuanti/yutu.html",
                "desc" : "杩涘嚮鐨勭帀鍏�",
                "title" : "鈥滅帺鐜夊厰 鎶㈡湀楗尖€�"
            };

            //鏈嬪弸鍦堟暟鎹�
            var wxDataPyq ={
                "appId": "",
                "imgUrl" : "static/img/icon.png",
                "link" : "http://dev.360.cn/html/zhuanti/yutu.html",
                "desc" : "鈥滅帺鐜夊厰 鎶㈡湀楗尖€�",
                "title" : "杩涘嚮鐨勭帀鍏�"
            }

            // 鍒嗕韩鐨勫洖璋�
            var wxCallbacks = {
                // 鍒嗕韩鎿嶄綔寮€濮嬩箣鍓�
                ready : function() {},
                cancel : function(resp) {},
                fail : function(resp) {},
                confirm : function(resp) {},
                all : function(resp) {
                    //location.href=location.href
                }
            };

            // 鐢ㄦ埛鐐瑰紑鍙充笂瑙抪opup鑿滃崟鍚庯紝鐐瑰嚮鍒嗕韩缁欏ソ鍙嬶紝浼氭墽琛屼笅闈㈣繖涓唬鐮�
            Api.shareToFriend(wxData, wxCallbacks);
            // 鐐瑰嚮鍒嗕韩鍒版湅鍙嬪湀锛屼細鎵ц涓嬮潰杩欎釜浠ｇ爜
            Api.shareToTimeline(wxDataPyq, wxCallbacks);
            // 鐐瑰嚮鍒嗕韩鍒拌吘璁井鍗氾紝浼氭墽琛屼笅闈㈣繖涓唬鐮�
            Api.shareToWeibo(wxData, wxCallbacks);
        });

    },
    rollBg : function(ctx){
        if(this.bgDistance>=this.bgHeight){
            this.bgloop = 0;
        }
        this.bgDistance = ++this.bgloop * this.bgSpeed;
        ctx.drawImage(this.bg, 0, this.bgDistance-this.bgHeight, this.bgWidth, this.bgHeight);
        ctx.drawImage(this.bg, 0, this.bgDistance, this.bgWidth, this.bgHeight);
    },
    run : function(ctx){
        var _this = gameMonitor;
        ctx.clearRect(0, 0, _this.bgWidth, _this.bgHeight);
        _this.rollBg(ctx);

        //缁樺埗椋炶埞
        _this.ship.paint();
        _this.ship.eat(_this.foodList);


        //浜х敓鏈堥ゼ
        _this.genorateFood();

        //缁樺埗鏈堥ゼ
        for(i=_this.foodList.length-1; i>=0; i--){
            var f = _this.foodList[i];
            if(f){
                f.paint(ctx);
                f.move(ctx);
            }

        }
        _this.timmer = setTimeout(function(){
            gameMonitor.run(ctx);
        }, Math.round(1000/60));

        _this.time++;
    },
    stop : function(){
        var _this = this
        $('#stage').off(gameMonitor.eventType.start + ' ' +gameMonitor.eventType.move);
        setTimeout(function(){
            clearTimeout(_this.timmer);
        }, 0);

    },
    genorateFood : function(){
        var genRate = 50; //浜х敓鏈堥ゼ鐨勯鐜�
        var random = Math.random();
        if(random*genRate>genRate-1){
            var left = Math.random()*(this.w - 50);
            var type = Math.floor(left)%2 == 0 ? 0 : 1;
            var id = this.foodList.length;
            var f = new Food(type, left, id);
            this.foodList.push(f);
        }
    },
    reset : function(){
        this.foodList = [];
        this.bgloop = 0;
        this.score = 0;
        this.timmer = null;
        this.time = 0;
        $('#score').text(this.score);
    },
    getScore : function(){
        var time = Math.floor(this.time/60);
        var score = this.score;
        var user = 1;
        if(score==0){
            $('#scorecontent').html('鐪熼仐鎲撅紝鎮ㄧ珶鐒�<span class="lighttext">涓€涓�</span>鏈堥ゼ閮芥病鏈夋姠鍒帮紒');
            $('.btn1').text('澶т緺璇烽噸鏂版潵杩�').removeClass('share').addClass('playagain');
            $('#fenghao').removeClass('geili yinhen').addClass('yinhen');
            return;
        }
        else if(score<10){
            user = 2;
        }
        else if(score>10 && score<=20){
            user = 10;
        }
        else if(score>20 && score<=40){
            user = 40;
        }
        else if(score>40 && score<=60){
            user = 80;
        }
        else if(score>60 && score<=80){
            user = 92;
        }
        else if(score>80){
            user = 99;
        }
        $('#fenghao').removeClass('geili yinhen').addClass('geili');
        $('#scorecontent').html('鎮ㄥ湪<span id="stime" class="lighttext">2378</span>绉掑唴鎶㈠埌浜�<span id="sscore" class="lighttext">21341</span>涓湀楗�<br>瓒呰繃浜�<span id="suser" class="lighttext">31%</span>鐨勭敤鎴凤紒');
        $('#stime').text(time);
        $('#sscore').text(score);
        $('#suser').text(user+'%');
        $('.btn1').text('璇峰皬浼欎即鍚冩湀楗�').removeClass('playagain').addClass('share');
    },
    isMobile : function(){
        var sUserAgent= navigator.userAgent.toLowerCase(),
            bIsIpad= sUserAgent.match(/ipad/i) == "ipad",
            bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os",
            bIsMidp= sUserAgent.match(/midp/i) == "midp",
            bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
            bIsUc= sUserAgent.match(/ucweb/i) == "ucweb",
            bIsAndroid= sUserAgent.match(/android/i) == "android",
            bIsCE= sUserAgent.match(/windows ce/i) == "windows ce",
            bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile",
            bIsWebview = sUserAgent.match(/webview/i) == "webview";
        return (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM);
    }
}
if(!gameMonitor.isMobile()){
    gameMonitor.eventType.start = 'mousedown';
    gameMonitor.eventType.move = 'mousemove';
    gameMonitor.eventType.end = 'mouseup';
}

gameMonitor.init();