# 计算 GPS 坐标点距离

```js
/**
 * 计算两个 GPS 坐标的距离
 * @param {Number} lng1 第一个坐标的经度
 * @param {Number} lat1 第一个坐标的纬度
 * @param {Number} lng2 第二个坐标的经度
 * @param {Number} lat2 第二个坐标的纬度
 *
 * @returns {Number} gps距离,单位:米
 */
let calcGPS = (lng1,lat1,lng2,lat2) => {
    const EARTH_RADIUS = 6378.137; // 地球半径

    let radLat1 = inner.rad(lat1);
    let radLat2 = inner.rad(lat2);
    let a = radLat1 - radLat2;
    let b = inner.rad(lng1) - inner.rad(lng2);
    let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) + Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
    let rdata = Math.round(s * EARTH_RADIUS * 10000) / 10000;

    return rdata*1000; // 化成米
};
```