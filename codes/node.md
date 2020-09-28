# Node.js


## 安装

```js
// Using Ubuntu
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

// Using Debian, as root
curl -sL https://deb.nodesource.com/setup_12.x | bash -
apt-get install -y nodejs
```

## 代码段

* 快速生成数组
```js
Array.from({length:10}, (v,k) => k); // [0,1,2,3,4,5,6,7,8,9]
```