# mongoose 使用mongodb进行数据存储

## name

[mongoose](https://github.com/Automattic/mongoose)

## install

```
npm install mongoose
```

## how to use


**创建 Schema**

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let _Name=new Schema({
    author:{type:String,default:'',required:true,unique:true},
    expiredAt:Date,
    gender:Number,
    used:{type:Array,default:[]}
},{timestamps,true}); 
/* 
  添加 {timestamps,true} 后
  mongo自行添加 createdAt,updatedAt
  并自行更新updatedAt
*/
module.exports = _Name;
```

**创建 数据库**

```js

const mongoose = require('mongoose');

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

***~[BACK](ReadMe.md)~***