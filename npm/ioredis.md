# redis 的方便使用

## name 

[ioredis](https://github.com/luin/ioredis)

## install

```
npm install ioredis
```

## how to use

```js
// 注册
const Redis = require('ioredis');
let redis =
    new Redis()       // Connect to 127.0.0.1:6379
    new Redis(6380)   // 127.0.0.1:6380
    new Redis(6379, '192.168.1.1')        // 192.168.1.1:6379
    new Redis('/tmp/redis.sock')
    new Redis({
    port: 6379,          // Redis port
    host: '127.0.0.1',   // Redis host
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    password: 'auth',
    db: 0
    })

// 使用 和redis-cli同样的命令
await redis.get(key)
await redis.set(key,data,'EX',expire)
await redis.incr(key)
...


```

***~[BACK](ReadMe.md)~***
