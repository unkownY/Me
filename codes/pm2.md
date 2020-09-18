[BACK](README.md)

---

# pm2

> `node` 进程管理

## 清除所有  _log_

```shell script
pm2 flush
```

## 在 _cluster_ 模式下,合并每个进程的 _log_
```js
module.exports = {
    apps: [{
        name: 'app',
        script: 'app.js',
        output: './out.log',
        error: './error.log',
        merge_logs: true, // 添加这一句
    }]
}
```

## 日志 滚动

### 安装

```shell script
pm2 install pm2-logrotate
```

### 参数

参数|默认值|作用|可选值
--- | --- | --- | ---
`max_size` |10M |设置日志大小|10G,10M,10K
`retrain` | 30 | 日志留存数量|`Number`
`compress`|`false`|是否压缩日志|`Boolean`
`dateFormat`|`YYYY-MM-DD_HH-mm-ss`|日志的命名|???
`rotateModule`|`true`|像其他程序一样滚动 `pm2` 的日志| ???
`workerInterval`|30s| `pm2` 进程多久检测一次日志大小|`Number`,最小值 1
`rotateInterval`|`0 0 * * *` 每天0点|日志滚动时间|使用 `node-schedule` 
`TZ`|默认为系统时间|日志保存时区|`Etc/GMT-1`

### 设置参数

```shell script
  pm2 set pm2-logrotate:<param> <value>
```
e.g:
 * `pm2 set pm2-logrotate:max_size 1K (日志大小 1K)`
 * `pm2 set pm2-logrotate:compress true (进行日志压缩)`
 * `pm2 set pm2-logrotate:rotateInterval '*/1 * * * *' (每分钟滚动)`

## 设置 开机启动
```shell script
    pm2 startup
    pm2 start ***
    pm2 save
```

---
[BACK](README.md)

