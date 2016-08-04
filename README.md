# framework7-webpack-demo

<img src="https://dn-cnode.qbox.me/FggySaifXShKXx-Rp9c5gxh6Gox0" width="200" center>

基于Framework7，使用webpack＋gulp搭建的前端项目架构

> 推荐使用webpack分支，该分支仅使用了webpack，去掉了gulp和bower，更加方便

```bash
git clone -b webpack https://github.com/Alex-fun/framework7-webpack-demo.git
```

[在线demo](https://hejx.herokuapp.com/f7/)，请使用浏览器(chrome)手机模式浏览。

### 安装
```bash
git clone https://github.com/Alex-fun/framework7-webpack-demo.git

cd framework7-webpack-demo

npm install && bower install

```

若需要使用yeoman的generator生成器，请点击[generator-workplus-framework7](https://github.com/WorkPlusFE/generator-workplus-framework7)


### 开发

```bash
gulp build-dev
```

若要代理，请看gulpfile.js中的备注


### 打包

``` bash
gulp build
```

### LICENSE
MIT

