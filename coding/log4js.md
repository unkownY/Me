# 自定义日志

## name 

[log4js](https://github.com/log4js-node/log4js-node)

## install

```
npm install log4js [-d|-g]
```

## how to use

### Level 1:

**in logger.js:**
```
const log4js = require('log4js');

//log4js 配置
log4js.configure({
    //设置日志 类型 格式
    appenders:{
        logToFile:{
            type:'file',
            filename:`${CONFIG.LOG_PATH}/${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}.log`,
            maxLogSize:5000000,
            keepFileExt:true,
            layout:{
                type:'pattern',
                pattern:'--TIME: %d --LEVEL: %p --HOST: %h %m %n',// %d 请求时间,$p 日志level,%m connectLogger里设置的log格式,%n 换行
            },
        },
        console:{
            type:'console',
        },
    },
    // 日志监控 类型
    categories:{
        logToFile:{
            appenders:['logToFile'],
            level:'all',
        },
        default:{
            appenders:['console'],
            level:'all',
        },
    },
});
// 日志 内容格式
const format = '--ETIME: :response-time --IP: :remote-addr --METHOD: :method --URL: :url --STATUS: :status --UA: :user-agent --REFERRER: :referrer --LEN: :content-length';

// 初始化内容
const logger = log4js.getLogger('logToFile');

module.exports = {format,logger};
```

**in app.js:**

```js
const log4js = require('log4js');
const {logger,format} = require('log4js');

// format: 日志的内容格式
app.use(log4js.connectLogger(logger,{format}));

```
