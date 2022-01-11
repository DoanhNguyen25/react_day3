import React from 'react'
import { ProductTemplateWrapper } from '../Template_3/style'
import ImageItem from '../../../../assets/images/img-item.jpg';

const ProductTemplate3 = () => {
    return (
        <ProductTemplateWrapper>
            <div className="product--content">
        <div className="product--content-left">
          Lorem ipsum, dolor sit amet elit. Modi vero expedita magni.
        </div>
        <div className="product--content-right">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          asperiores quidem eius dolorum expedita distinctio nemo! Similique
          facilis quo iste ratione consectetur? Dolore iste optio error? Beatae,
          expedita? Autem, consectetur?Dolore iste optio error? Beatae,
          expedita? Autem, consectetur?Dolore iste optio error? Beatae,
          expedita? Autem, consectetur?Dolore iste optio error? Beatae,
          expedita? Autem, consectetur?Dolore iste optio error? Beatae,
          expedita? Autem, consectetur?Dolore iste optio error? Beatae,
          expedita? Autem, consectetur?
        </div>
      </div>
      <div className="product--list-image">
        <div className="product--image-item">
          <img src={ImageItem} />
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ducimus inventore in fugiat provident voluptas molestiae odio, ad repudiandae explicabo reiciendis aliquam error animi cumque! Ullam facilis voluptas voluptatem sit.</div>
        </div>
        <div className="product--image-item">
          <img src={ImageItem} />
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ducimus inventore in fugiat provident voluptas molestiae odio, ad repudiandae explicabo reiciendis aliquam error animi cumque! Ullam facilis voluptas voluptatem sit.</div>
        </div>
        <div className="product--image-item">
          <img src={ImageItem} />
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ducimus inventore in fugiat provident voluptas molestiae odio, ad repudiandae explicabo reiciendis aliquam error animi cumque! Ullam facilis voluptas voluptatem sit.</div>
        </div>
        <div className="product--image-item">
          <img src={ImageItem} />
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ducimus inventore in fugiat provident voluptas molestiae odio, ad repudiandae explicabo reiciendis aliquam error animi cumque! Ullam facilis voluptas voluptatem sit.</div>
        </div>
      </div>
        </ProductTemplateWrapper>
    )
}

export default ProductTemplate3
