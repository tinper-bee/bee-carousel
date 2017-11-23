# bee-react-swiper

[![npm version](https://img.shields.io/npm/v/bee-react-swiper.svg)](https://www.npmjs.com/package/bee-react-swiper)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-react-swiper/master.svg)](https://travis-ci.org/tinper-bee/bee-react-swiper)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-react-swiper/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-react-swiper?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-react-swiper.svg)](https://david-dm.org/tinper-bee/bee-react-swiper#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-react-swiper.svg?style=flat)](https://npmjs.org/package/bee-react-swiper)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-react-swiper.svg)](http://isitmaintained.com/project/tinper-bee/bee-react-swiper "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-react-swiper.svg)](http://isitmaintained.com/project/tinper-bee/bee-react-swiper "Percentage of issues still open")


react bee-react-swiper component for tinper-bee

Swiper 可自定义手动点击滑动和左右滑动，可兼容移动端。基于swiper.js开发.继承swiper.js的所有方法和属性。

## 依赖

- react >= 15.3.0
- react-dom >= 15.3.0
- prop-types >= 15.6.0

## 使用方法

```js
import React from 'react';
import ReactSwiper from '../../src';

class Demo1 extends React.Component {
  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 30
    }

    return(
      <ReactSwiper {...params}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </ReactSwiper>
    )
  }
}

export default Demo1;

ReactDOM.render(Demo1, document.getElementById('target'));

```



## API

|参数|类型|默认值|说明|
|:--|:---:|:--:|:---:|
|containerClass|String|swiper-container|	Swiper 容器 class name|
|wrapperClass|String|swiper-wrapper|	Swiper 父元素 class name|
|slideClass|String|	swiper-slide|	Swiper 单个元素 class name|
|prevButtonCustomizedClass|String|''|	Swiper 前一个按钮 class name|
|nextButtonCustomizedClass|String|''|	Swiper 下一个按钮 class name|
|paginationCustomizedClass|String|''|	Swiper 页码 class name|
|shouldSwiperUpdate|Boolea|false|当元素发生变是否更新swiper|
|rebuildOnUpdate|Boolean|false|当元素更新是否重新渲染swiper|
|noSwiping|Boolean|false|根据条件是否禁用滑动|
|activeSlideKey|String or Number|''|定义最初的激活态slide|
你也可以直接用swiper.js的原始参数 [HERE](http://idangero.us/swiper/api/)api/

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-react-swiper
$ cd bee-react-swiper
$ npm install
$ npm run dev
```
