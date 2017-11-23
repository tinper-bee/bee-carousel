
/**
 *
 * @title 响应式轮播
 * @description 根据滑动的力度，定位轮播当前active的进度
 *
 */
import React from 'react';
import ReactSwiper from '../../src';

class Demo5 extends React.Component {
  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 5,
      spaceBetween: 50,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    }

    return(
      <ReactSwiper {...params}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
        <div>Slide 6</div>
        <div>Slide 7</div>
        <div>Slide 8</div>
        <div>Slide 9</div>
        <div>Slide 10</div>
      </ReactSwiper>
    )
  }
}

export default Demo5;