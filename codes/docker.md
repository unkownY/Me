[BACK](README.md)

---

# 操作

```shell

# 启动
systemctl start docker.service
# 重启
systemctl restart docker.service
# 停止
systemctl stop docker.service
# 查看状态
systemctl status docker.service

```


# 问题

1. **Docker容器启动失败 Failed to start Docker Application Container Engine的解决办法**
```shell

cd /etc/docker
ll
# 查看是否存在 daemon.json
vim daemon.json
# 将daemon.json 完善成正确的json格式
# 启动

```



---

[BACK](README.md)