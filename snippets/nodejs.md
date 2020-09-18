[BACK](README.md)

---

#  node.js相关代码片段


## 图片下载
```js
    const superagent = require('superagent');
    const fs = require('fs');
    const path = require('path');

    // 图片地址
    let API = '';

    // 请求图片数据
    let res = await superagent.get(API);

    if(!res) console.warn('Do not have response.');
    if(res.status>=400) console.warn(`Http code: ${res.status}.`);

    // 请求头
    let headers = res.headers;

    // 文件类型
    let fileType = headers['content-type'].split('/')[1];

    // 文件名称
    let fileName = `./OnePiece/${Date.now()}.${fileType}`;
    // 存储位置
    let destination = path.join(__dirname,fileName);

    fs.writeFileSync(destination,res.body);
```

## 文件上传

```js
    const superagent = require('superagent');
    const fs = require('fs');
    const path = require('path');

    // 图片地址
    let API = '';

    // 请求图片数据
    let res = await superagent.get(API);

    if(!res) console.warn('Do not have response.');
    if(res.status>=400) console.warn(`Http code: ${res.status}.`);

    // 请求头
    let headers = res.headers;

    // 文件类型
    let fileType = headers['content-type'].split('/')[1];

    // 文件名称
    let fileName = `./OnePiece/${Date.now()}.${fileType}`;
    // 存储位置
    let destination = path.join(__dirname,fileName);

    fs.writeFileSync(destination,res.body);
```

## 计算倒计时
```js
    /**
    * 计算倒计时
    * @param {Date} cd 上次记录的恢复结束时间
    * @param {Number} count 当前数值
    * @param {Number} max 封顶数值
    * @param {Number} count 每次增加数量
    * @param {Number} time 每次增加的时间间隔
    * @returns count<Number>:更改后的数值, cd<Date>:更改后的时间
    */
    let cd = async (count,cd,max,num,time) => {
        if(count>=max) return {success:true,data:{count,'cd':0}};
        let recoverCount = 0;
        // 两个时间戳
        cd = new Date(cd).getTime();
        let now = Date.now();
        // 计算差值
        let diff = now-cd;
        // 判断两个时间的区间
        if(diff>=0) recoverCount = parseInt(diff/time)+1; // +1,是因为 本身sptime就表示的是恢复体力的时间,超过sptime本身就应该增加体力值
        // 回复之后体力值 大于等于 最大体力,则不需要计算回复
        let total = recoverCount*num;
        if(count+total >= max) {
            cd=0;
            count=max;
        } else {
            count += total;
            cd += recoverCount*time;
        }

        return {success:true,data:{count,'cd':new Date(cd)}};
    };
```

### 本地时间字符串

```js
    let localeDateString = (timestamp) => {
        let day = new Date();
        try{
            if(timestamp) day = new Date(timestamp);
        }catch(e){
            day = new Date();
        }
        return `${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()}`;
    };
```

### 获取时间戳
*  今天 0点 时间戳
```js
    let today0 = () => {
        let today = new Date();
        today.setHours(0,0,0,0);
        return today.getTime();
    };
```
* 明天 0点 时间戳
```js
    let tomorrow0 = () => 57600000-Date.now()%86400000;
```

1. 今天 剩余时间 (ms)
```js
    /**
    * @params {String} rtype 获取剩余时间的格式(ms:毫秒,s:秒)
    */
    let todayRemain = (rtype = 'ms') => {
        let today = new Date();
        today.setHours(23,59,59);
        let result = today.getTime()+1-Date.now(); // 今天 24 点
        return rtype === 's'?parseInt(result/1000):result;
    };
```

---
[BACK](README.md)
