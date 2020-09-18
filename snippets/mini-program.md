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
   
---
[BACK](README.md)