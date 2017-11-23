
/**
 *
 * @title 进度条轮播
 * @description 切换进度可在上边1️以进度条的形式展现
 *
 */
import React from 'react';
import ReactSwiper from '../../src';

class Demo3 extends React.Component {
  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
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

export default Demo3;