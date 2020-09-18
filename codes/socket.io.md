[BACK](README.md)

---

[TOC]
# socket.io

## node

#### 安装: 
```
    npm install --save socket.io
```

#### 使用
* 服务器端
    * 最简单的初始化

        ```node
            const io = require('socket.io')();
            io.listen(server); // 进行监听 (和express同一个接口))
        ``` 

    * 直接进行监听

        ```node
            let io = require('socket.io')(server); // server => express实例
        ```

    * 添加 socket.io 的 jwt 认证

        ```node
            // 握手阶段使用 jwt 进行认证
            io.use(socketioJwt.authorize({ 
                secret: TOKEN_SECRET,
                handshake: true,
            }));
        ```
    * 基础操作

        * socket 连接时的操作

            ```node
                // 连接成功
                io.on('connection',async (socket)=>{
                    // jwt 参数
                    let { id } = socket.decoded_token;
                    // query 参数
                    let { qid } = socket.handshake.query;

                    // 连接关闭
                    socket.on('disconnect',async ()=>{
                        socket.disconnect(true);
                    });
                });
            ```

        * 加入
            1. 加入房间 `socket.join(roomId)`
            2. 向房间发送信息 : `io.to(roomId).emit('event_name',data)`

* 服务器多实例情况下的设置

    * 多实例下,需要保证每次的连接都在同一个实例上
    * 解决
        1. 使用 `ip-hash`
        2. 使用 `socket.io-redis` (**socket.io**官方方法)

            ```node
                const redisAdapter = require('socket.io-redis');
                io.adapter(redisAdapter({ host: 'localhost', port: 6379 }));
            ```
    * 客户端需要进行的设置

        ```js
            const socket = io('localhost',{
                transports: ['websocket'],  // 这个是需要设置的, 使用 websocket 连接
                query:{id:'1'} // 这个是query传参,和设置无关
            });
        ```
* socket加入房间 / 分房间
    ```node
        // 获取房间参数
        let thisroom = socket.handshake.query.room;
        // 被动加入房间
        socket.join(thisroom);
        // 主动触发
        socket.on('changeRoom',(res)=>{
            // 主动加入房间
            socket.join(res,(res)=>{
                console.log('changeRoom-rooms',socket.rooms);
                // 查看房间内的套接字个数
                io.of('/').to(thisroom).clients((error, clients) => {
                    if (error) throw error;
                    console.log('---',clients);
                    // 满足条件,通知加载完成
                    if(clients.length>=2) socket.to(thisroom).emit('loadingDown','Hello World.');
                });
            });
        });
    ```
  
---
[BACK](README.md)
