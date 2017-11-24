
/**
 *
 * @title 触摸轮播
 * @description 触发方式多用于手机端 最简单的触摸模式
 *
 */
import React from 'react';
import ReactSwiper from '../../src';

class Demo4 extends React.Component {
  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
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

export default Demo4;