[BACK](README.md)

---
# EXPRESS

## 获取请求的 ip 地址
* 获取 `ip` 地址
    * 正常: `req.ip`
    * 使用 nginx 进行了反向代理
        1. 设置`niginx`,下面两个这个

            ```node
                proxy_pass http://127.0.0.1:5555
                proxy_set_header Host $http_host;
                proxy_set_header X-Real-IP $remote_addr; // 这个
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; // 这个
                proxy_set_header X-Forwarded-Proto $scheme;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
            ```

        1. 后端自定义函数

            ```node
                exports.ip = req => {
                    return req.headers['x-forwarded-for'] ||
                    req.ip ||
                    req._remoteAddress ||
                    (req.socket &&
                        (req.socket.remoteAddress ||
                        (req.socket.socket && req.socket.socket.remoteAddress)
                        )
                    );
                };
            ```
            
        1. ip 获取 complete.

---
[BACK](README.md)
