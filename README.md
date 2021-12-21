<div align="center">

[![maple](./image/logo-2.png)](https://github.com/redhat123456/maple)

</div>

<p align="center">An open-source online real-time collaborative Markdown editor.</p>

## 项目介绍

Markdown 文档自动即时渲染为HTML，即使渲染，想看就看，只要你会基本的 Markdown 语法，就能做出一篇不错的HTML文档排版以及pdf文件，并导出为pdf让你不再为快速做笔记而发愁☺。

## 在线编辑器地址&预览
![](./image/1.png)
预览地址： [https://tanger.ltd/maple/](https://tanger.ltd/maple/)



## 为何二次开发

单单一个微信公众号开发就止步于此就太可惜了，我经常玩数学建模比赛也会去写一些论文，用过[OverLeaf]()，也因为一些需要用过本[md](https://github.com/doocs/md)，但作为一个开发者，总会觉得自己开发出来的东西香，而且我也发觉虽然`md`好用，可是`md`这把好刀只被用在了个人`blog`上，有些人为了方便使用起`Typora`来做笔记真的不知道该笑还是哭，LaTex其实也就写论文的时候好用，`md`针对起平时的笔记和随想绰绰有余。

## 技术栈+功能特性

技术栈：

  - element
  - Vue2
  - jquery库
  - axios

功能特性：

-  支持自定义 CSS 样式
-  支持 Markdown 所有基础语法
-  支持浅色、暗黑两种主题模式
-  支持 <kbd>Ctrl</kbd> + <kbd>F</kbd> 快速格式化文档
-  支持色盘取色，快速替换文章整体色调
-  支持多图上传，可自定义配置图床
-  支持自定义上传逻辑
-  支持在编辑框右键弹出功能选项卡

以上是[md](https://github.com/doocs/md)带有的功能如果这些功能已经满足你，不必碰该在线编辑器。

- [ ] 在线保存md文件
- [ ] 多人协同写文章
- [ ] 支持登录以及注册 + 个人空间
- [ ] 支持数学公式🆗
- [ ] 支持音乐播放🎵

正在做：

  支持导出pdf文件



## 注意事项

如果你使用了某些浏览器脚本修改了网页背景色，可能导致渲染后的文章出现背景色分块的现象，详见 [#63](https://github.com/doocs/md/issues/63)。

## 自定义上传逻辑

在工具上没有提供预定义图床的情况下，你只需要自定义上传逻辑即可，这对于例如你不方便使用公共图床，而是使用自己的上传服务时非常有用。

你只需要在给定的函数中更改上传代码即可，为了方便，这个函数提供了可能使用的一些参数：

示例代码：

```js
const { file, util, okCb, errCb } = CUSTOM_ARG;
const param = new FormData();
param.append("file", file);
util.axios
  .post("http://127.0.0.1:9000/upload", param, {
    headers: { "Content-Type": "multipart/form-data" },
  })
  .then((res) => {
    okCb(res.url);
  })
  .catch((err) => {
    errCb(err);
  });

// 提供的可用参数:
// CUSTOM_ARG = {
//   content, // 待上传图片的 base64
//   file, // 待上传图片的 file 对象
//   util: {
//     axios, // axios 实例
//     CryptoJS, // 加密库
//     OSS, // ali-oss
//     COS, // cos-js-sdk-v5
//     Buffer, // buffer-from
//     uuidv4, // uuid
//     qiniu, // qiniu-js
//     tokenTools, // 一些编码转换函数
//     getDir, // 获取 年/月/日 形式的目录
//     getDateFilename, // 根据文件名获取它以 时间戳+uuid 的形式
//   },
//   okCb: resolve, // 重要！上传成功后给此回调传 url 即可
//   errCb: reject, // 上传失败调用的函数
// }
```

如果你创建了适用于其他第三方图床的上传代码，我们非常欢迎你分享它。

## 参与开发

可以先通过邮箱1907065810@qq.com或者[issues](https://github.com/redhat123456/maple/issues/new)来联系作者

然后就可以通过以下步骤在本地构建本网页了！😃

```sh
# 本地下载&移动到相关目录下
git clone https://github.com/redhat123456/maple.git

cd ./maple

# 安装依赖
npm install

# 预览网页效果
npm run start

```

## 感谢

本项目基于 [md](https://github.com/doocs/md) 进行二次开发，感谢 [doocs](https://github.com/doocs) 社区对本次开发工作的支持！

## 支持开发者

点个Star吧，拜托了



