[BACK](README.md)

---
# Homebrew

## 安装

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## 使用

* 使用 **brew** 安装软件

    ```shell
    brew install wget
    ```

* 创建自己的 **Homebrew** 包

    ```shell
    brew create https://foo.com/bar-1.0.tgz
    ```

* 使用 **brew cask** 安装 macOS 的软件,字体及插件

    ```shell
    brew cask install firefox
    ```

* 创建一个 **cask**

    ```shell
    brew cask create foo
    ```

 [更多文档](https://docs.brew.sh/)

---
[BACK](README.md)
