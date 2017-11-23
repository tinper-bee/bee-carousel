/**
 *
 * @title 基础轮播
 * @description 可定制页码
 *
 */
import React from 'react';
import ReactSwiper from '../../src';

class Demo1 extends React.Component {
  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
         renderBullet: function (index, className) {
	        return '<span class="' + className + '">' + (index + 1) + '</span>';
	      },
        
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30
    }

    return(
    	<div id="customized-pagination">
    		<ReactSwiper {...params}>
	        <div>Slide 1</div>
	        <div>Slide 2</div>
	        <div>Slide 3</div>
	        <div>Slide 4</div>
	        <div>Slide 5</div>
      	</ReactSwiper>
    	</div>
      
    )
  }
}

export default Demo1;