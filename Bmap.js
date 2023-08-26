// function initialize() { 
//     var mp = new BMapGL.Map('map'); 
//     mp.centerAndZoom(new BMapGL.Point(121.491, 31.233), 11); 
//   } 
      
//   function loadScript() { 
//     var script = document.createElement("script"); 
//     script.src = "https://api.map.baidu.com/api?v=1.0&type=webgl&ak=4NG0us2U15vIgolZukrDRB0dGnezHbkM&callback=initialize";}
/* eslint-disable no-undef */
// loadMap可以异步加载百度地图
function loadMap() {
    return new Promise(function (resolve, reject) {
      if (typeof BMap !== "undefined") {
        // 表示当前的上下文已经引入了Bmap
        resolve(BMap);
        return;
      }
      window.onMapCallBack = function () {
        resolve(BMap);
      };
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://api.map.baidu.com/api?v=2.0&ak=" +
        "4NG0us2U15vIgolZukrDRB0dGnezHbkM" +
        "&callback=onMapCallBack";
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  
