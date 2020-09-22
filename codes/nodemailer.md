[BACK](README.md)

---

# [nodemailer](https://nodemailer.com/)

## 安装

```shell script
npm install nodemailer
```

## 例子

```js
/**
 * 用于GPS,角度转弧度
 */
inner.rad = d => Number(d) * Math.PI / 180.0;
```


```js
let {
    targets, // 收件人 数组或字符串
    title, // 标题
    attachs, // 附件 数组
    text, // 邮件内容
    html, // 邮件 html
} = obj;
console.log(obj);
if(!title || _.isEmpty(targets)) return {success:false,msg:'参数缺失'};

Array.isArray(targets)?targets=targets.join(','):targets;
try{
    // 创建邮件发送前提
    let transporter = nodemailer.createTransport({
        host: 'smtp.163.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: MAIL_USER_ADDRESS, // generated ethereal user
            pass: MAIL_USER_PASS, // generated ethereal password
        },
    });
    // 填写邮件信息
    let info = await transporter.sendMail({
        from: `"${MAIL_USER_NAME}" ${MAIL_USER_ADDRESS}`, // sender address
        to: targets, // list of receivers
        subject: title, // Subject line
        text: text || '', // plain text body
        html: html || '', // html body
        attachments: attachs || [], // 附件
    });

    let {
        accepted, // 邮件接收 成功数组
        rejected, // 邮件接收 失败数组
        envelopeTime,
        messageTime,
        messageSize,
        response, // 返回值, 例: '250 Mail OK queued as smtp13,EcCowABnne7OFdJd9C8BUw--.65S2 1574049231',
        envelope, // 发送者与接受者 { from: 'unkownY@163.com', to: [ '1424902399@qq.com' ] },
        messageId, // 唯一 id'<5663b39c-0cb1-49ef-8aa9-cd040f6f3eac@163.com>'
    } = info;

    return {success:true,msg:'邮件发送成功'};
}catch(e){
    console.log('邮件发送错误',e.message);
    return {success:false,msg:'邮件发送错误'};
}
```

---
[BACK](README.md)
