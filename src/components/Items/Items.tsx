import React from 'react';
import Slider from 'react-slick';
import { SLIDER_SETTINGS } from '../../constants';

const Items = ({ list }: ListProps): React.ReactElement => (
  <Slider {...SLIDER_SETTINGS}>
    {list.map(({ secondid, _imageurl, title }) => (
      <div key={secondid}>
        <div className="c-product-carousel__item">
          <div className="c-product-carousel__item-image-container">
            <img
              className="c-product-carousel__item-image"
              src={_imageurl}
              alt=""
            />
          </div>
          <h3 className="c-product-carousel__item-title">{title}</h3>
          <p className="c-product-carousel__item-price">£48.00</p>
        </div>
      </div>
    ))}
  </Slider>
);

export default Items;
