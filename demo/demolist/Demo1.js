/**
 *
 * @title 基础轮播
 * @description 可定制页码
 */
import React from 'react';
import ReactSwiper from '../../src';

class Demo1 extends React.Component {
  render() {
    const params = {
      pagination: {   //配置页码参数 其中 renderBullet 是自定义页码
        el: '.swiper-pagination',
        clickable: true,  //可点击页码切换swiper
         renderBullet: function (index, className) {
	        return '<span class="' + className + '">' + (index + 1) + '</span>';
	      },
        
      },
      navigation: {   //配置上一页下一页按钮
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 20  //配置两页之前切换距离
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