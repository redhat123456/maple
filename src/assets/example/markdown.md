# 示例文章：[限定寻访]【地生五金】限时寻访开启

![](https://ak.hypergryph.com/upload/images/20200109/1ffaccb25528d1266fb0e93aaf33c7ae.jpg "")
### 一、限定寻访【地生五金】限时开启

**活动时间：**01月16日 16:00 - 01月30日 03:59

**活动说明：**活动期间【地生五金】限定寻访开启，该寻访中以下干员出现率上升

<font color=#C0392B >★★★★★★</font>：<font color=#C0392B >年[限定]</font> \ <font color=#C0392B >阿</font>（占6★出率的70%）

<font color=#C0392B >★★★★★</font>：<font color=#C0392B >吽</font>（占5★出率的50%）

**注意：**

◆本次活动【地生五金】寻访为【限定寻访】

◆新增干员【年】仅可在该【限定寻访】中获取，不加入任何【标准寻访】

◆新增干员【阿】、【吽】除加入【地生五金】寻访外，将在1月23日04:00后加入并常驻其余【标准寻访】卡池

&nbsp;

**限定寻访【地生五金】抽取概率公示:**

&nbsp;

![](https://ak.hypergryph.com/upload/images/20200114/5165990d7f1de4e9961bb843e51f45e4.png "")

**【限定寻访】说明**

在所有【限定寻访】中，如果连续50次没有获得6星干员，则下一次获得6星干员的概率将从原本的2%提升至4%。如果该次还没有寻访到6星干员，则下一次寻访获得6星干员的概率由4%提升至6%。依此类推，每次提高2%获得6星干员的概率，直至达到100%时必定获得6星干员。

&nbsp;

在任意两个不同的【限定寻访】中，没有获得6星干员的次数不会合并累积，该次数会因为当期【限定寻访】的结束而清零。因为累积次数而增加的获得概率，不会应用于接下来任意一次【限定寻访】，且【限定寻访】与【标准寻访】中的累积次数互不影响

&nbsp;

任何时候在任意一个【限定寻访】中获得六星干员，后续该【限定寻访】中获得6星干员的概率将恢复到2%

&nbsp;

更多活动内容请持续关注《明日方舟》游戏内公告、官网、官方微博及微信公众号。

&nbsp;

<p align="right">【明日方舟】运营组</p>

<p align="right">2020年01月16日</p>

# 示例文章：markdown的细致操作讲解

## 一些话

Hello~ 我是不干人事的 Tanger，首先欢迎你阅读我的文章 😀，也很期待各位大佬的指正，如果对这篇文章感兴趣的话，不妨收藏一下 ⭐ 本页面，如果有什么想对作者说的话可以通过两种方式联系作者：

- 简单粗暴法：直接在下方的评论区留言 🎈(这种方式可能作者回复较慢)

- 花里胡哨法：打开邮箱，发送你的留言至作者的邮箱(1907065810@qq.com)我会在第一时间回复你 ✨

## 关于

这篇文章并无什么用 😂，主要是我老不记得 Markdown 语法老是上网找，诶，这可能就是菜吧，所以我打算自己写一篇 Markdown 语法总结出来就很 nice😀

### <span id="0">目录</span>

基本语法：

- 😁 [Markdown 精讲之文章头部](#1)
- 😀 [Markdown 精讲之标题](#2)
- 😂 [Markdown 精讲之段落](#3)
- 🤣 [Markdown 精讲之区块引用](#4)
- 😃 [Markdown 精讲之代码区块](#5)
- 😄 [Markdown 精讲之强调](#6)
- 😅 [Markdown 精讲之列表](#7)
- 😆 [Markdown 精讲之分割线](#8)
- 😋 [Markdown 精讲之链接](#9)
- 😎 [Markdown 精讲之图片](#10)
- 🙂 [Markdown 精讲之反斜杆\\](#11)
- 🤔 <a href="#12">Markdown 精讲之符号\'`\'</a>
- 😳 [Markdown 精进之内嵌 HTML 标签](#13)

扩展语法：

- 🥰 [Markdown 精讲之扩展语法的可用性](#14)
- 🤩 [Markdown 精讲之表格](#15)
- 😙 [Markdown 精讲之围栏代码块](#16)
- 😪 [Markdown 精讲之脚注](#17)
- 🥱 [Markdown 精讲之链接标题 ID](#18)
- 😛 [Markdown 精讲之定义列表](#19)
- 🤪 [Markdown 精讲之任务列表语法](#20)
- 🤑 [Markdown 精讲之使用 Emoji 表情](#21)
- 😘 [最后的最后：鸣谢](#22)

## <span id="1"> Markdown 精讲之文章头部 \#1 </span>

一篇好的 Markdown 文章最好将头部的打得清楚一点，在我们创造一篇新的文章时会是这样的，如下所示>>

    ---
    layout: Tanger的思源地
    title: new article
    date: 2021-05-15 13:13:29
    tags:
    ---

上面所显示的就是一篇文章在初始化的时候，下面让我们来解读一下，为什么会出现这些信息，其实这些信息是根据用户已经给定的一些信息，例如：

由于笔者使用的是 hexo 来写博客的，我在 hexo 的根目录中配置了以下信息：

    # Writing
    new_post_name: :title.md # File name of new posts
    default_layout: Tanger的思源地
    titlecase: false # Transform title into titlecase
    external_link:
    enable: true # Open external links in new tab
    field: site # Apply to the whole site
    exclude: ''
    filename_case: 0
    render_drafts: false
    post_asset_folder: ture
    relative_link: false
    future: true
    highlight:
    enable: true
    line_number: true
    auto_detect: false
    tab_replace: ''
    wrap: true
    hljs: true

所以我在写每篇文章的时候都，在 layout 那一行都会默认是"Tanger 的思源地"😁

而为什么 title 为什么会出现“new article”是因为笔者在初始化的时候在根目录下输入

    hexo new "new article"

所以在 title 就出现“new article”

下面就是 Markdown 文件的完整的头部，可以对照下表加入自己想加入的东西 😘😘

    ---
    layout: 作者名
    title: 文章标题
    date: 文章日期 #例如2020/01/01
    author: 作者名称
    cover: #true or false
    top: #true or false
    toc: #标签 true or false
    img: /medias/featureimages/1.jpg #文章封面图片
    coverImg: /medias/featureimages/0.jpg
    mathjax: #true or false
    summary: #这是自定义的摘要内容
    categories: 博客
    tags:
    - 标签一
    - 标签二
    ---

        （在<!--more-->上面的文字、图片都是可以实现预览的）
         <!--more-->


         内容（省略一万字）

（具体的要看主题文档说明）

[↑ 返回目录 ↑](#0)

## <span id="2"> Markdown 精讲之标题 \#2</span>

要创建标题，请在单词或短语前面添加井号 (#) 。# 的数量代表了**标题的级别**。例如，添加三个 # 表示创建一个三级标题 (\<h3>) (例如：### My Header)。😘

| Markdown 语法 |         HTML         |            <view align="center">预览效果</view> |
| ------------- | :------------------: | ----------------------------------------------: |
| # 一级标题    | \<h1>一级标题 \</h1> | <view align="center"> <h1>一级标题</h1> </view> |
| # 二级标题    | \<h2>二级标题 \</h2> | <view align="center"> <h2>二级标题</h2> </view> |
| # 三级标题    | \<h3>三级标题 \</h3> | <view align="center"> <h3>三级标题</h3> </view> |
| # 四级标题    | \<h4>四级标题 \</h4> | <view align="center"> <h4>四级标题</h4> </view> |
| # 五级标题    | \<h5>五级标题 \</h5> | <view align="center"> <h5>五级标题</h5> </view> |

### 补充：

#### 一些不常用的写法

例如：
一级标题
=========
二级标题
---------

<h1>一级标题</h1>

<h2>二级标题</h2>

一些废话>>

要合理使用文章的标题，比如最好别老是使用一级标题最好别老是使用一级标题最好别老是使用一级标题，重要的话说三次，因为一级标题在页面自定义生成的目录中，可能会导致目录紊乱，在文章里面就使用二级标题+三级标题就已经完完全全够用了，所以最好别用三级标题 😁。

## <span id="3">Markdown 精讲之段落 \#3</span>

这节内容非常短，只需要学会一个操作就行了，要想创造出段落的效果，只需在回车空格就行了

例如：

Markdown:

我是一个段落

我是一个段落

Html:

\<p>我是一个段落\</p>\<p>我是一个段落\</p>

他们的实际效果一致。

段落这节到此结束 🆗，欢迎学习下一章

[↑ 返回目录 ↑](#0)

## <span id="4">Markdown 精讲之区块引用 \#4</span>

这一章将学习如何去使用区块引用，和代码区块(请关注下一章)不同的是，区块引用并不常用，但也并非不用，一些人还会喜欢将自己认为重要的东西引用起来。

例如：

    > 前端学习
    >> 前端三大件
    >>>Html
    >>>JavaScript
    >>>CSS

> 前端学习
>
> > 前端三大件
> >
> > > Html
> > > JavaScript
> > > CSS

值得注意的是：引用并非像你的标题那样如此的好用，引用的这些特性决定了它并不能像标题一样如此突出，只能在正文中显得稍微显眼一点。

区块引用就先告一段落，欢迎进入下一章的学习。

[↑ 返回目录 ↑](#0)

## <span id="5">Markdown 精讲之代码区块 \#5</span>

本章将为各位同学介绍的是代码区块，与上面的区块引用虽然看上去很相近，实则大相径庭，代码区块常常被使用在作者想将代码表现在自己的文章例如：

直接打：

#include<bits/stdc++.h>

using namespace std;

int main(){

cout<<"Hello World!"<<endl;

return 0;

}

我认为这样会很不美观而且出现的方式也很突兀，无论是在页面整体结构上，还是从美观的角度上分析都不会让人觉得这是一篇好文章。

使用代码引用：

    #include<bits/stdc++.h>
    using namespace std;
    int main(){
        cout<<"Hello World!"<<endl;
        return 0;
    }

这样就显得好看许多了!!!

欢迎学习下一节《Markdowm 精讲之强调》

[↑ 返回目录 ↑](#0)

## <span id="6"> Markdown 精讲之强调 \#6</span>

本节将学习强调，强调有三种，一、是加粗 二、是斜体 三、是删除线 使用起来非常简单，下面将演示一下

例如：

| Markdown 语法  |       HTML       |        <view align="center">预览效果</view> |
| -------------- | :--------------: | ------------------------------------------: |
| \_\_加粗\_\_   |  \<B>加粗 \</B>  |                                 <B>加粗</B> |
| \*\*加粗\*\*   |  \<B>加粗 \</B>  |   <view align="center"> <B>加粗</B> </view> |
| \_斜体\_       |  \<i>斜体 \</i>  |   <view align="center"> <i>斜体</i> </view> |
| \*斜体\*       |  \<i>斜体\</i>   |   <view align="center"> <i>斜体</i> </view> |
| \~\~删除线\~\~ | \<s>删除线 \</s> | <view align="center"> <s>删除线</s> </view> |

[↑ 返回目录 ↑](#0)

## <span id="7"> Markdown 精讲之列表 \#7</span>

本节学习的是 Markdown 中的列表，在 Markdown 中可以用\*、+、-来标记列表，这些符号后面最少有一个*空格*或*制表符*。若不在引用区块中，必须和前方段落之间存在空行。是这些都可以使用，同样也非常的简单

例如：

\* 第一点 \* 第二点 \* 第三点

效果

- 第一点
- 第二点
- 第三点

下一节将介绍分割线

[↑ 返回目录 ↑](#0)

## <span id="8"> Markdown 精讲之分割线 \#8</span>

分割线最常使用就是三个或以上\*，还可以使用-和\_。

例如：

\*\*\*

\-\-\-

\_\_\_

效果：

---

---

---

下节介绍链接

[↑ 返回目录 ↑](#0)

## <span id="9"> Markdown 精讲之链接 \#9</span>

链接可以由两种形式生成：行内式和参考式。

例如：

行内式：

| Markdown 语法                                                |                       HTML                       |                     <view align="center">预览效果</view> |
| ------------------------------------------------------------ | :----------------------------------------------: | -------------------------------------------------------: |
| \[Tanger 的 Github 主页\]\(https://github.com/redhat123456\) | \<a herf="https://github.com/redhat123456">\</a> | [Tanger 的 Github 主页](https://github.com/redhat123456) |

参考式：

[Tanger 的 Github 主页 1][1]

[Tanger 的 Github 主页 2][2]

\[1\]:https://github.com/redhat123456 "Markdown"

\[2\]:https://github.com/redhat123456 "Markdown"

效果：

[Tanger 的 Github 主页 1][1]

[Tanger 的 Github 主页 2][2]

[1]: https://github.com/redhat123456 'Markdown'
[2]: https://github.com/redhat123456 'Markdown'

下节将介绍图片在 Markdown 中的使用

[↑ 返回目录 ↑](#0)

## <span id="10"> Markdown 精讲之图片 \#10</span>

这节介绍 Markdown 中图片的使用，添加图片的形式和链接相似，只需在链接的基础上前方加一个!

⚠⚠ 唠叨两句：所有图片的地址都必须是互联网上的。

例如：

Markdown：

!\[\]\(https://ak.hypergryph.com/upload/images/20200703/271c7b47625b6544a1df8220e375f240.jpg\"")

效果：

![](https://ak.hypergryph.com/upload/images/20200703/271c7b47625b6544a1df8220e375f240.jpg)

请关注下一节，《Markdown 精讲之反斜杆》

[↑ 返回目录 ↑](#0)

## <span id="11"> Markdown 精讲之反斜杆\ \#11</span>

这节课介绍反斜杠\,相当于反转义作用。使符号成为普通符号。

例如：

上面的所有文章都是活生生的例子。

请关注下一节，Markdown 精讲之符号'`'

[↑ 返回目录 ↑](#0)

## <span id="12"> Markdown 精讲之符号'`' \#12</span>

这节课讲'`'起到标记作用,相当于小一点的代码区块。

例如：
\`ctrl+a\`
效果:
`ctrl+a`

## <span id="13"> Markdown 精进之内嵌 HTML 标签#13</span>

对于 Markdown 涵盖范围之外的标签，都可以直接在文件里面用 HTML 本身。如需使用 HTML，不需要额外标注这是 HTML 或是 Markdown，只需 HTML 标签添加到 Markdown 文本中即可。

具体的 HTML 标签作用和属性以及用法可参考 👉[HTML 教程 - 网道](https://wangdoc.com/html/)👈

&nbsp;&nbsp;例如：

当我们希望图片居中时，可直接嵌套 HTML 标签

` `

以上基本是所有**traditonal** markdown 的基本语法。

[↑ 返回目录 ↑](#0)

## <p id="14"></p>

以上是所有 markdown 的扩展语法。

结束了，撒花 🎉🎉🎉

## <p id="">最后的最后：一些话以及鸣谢 \#</p>

### 谁在用？

Markdown 的使用者：

- GitHub
- 简书
- Stack Overflow
- Apollo
- Moodle
- Reddit
  等等

### 尝试一下

- Chrome 下的插件诸如 stackedit 与 markdown-here 等非常方便，也不用担心平台受限。
- 在线的 dillinger.io 评价也不错
- Windowns 下的 MarkdownPad 也用过，不过免费版的体验不是很好。
- Mac 下的 Mou 是国人贡献的，口碑很好。
- Linux 下的 ReText 不错。

---

注意：不同的 Markdown 解释器或工具对相应语法（扩展语法）的解释效果不尽相同，具体可参见工具的使用说明。 虽然有人想出面搞一个所谓的标准化的 Markdown，[没想到还惹怒了健在的创始人 John Gruber] (https://blog.codinghorror.com/standard-markdown-is-now-common-markdown/ )。

---

### 鸣谢

- 引用：https://github.com/younghz/Markdown

感谢以上的文章，让我能够参考写完这篇，谢谢非常谢谢!!!✨✨

[↑ 返回目录 ↑](#0)
