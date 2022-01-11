import React from 'react'
import { ProductTemplateWrapper } from '../Template_1/style'
import ImageItem from '../../../../assets/images/img-item.jpg';


const ProductTemplate1 = () => {
    return (
       <ProductTemplateWrapper>
           <div className='product--content'>
               <div className='product--content-left'>
                    Lorem ipsum, dolor sit amet  elit. Modi vero expedita magni.
               </div>
               <div className='product--content-right'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi asperiores quidem eius dolorum expedita distinctio nemo! Similique facilis quo iste ratione consectetur? Dolore iste optio error? Beatae, expedita? Autem, consectetur?Dolore iste optio error? Beatae, expedita? Autem, consectetur?Dolore iste optio error? Beatae, expedita? Autem, consectetur?Dolore iste optio error? Beatae, expedita? Autem, consectetur?Dolore iste optio error? Beatae, expedita? Autem, consectetur?Dolore iste optio error? Beatae, expedita? Autem, consectetur?
               </div>
           </div>
           <div className="product--list-image">
               <div className='product--image-item'>
                    <img src={ImageItem}/>
               </div>
               <div className='product--image-item'>
                    <img src={ImageItem}/>
               </div>
           </div>
       </ProductTemplateWrapper>
    )
}

export default ProductTemplate1
