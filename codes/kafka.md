[BACK](README.md)

---
# [KAFKA](http://kafka.apache.org/)

## 简单介绍
1. Kafka是一种高吞吐量的分布式发布订阅消息系统，它可以处理消费者在网站中的所有动作流数据
2. 相关术语
    * **Broker**
        Kafka集群包含一个或多个服务器，这种服务器被称为broker
    * **Topic**
       每条发布到Kafka集群的消息都有一个类别，这个类别被称为Topic。（物理上不同Topic的消息分开存储，逻辑上一个Topic的消息虽然保存于一个或多个broker上但用户只需指定消息的Topic即可生产或消费数据而不必关心数据存于何处）
    * **Partition**
        Partition是物理上的概念，每个Topic包含一个或多个Partition.
    * **Producer**
        负责发布消息到Kafka broker
    * **Consumer**
        消息消费者，向Kafka broker读取消息的客户端。
    * **Consumer Group**
        每个Consumer属于一个特定的Consumer Group（可为每个Consumer指定group name，若不指定group name则属于默认的group）。

## 安装/启动

1. [下载](https://kafka.apache.org/downloads.html) (不要下载带`src`的源文件)
```shell script
tar -xzf kafka_2.12-2.3.0.tgz
cd kafka_2.12-2.3.0
```

1. 启动 zookeeper

```shell script
bin/zookeeper-server-start.sh config/zookeeper.properties
```

1. 启动 kafka

```shell script
bin/kafka-server-start.sh config/server.properties &
```

## node

*使用 [kafka-node](https://github.com/SOHU-Co/kafka-node) 进行连接*

* 安装
    ```shell script
    npm install kafka-node
    ```
* 使用
    `kafka-node`: [使用方法](kafka-node.md)


## 相关网站
* **kafka官方:** http://kafka.apache.org
* **kafka下载:** https://kafka.apache.org/downloads.html
* **kafka入门介绍:** https://www.orchome.com/kafka/index
* **kafka-node:** https://www.orchome.com/kafka/index

---
[BACK](README.md)
