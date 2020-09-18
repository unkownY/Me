[BACK](README.md)

---
## 国内镜像地址
    
    名称 | 源地址
    ---|---
    清华 | https://pypi.tuna.tsinghua.edu.cn/simple
    阿里云 | http://mirrors.aliyun.com/pypi/simple/
    中国科技大学 | https://pypi.mirrors.ustc.edu.cn/simple/
    华中理工大学 | http://pypi.hustunique.com/
    山东理工大学 | http://pypi.sdutlinux.org/ 
    豆瓣 | http://pypi.douban.com/simple/

## 使用

1. 临时使用
    ```shell
        pip install -i https://pypi.mirrors.ustc.edu.cn/simple/ pyspider
    ```
2. 更新 `pip.ini` 文件
    ```ini
        [global]
        index-url = https://pypi.tuna.tsinghua.edu.cn/simple/
        [install]
        trusted-host=pypi.tuna.tsinghua.edu.cn
    ```
   
---
[BACK](README.md)