const superagent = require('superagent');
const fs = require('fs');
const path = require('path');

// 图片地址
let API = '';
// 文件名称
let fileName = 'name.jpg';
// 存储位置
let destination = path.join(__dirname,fileName);
// 可写流
const stream = fs.createWriteStream(destination);
// 请求并存储图片
superagent.get(API).pipe(stream);