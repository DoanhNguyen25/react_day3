import React from "react";
import Card from "../../../Card";
import { ProductTemplateWrapper } from "../Template_2/style";

const ProductTemplate2 = () => {
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
        <Card numberOfColumn={3}/>
        <Card numberOfColumn={3}/>
        <Card numberOfColumn={3}/>
      </div>
    </ProductTemplateWrapper>
  );
};

export default ProductTemplate2;
