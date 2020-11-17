[BACK](README.md)

---


# [KafkaJS](https://kafka.js.org/)

### 安装
```js
npm install kafkajs
```

### 简单使用

* Client
    ```js
    const { Kafka } = require('kafkajs')
    const kafka = new Kafka({
        clientId: 'my-app',
        brokers: ['kafka1:9092', 'kafka2:9092']
    })
    ```
* Producer
    ```js
    const producer = kafka.producer()
    
    await producer.connect()
    await producer.send({
        topic: 'test-topic',
        messages: [
          { value: 'Hello KafkaJS user!' },
        ],
    })
    
    await producer.disconnect()
    ```
  
* Consumer
    ```js
    const consumer = kafka.consumer({ groupId: 'test-group' })
    
    await consumer.connect()
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
    
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                value: message.value.toString(),
            })
        },
    })
    ```

---
[BACK](README.md)
