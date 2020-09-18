[BACK](README.md)

---
# [node-cron](https://github.com/node-cron/node-cron)

## install

```
npm install node-cron 
```

## how to use

```js
const cron = require('codes/node-cron');

let range = '* 0-23 * * *';

cron.schedule(range, async ()=>{
    // your func
},{
    scheduled: true, // 是否自动启动
    timezone: "Asia/Shanghai"
});
```

### range取值

```
     # ┌────────────── second (optional)
     # │ ┌──────────── minute
     # │ │ ┌────────── hour
     # │ │ │ ┌──────── day of month
     # │ │ │ │ ┌────── month
     # │ │ │ │ │ ┌──── day of week
     # │ │ │ │ │ │
     # │ │ │ │ │ │
     # * * * * * *

```

field|value
---|---
second|0-59
minute|0-59
hour|0-23
day of month|1-31
month|1-12 (or names)
day of week|0-7 (or names, 0 or 7 are sunday)

**取值示例:**
格式|意思
---|---
`* * * * *`| 每分钟执行一次
`*/2 * * * *`|每偶数分钟执行一次
`1,2,3,4 * * * *`|分针到达1,2,3,4分的时候执行
`1-4 * * * *`|同上

### scheduled取值

1. true: 
**启动就自动运行**

1. false: 
**可以通过变成触发**

* 初始化

```js
var task = cron.schedule('* * * * *', () =>  {
  console.log('will execute every minute until stopped');
},{scheduled:false});
```

* Start

```js
task.start();
```

* Stop

```js
task.stop();
```

* Destory

```js
task.destory();
```

---
[BACK](README.md)
