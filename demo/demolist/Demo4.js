
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
        <div className="swiper-demo-four">
            <ReactSwiper {...params}>
                <div className="swiper-demo-1"></div>
                <div className="swiper-demo-2"></div>
                <div className="swiper-demo-3"></div>
                <div className="swiper-demo-4"></div>
                <div className="swiper-demo-5"></div>
            </ReactSwiper>
        </div>

    )
  }
}

export default Demo4;