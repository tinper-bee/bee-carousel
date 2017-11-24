/**
 *
 * @title 旋转轮播
 * @description 切换动画是3d翻转形式
 *
 */
import React from 'react';
import ReactSwiper from '../../src';

class Demo2 extends React.Component {
  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30,
      effect: 'flip' //设置3d翻转
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

export default Demo2;