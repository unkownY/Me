[BACK](./README.md)

---
# [mongoose](https://github.com/Automattic/mongoose)

## install

```
npm install mongoose
```

## how to use


**创建 Schema**

```js
const mongoose = require('codes/mongoose');
const Schema = mongoose.Schema;

let _Name=new Schema({
    author:{type:String,default:'',required:true,unique:true},
    expiredAt:Date,
    gender:Number,
    used:{type:Array,default:[]}
},{timestamps:true}); 
/* 
  添加 {timestamps,true} 后
  mongo自行添加 createdAt,updatedAt
  并自行更新updatedAt
*/
module.exports = _Name;
```

**创建 数据库**

```js

const mongoose = require('codes/mongoose');

let options = {
    user: 'username',
    pass: 'password',
    useNewUrlParser: true,
    useCreateIndex: true,
};

mongoose.connect('mongodb://127.0.0.1:27017/dbname',options);
mongoose.set('useFindAndModify', false); //去除摒弃对的方法

const DB = {};

//创建Model
DB.Name= mongoose.model('Name',require('./_Name'));

module.exports=DB;
```

## 分页
```js
// limit+skip = 分页
DBNAME
    .find({})   // 查询数据
    .sort()     // 排序
    .limit()    // 返回数据个数
    .skip()     // 跳过数据个数
    .countDocument()    // 查找到的数据个数(mongoose)
    .count()    // 查找到的数据个数(mongodb)
```
## 模糊查询

```js
    // 构建正则 => keyword是查询的词
    let rex = new RegExp(keyword,'i');
    // 数据库搜索
    DBNAME.find({
        $or:[
            {'title': {$regex: rex}}, // 搜索 title 字段
            {'nickname': {$regex: rex}}, // 搜索 nickname 字段
        ]
    })
```

## 位置查询

```js
// 数据库定义时
schema = {
    'gps':{type:[Number],index: '2d'}, // 地址经纬度 [longitude/经度,latitude/纬度]
}
// 数据库查询 距离远近排序
DBNAME.find({
    'gps':{$near:gps}
})
```

## 去重查询

```js
let oidArr = await DBNAME.distinct('oid');
```

## 聚合查询

```js
let data = await AlarmReport.aggregate([
    {$match: {'ip':{'$nin':['',null]}}}, // 条件查询
    {$group: {'_id': '$ip', count: {$sum: 1}}}, // 分组(以ip为键,统计个数)
    {$project: {'_id': 0, 'ip': '$_id', 'count': 1}}, // 返回值(显示ip,count)
    {$sort: {'count': -1}}, // 排序(按照count进行反向排序)
    {$limit:3}, // 截取个数
]);
```

---
[BACK](./README.md)