[BACK](README.md)

---

# 只获取用户oid

### 百度
```node 
    const APP_ID; // 小游戏 id
    const APP_SECRET: // 小游戏 secret
    const APP_KEY:  // 小游戏 key

    /**
    * @param {String} jscode 前端传回的code
    */
    let getOid = async (jscode)=>{
        // 获取信息的API
        let url = `https://spapi.baidu.com/oauth/jscode2sessionkey?client_id=${APP_KEY}&sk=${APP_SECRET}&code=${jscode}`;

        let res = await superagent.get(url);

        // // 获取数据
        if(!res||!res.text) return {success:false,msg:'getOid.res 为空'};

        let data = JSON.parse(res.text);
        let oid = data.openid;

        return {success:true,data:oid};
    };
```

### 字节
```node
    const APP_ID; // 小游戏 id
    const APP_SECRET; // 小游戏 secret

    /**
    * @param {String} jscode 前端传回的code
    * @param {String} anonymousCode 是否为匿名获取
    */
    let getOid = async (jscode,anonymousCode)=>{
        // 获取信息的API
        let url = '';
        if (jscode){
            url = `https://developer.toutiao.com/api/apps/jscode2session?appid=${APP_ID}&secret=${APP_SECRET}&code=${jscode}`;
        }else if(anonymousCode){
            url = `https://developer.toutiao.com/api/apps/jscode2session?appid=${APP_ID}&secret=${APP_SECRET}&anonymous_code=${anonymousCode}`;
        }

        let res = await superagent.get(url).catch((e)=>{console.log('获取信息',e);});

        // // 获取数据
        if(!res||!res.text) return {success:false,msg:'getUserInfo.res 为空'};

        let data = JSON.parse(res.text);
        let oid = data.openid || data.anonymous_openid;

        return {success:true,data:oid};
    };
```

### 微信
```node
    const APP_ID; // 小游戏 id
    const APP_SECRET; // 小游戏 secret

    let getOid = async (jscode)=>{
        // 获取信息的API
        let URL = `https://api.weixin.qq.com/sns/jscode2session?appid=${APP_ID}&secret=${APP_SECRET}&js_code=${jscode}&grant_type=authorization_code`;

        let res = await superagent.get(URL).catch((e)=>{console.log('获取信息',e);});

        // // 获取数据
        if(!res||!res.text) return console.log('getUserInfo.res 为空');

        let data = JSON.parse(res.text);
        let oid = data.openid;

        return {success:true,data:oid};
    };
```
### 字节跳动
```node

    // code 和 anonymous_code 至少要有一个,有anonymous_code,则会匿名返回
    const jscode;
    const anonymousCode;

    let getOid = async (jscode,anonymousCode)=>{
        // 获取信息的API
        let url = '';
        if (jscode){
            url = `https://developer.toutiao.com/api/apps/jscode2session?appid=${APP_ID}&secret=${APP_SECRET}&code=${jscode}`;
        }else if(anonymousCode){
            url = `https://developer.toutiao.com/api/apps/jscode2session?appid=${APP_ID}&secret=${APP_SECRET}&anonymous_code=${anonymousCode}`;
        }

        let res = await superagent.get(url).catch((e)=>{console.log('获取信息',e);});

        // // 获取数据
        if(!res||!res.text) return {success:false,msg:'getUserInfo.res 为空'};

        let data = JSON.parse(res.text);
        let oid = data.openid || data.anonymous_openid;

        return {success:true,data:oid};
    };
```

### oppo

#### 计算签名

```node
    const pkgName; // package name
    const appKey; // 
    const appSecret; // 
    const token; // 前端传递 token

    let oppoSign = async (token, timestamp) => {
        try {

            let params = {
                'pkgName': PACKAGE_NAME,
                'appKey': APP_KEY,
                'appSecret': APP_SECRET,
                'token': token,
                'timeStamp': timestamp,
            };

            // 字典序
            let keys = Object.keys(params);
            keys = keys.sort();

            let str = '';
            for (let i=0;i<keys.length;i++){
                let o = keys[i];
                str+=`${o}=${params[o]}`;
                if (i!==keys.length-1) str+='&';
            }
            // 生成签名
            let sign = md5(str).toUpperCase();

            return {success: true, data: sign};

        } catch (e){
            return {success: false, msg: `获取oppo sign失败-${e.message}`};
        }
    };
```

#### 获取 oid
```node

    const PACKAGE_NAME; // 小游戏 包名称

    // 单纯获取用户 oid
    let getOid = async (token) => {
        let timestamp = Date.now();

        // 获取签名
        let signFunc= await oppoSign(token, timestamp);
        if (!signFunc.success) return signFunc;
        let sign = signFunc.data;

        // 获取信息的API
        let url = `https://play.open.oppomobile.com/instant-game-open/userInfo?pkgName=${PACKAGE_NAME}&token=${token}&timeStamp=${timestamp}&sign=${sign}`;

        let res = await superagent.get(url).catch((e) => {console.log('获取信息', e);});

        // // 获取数据
        if (!res||!res.text) return {success: false, msg: 'getOid.res 为空'};

        let data = JSON.parse(res.text);
        if (data.errorcode.toString()!=='200') return {success: false, msg: `${data.errorcode}-${data.errormsg}`};

        let userInfo = data.userInfo;
        console.log(userInfo);
        return {success: true, data: userInfo};
    };
```
   
### vivo 

#### 计算签名
```node
let vivoSign = async (token,timestamp) => {
    try{
        
        //生成随机数
        let nonce = "x".repeat(16).replace(/x/g, function(){
            return parseInt(Math.random()*10);
        });

        let params = {
            'appKey': APP_KEY,
            'appSecret': APP_SECRET,
            'nonce': nonce,
            'pkgName': PACKAGE_NAME,
            'timestamp': timestamp,
            'token': token,
        };

        // 字典序
        let keys = Object.keys(params);
        keys = keys.sort();

        // 组合字符串
        let str = '';
        for(let i=0;i<keys.length;i++){
            let o = keys[i];
            str+=`${o}=${params[o]}`;
            if(i!==keys.length-1) str+='&';
        }
        // sha256生成签名
        const sign = crypto.createHash('sha256').update(str).digest('hex')

        return {success:true,data:{sign, nonce}};
    }catch(e){
        return {success:false,msg:`获取vivo sign失败-${e.message}`};
    }
};
```

#### 获取 oid
```node
//获取用户oid
let getOid = async(token) => {

    let timestamp = Date.now();
    // 获取签名
    let signRes = await vivoSign(token,timestamp);
    if(!signRes.success) return signRes;

    let {sign,nonce} = signRes.data;

    // 获取信息的API
    let url = `https://quickgame.vivo.com.cn/api/quickgame/cp/account/userInfo?pkgName=${PACKAGE_NAME}&token=${token}&timestamp=${timestamp}&nonce=${nonce}&signature=${sign}`;

    let resData = await superagent.get(url).catch((e)=>{console.log('获取信息',e);});

    // 获取数据
    if(!resData||!resData.text) return {success:false,msg:'getUserInfo.resData 为空'};

    let vivoData = JSON.parse(resData.text);

    if(vivoData.code !== 0) return res.json({success:false,msg:`${vivoData.code}-${vivoData.msg}`});
    
    let rdata = vivoData.data;

    return res.json({success:true,data:rdata});
};
```

---
[BACK](README.md)