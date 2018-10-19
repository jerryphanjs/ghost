var mouseX = 0,mouseY = 0,mouseX_pointer =0,mouseY_pointer= 0 ,kyori=10000;
var stop_ghost = false;
var ghost_catch =0;
var device_origenalY =0;
var kyori_max = 0;
var ghost_bunshin = false;
var ghost_onetime = false;


var getDevice = (function(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        return 'sp';
    }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
        return 'sp';
    }else{
        return 'pc';
    }
})();


(function() {
  var canvas;
  var ctx;
  var width;
  var height;
  var ghostX,ghostX_old;
  var ghostY,ghostY_old;
  var iconX;
  var iconY;
  // var mouseX;
  // var mouseY;
  var delay = 100;
  var delay_icon = 8;


  // 初期化処理
  function initialize() {

    TweenMax.to($(".ghost_wrapper"), 1,{
        autoAlpha:1
    });

    width = window.innerWidth ;
    height = window.innerHeight;

    // ボールの初期位置は中心
    ghostX = mouseX = width/2;

    if(getDevice == "pc"){
        ghostY = mouseY = height/2*3.5;
    }else{
        ghostY = mouseY = height/2*3;
    }

    iconX = mouseX = mouseX_pointer = width/2;
    iconY = mouseY = mouseY_pointer = height/2;

    if(getDevice == "pc"){
      kyori_max = 80;
    }else{
      kyori_max = 40;
    }

    setInterval(drawghost, 30);

  };

  function drawghost(){

    if( ghost_bunshin == true){
      $('.ghost_wrapper').css({top:Math.random()*height,left:Math.random()*width});
    }

    if(stop_ghost == true){
      return;
    }

    if(kyori < kyori_max){
      stop_ghost = true;

      TweenMax.to($('.ringo_catch'+ghost_catch+' .score_st1') , 1,{
          css:{fill:"#ffffff"}
      });

      TweenMax.to($('.ringo_catch'+ghost_catch) , .2,{
          scaleX:1.5,scaleY:1.5
      });

      TweenMax.to($('.ringo_catch'+ghost_catch) , .5,{
          scaleX:1,scaleY:1,delay:.2
      });

      ghost_catch++


      if(ghost_catch == 3) {



        TweenMax.to($(".ghost_wrapper"), 0,{
            delay:1.5,onComplete: function(){
              ghost_bunshin =true;

              if(document.URL.match("/halloween2018")) {

                if(ghost_onetime == false){
                  // $('#halloween_index')[0].click();
                  // ghost_onetime = true;
                }

            	}else{

                if(ghost_onetime == false){
                  // $('#halloween_news')[0].click();
                  // ghost_onetime = true;
                }

              }

            }
        });

        $('.ghost_wrapper .text0').css({'visibility':'hidden'});
        $('.ghost_wrapper .text1').css({'visibility':'visible'});

        for (var i =0; i < 3; i++) {
          TweenMax.to($('.ringo_catch'+i+' .score_st1') , .5,{
              css:{fill:"#DF0428"},delay:i*0.2+1
          });
        }

        //urlジャンプ
        ghost_catch = 0;


      }else{
        $('.ghost_wrapper .text0').css({'visibility':'visible'});
        $('.ghost_wrapper .text1').css({'visibility':'hidden'});
      }

      TweenMax.to($(".ghost_wrapper .ghost_text"), .5,{
          autoAlpha:1,delay:0
      });

      TweenMax.to($(".ghost_wrapper .ghost_text"), 1,{
          autoAlpha:0,delay:1.5
      });

      TweenMax.to($(".ghost_wrapper .ghost_svg"), 1,{
          autoAlpha:0,delay:1.5

      });
      TweenMax.to($(".ghost_wrapper .ringo_hand"), 0,{
          autoAlpha:1,delay:0
      });

      TweenMax.to($(".ringo_target"), 0,{
          autoAlpha:0,delay:0
      });

      TweenMax.to($(".ringo_target"), 0,{
          autoAlpha:0,delay:3,onComplete: function(){
            ghost_bunshin =false;
              reset_ghost();
            }
      });

      return;

    }

    if(getDevice == "pc"){
      ghostX = (mouseX_pointer + delay * ghostX) / (delay+1);
      ghostY = (mouseY_pointer + delay * ghostY) / (delay+1);
    }else{
      ghostX = (iconX + delay*0.8 * ghostX) / (delay*0.8+1);
      ghostY = (iconY + delay*0.8 * ghostY) / (delay*0.8+1);
    }

    if((ghostX-ghostX_old) > 0 ){
      TweenMax.to($(".ghost_wrapper .ghost_svg"), 0,{
          scaleX:-1,scaleY:1
      });
    }else{
      TweenMax.to($(".ghost_wrapper .ghost_svg"), 0,{
          scaleX:1,scaleY:1
      });
    }

    ghostX_old = ghostX;
    ghostY_old = ghostY;

    if(getDevice == "pc"){
      iconX = (mouseX_pointer + delay_icon * iconX) / (delay_icon+1);
      iconY = (mouseY_pointer + delay_icon * iconY) / (delay_icon+1);
    }else{

      if(iconX < 0 ){
        iconX = iconX+1;
      }else if(iconX > width){
        iconX = iconX-1;
      } else{
        iconX = iconX - deviceRX/2.5;
      }

      if(iconY < 0 ){
        iconY = iconY+1;
      }else if(iconY > height){
        iconY = iconY-1;
      }else{
        iconY = iconY + deviceRY/2;
      }
    }

    $('.ghost_wrapper').css({top:(ghostY),left:(ghostX)});
    $('.ringo_target').css({top:(iconY),left:(iconX)});

    kyori = Math.sqrt( Math.pow( ghostX-iconX, 2 ) + Math.pow( ghostY-iconY, 2 ) ) ;
    // console.log(kyori);
  }

  function reset_ghost(){


    kyori=1000;

    stop_ghost = false;

    $('.ghost_wrapper .text0').css({'visibility':'hidden'});
    $('.ghost_wrapper .text1').css({'visibility':'hidden'});

    ghostX = mouseX = width/2;

    if(getDevice == "pc"){
        ghostY = mouseY = height/2*3.5;
    }else{
        ghostY = mouseY = height/2*3;
    }

    iconX = mouseX = mouseX_pointer = width/2;
    iconY = mouseY = mouseY_pointer = height/2;

    TweenMax.to($(".ghost_wrapper .ghost_text"), 0,{
        autoAlpha:0,delay:1
    });

    TweenMax.to($(".ghost_wrapper .ghost_svg"), 1,{
        autoAlpha:1,delay:0.5
    });
    TweenMax.to($(".ghost_wrapper .ringo_hand"), 0,{
        autoAlpha:0,delay:0
    });
    TweenMax.to($(".ringo_target"), 0,{
        autoAlpha:1,delay:0.1
    });
  }

  // 初期化イベント
  window.addEventListener('load', initialize, false);

} ) ();

window.addEventListener( 'resize', onWindowResize, false );
document.addEventListener('mousemove', onDocumentMouseMove, false);
window.addEventListener('deviceorientation', onDocumentDeviceorientation, false);

onWindowResize();

function onWindowResize() {
  width = window.innerWidth ;
  height = window.innerHeight;
}

function onDocumentMouseMove(e) {

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
    mouseX = (e.clientX - windowHalfX);
    mouseY = (e.clientY - windowHalfY);

    mouseX_pointer = e.clientX
    mouseY_pointer = e.clientY

}

function onDocumentDeviceorientation(e) {

    if(device_origenalY == 0){
      device_origenalY = e.beta;
      device_origenalY ++
    }


    deviceRY = e.beta-device_origenalY;
    deviceRX = -(e.gamma);

}
