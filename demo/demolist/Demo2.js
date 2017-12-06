/**
 *
 * @title 旋转轮播
 * @description 切换动画是3d翻转形式
 *
 */
import React from 'react';
import Swiper from '../../src';

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
        <div className="swiper-demo-two">
            <Swiper {...params}>
                <div className="swiper-demo-1"></div>
                <div className="swiper-demo-2"></div>
                <div className="swiper-demo-3"></div>
                <div className="swiper-demo-4"></div>
                <div className="swiper-demo-5"></div>
            </Swiper>
        </div>
    )
  }
}

export default Demo2;