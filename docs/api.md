# 轮播图 Carousel

一个基于 swiper 的轮播图组件。

## 何时使用

例如：首页滚动图片

## 如何使用

```

import Carousel from 'bee-carousel';
import 'bee-carousel/build/Carousel.css';

```
## 代码演示

## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|containerClass|Carousel 容器 class name|String|swiper-container|
|wrapperClass|Carousel 父元素 class name|String|swiper-wrapper|
|slideClass|Carousel 单个元素 class name|String|	swiper-slide|
|prevButtonCustomizedClass|Carousel 前一个按钮 class name|String|''|
|nextButtonCustomizedClass|Carousel 下一个按钮 class name|String|''|
|paginationCustomizedClass|Carousel 页码 class name|String|''|
|shouldSwiperUpdate|当元素发生变是否更新Carousel|Boolea|false|
|rebuildOnUpdate|当元素更新是否重新渲染Carousel|Boolean|false|
|noSwiping|根据条件是否禁用滑动|Boolean|false|
|activeSlideKey|定义最初的激活态slide|String or Number|''|


更多参数可参考：https://swiperjs.com/api/


## 注意事项

暂无

## 更新日志
