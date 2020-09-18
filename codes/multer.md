[BACK](README.md)

---

# multer

## 安装
```shell script
    npm install multer
```

## 例子

```js
// 上传文件
const express = require('../Me/codes/express');
const router = express.Router();

const path = require('path');
const fs = require('fs');
const md5 = require('md5');
const multer = require('./multer');

// 上传文件夹
const upload = multer({dest: 'public/upload/analyze/'});

const {
    DOMAIN, // 域名
} = require('../config');

// 用户上传图片
router.post('/analyze', upload.any(), async (req,res) => {
    try{
        // 文件信息
        let file = req.files[0];
        // 临时地址
        let tempfile = file.path;
        // 文件类型
        let filetype = file.originalname.split('.').reverse()[0];
        // 将微信的文件名md5
        let filename = `${md5(file.originalname)}.${filetype}`;

        // 保存的位置
        let savepath = path.join(__dirname,`../public/upload/analyze/${filename}`);

        // 读取文件并重新存储,删除临时文件
        let filetempdata = fs.readFileSync(tempfile);
        fs.writeFileSync(savepath,filetempdata);
        fs.unlinkSync(tempfile);
        // 返回地址信息
        return res.json({success:true,data:`${DOMAIN}/upload/analyze/${filename}`});
    }catch(e){
        return {success:false,msg:e.message};
    }
});


module.exports = router;
```

---
[BACK](README.md)
