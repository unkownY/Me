[BACK](README.md)

---

# electron 

## 文件夹最终样式

```shell script
--electron
    --Cache
        electron-v1.8.2-win32-x64.zip
        SHASUMS256.txt-1.8.2
--electron-builder
    --cache
        --app-builder
            --app-builder-v0.6.1-x64
                解压app-builder-v0.6.1-x64.7z所得文件
        --nsis
            --nsis-3.0.1.13
                解压nsis-3.0.1.13.7z所得文件
        --nsis-resources
            --nsis-resources-3.3.0
                解压nsis-resources-3.3.0.7z所得文件
        --winCodeSign
            --winCodeSign-1.9.0
                解压winCodeSign-1.9.0.7z所得文件
```

## 创建 electron-vue 项目
```shell script
    # 安装 vue-cli 和 脚手架样板代码
    npm install -g vue-cli
    vue init simulatedgreg/electron-vue my-project

    # 安装依赖并运行你的程序
    cd my-project
    yarn # 或者 npm install
    yarn run dev # 或者 npm run dev
```

## 问题处理

* 错误提示: `Html Webpack Plugin: ReferenceError: process is not defined`
    * 修改位置: 
        * `.electron-vue/webpack.web.config.js`
        * `.electron-vue/webpack.renderer.config.js`
    * 修改内容

        ```js
        function templateParameters(compilation, assets, options) {
            return {
                compilation: compilation,
                webpack: compilation.getStats().toJson(),
                webpackConfig: compilation.options,
                htmlWebpackPlugin: {
                    files: assets,
                    options: options
                },
                process,
            };
        }
        ```

---
[BACK](README.md)
