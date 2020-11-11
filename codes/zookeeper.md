# [Zookeeper](https://zookeeper.apache.org/)

## 安装配置

* [下载](https://zookeeper.apache.org/releases.html)
    ```shell
    wget https://mirror.bit.edu.cn/apache/zookeeper/zookeeper-3.6.2/apache-zookeeper-3.6.2-bin.tar.gz
    ```

* 解压
    ```shell
    tar xf apache-zookeeper-3.6.2-bin.tar.gz -C /usr/local
    ```

* 创建连接
    ```shell
    ln -s apache-zookeeper-3.6.2-bin zookeeper
    ```

* 创建数据目录及日志目录
    ```shell
    mkdir /usr/local/zookeeper/{data,logs}
    ```

* 修改配置
    ```shell
    cd /usr/local/zookeeper/conf
    cp zoo_sample.cfg zoo.cfg
    ```

    ```conf
    # 配置设置
    tickTime=2000 # 
    initLimit=10
    syncLimit=5
    dataDir=/usr/local/zookeeper/data
    dataLogDir=/usr/local/zookeeper/logs
    clientPort=2181
    ```
    **配置项:**
    * **tickTime:** zk中使用的基本时间单元，单位为毫秒，用于控制心跳和超时。更低的tickTime值可以更快的发现超时问题
    * **initLimit:** zk集群中follower初始化连接到leader时，最长能忍受多少个tickTime，默认值为10，即为20s
    * **syncLimit:** 用于配置leader和follower间进行心跳检测的最大超时时间。如果在设置的时间内followers无法与leader进行通信，那么follower将会被丢弃。默认值为5，即10s
    * **dataDir:** zk用于存储内存数据库快照的目录。如果不指定dataLogDir参数，则数据库更新的事务日志也将会存储在该目录下
    * **dataLogDir:** 指定zk事务日志的存储目录
    * **clientPort:** 服务器监听客户端连接的端口，默认值为2181
    * **maxClientCnxns:** 限制单个客户端与单台服务之间的并发连接数，默认值为60，设置为0则不限制
    * **autopurge.snapRetainCount:** 配置zk在自动清理的时候需要保存的数据文件快照的数量和对应的事务日志文件，默认为3
    * **autopurge.purgeInterval:** 和autopurge.snapRetainCount配置使用，用于配置zk自动清理文件的频率，默认为1小时，即默认开启自动清理功能，设置为0，则表示禁用清理功能


## 基础操作

* 启动
    ```shell
    /usr/local/zookeeper/bin/zkServer.sh start
    ```

* 关闭
    ```shell
    /usr/local/zookeeper/bin/zkServer.sh stop
    ```
    
* 查看状态
    ```shell
    /usr/local/zookeeper/bin/zkServer.sh status
    ```

## 设置开机启动

* 创建设置文件
    ```shell
    # 自定 systemctl 配置文件
    cd /usr/lib/systemd/system
    vim zookeeper.service
    ```
* 修改文件
    ```shell
    [Unit]
    Description=Zookeeper Service # 服务描述
    After=network.target # 前置服务

    [Service]
    Type=forking
    Environment=JAVA_HOME=/home/qch/jdk1.8.0_77 # 执行环境
    ExecStart=/home/qch/exec/zookeeper.service.run # 启动时执行的命令
    ExecStop=/home/qch/exec/zookeeper.service.run # 停止时执行的命令
    Restart=on-failure # 什么情况下进行重新启动

    [Install] # 设置开机启动要执行的命令
    WantedBy=multi-user.target
    ```
* 重载配置文件
    ```shell
    systemctl daemon-reload
    ```
* 将服务放入开机启动
    ```shell
    systemctl enable zookeeper.service
    ```

* 启动服务
    ```shell
    systemctl start zookeeper
    ```

* 停止服务
    ```shell
    systemctl stop zookeeper
    ```

* 查看服务状态
    ```shell
    systemctl status zookeeper
    ```

