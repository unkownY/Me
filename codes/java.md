[BACK](README.md)

---
# java 相关


### 安装

* 解压jdk文件
    ```shell script
        tar -zxvf jdk_****.tar.gz -C target_path
    ```

* 编辑文件
    ```shell script
        vim /etc/profile
    ```
* 添加
    ```shell script
        ## JAVA_HOME
        export JAVA_HOME=target_path
        ## PATH
        export PATH=$PATH:$JAVA_HOME/bin
    ```

* 使更改生效
    ```shell script
        source /etc/profile
    ```

---  
[BACK](README.md)
