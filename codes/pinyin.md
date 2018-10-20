# 汉字转拼音

## name

[pinyin](https://github.com/hotoo/pinyin)

## install 

```
npm install pinyin
```

## how to use

```js
const pinyin = require('pinyin');
let options = {
    heteronym : true, // 启用多音字
    style : pinyin.STYLE_NORMAL, // 普通拼音,不带声调
}
let result = pinyin('内容',{options});


/**
*   style:
*       '.STYLE_NORMAL' : 普通风格，不带声调 - ['pin', 'yin']
*       '.STYLE_TONE' : 带声调,风格1 - ['pīn', 'yīn']
*       '.STYLE_TONE2' : 带声调,风格2 - ['pin1', 'yin4']
*       '.STYLE_TO3NE' : 带声调,风格3 - ['pi1n', 'yi4n']
*       '.STYLE_INITIALS' : 只返回声母部分 - ['zh', 's', '']
*       '.STYLE_FIRST_LETTER' : 只返回首字母 - ['y', 'z']
*
*/
```


***~[BACK](ReadMe.md)~***
