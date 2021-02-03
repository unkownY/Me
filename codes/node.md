# Node.js


## 安装

1. 直接下载二进制执行文件
```shell
weget node-v4.4.4-linux-x64.tar.xz
tar -xJf node-v4.4.4-linux-x64.tar.xz 
```

1. 通过包管理器安装

```js
// Using Ubuntu
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

// Using Debian, as root
curl -sL https://deb.nodesource.com/setup_12.x | bash -
apt-get install -y nodejs
```

## 更换node源

1. 直接更换node源
```shell
npm config set registry https://registry.npm.taobao.org
```

1. 安装nrm

```shell
npm install -g nrm

nrm list
```

## 代码段

* 快速生成数组
```js
Array.from({length:10}, (v,k) => k); // [0,1,2,3,4,5,6,7,8,9]
```