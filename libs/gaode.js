// 加载高德地图矢量图层
var gaode = new ol.layer.Tile({
    title: "高德地图矢量图层",
    source: new ol.source.XYZ({
        url: 'http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}',
        wrapX: false
    }),
    // visible:false
    // opacity:1
});