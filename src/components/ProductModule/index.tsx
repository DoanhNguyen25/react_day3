import React from 'react';
import { ProductModuleWrapper } from './style';
import ProductTemplate1 from './Template/Template_1';
import ProductTemplate2 from './Template/Template_2';
import ProductTemplate3 from './Template/Template_3';

interface Props{
    type:number;
}
const ProductModule = ({type}: Props) => {
    return (
        <ProductModuleWrapper>
            {
                type === 1 ? (
                    <ProductTemplate1/>
                ):
                type === 2 ? (
                    <ProductTemplate2/>
                ):
                type === 3 ?(
                    <ProductTemplate3/>
                ):
                <></>

            }
        </ProductModuleWrapper>
    )
}

export default ProductModule
