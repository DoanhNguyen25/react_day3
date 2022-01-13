import React from "react";
import ImageItem from "../../assets/images/img-item.jpg";
import { CardWrapper } from "./style";
interface Props {
  numberOfColumn: number;
}
const Card = ({ numberOfColumn }: Props) => {
  return (
    <CardWrapper
      style={{
        width:
          numberOfColumn === 3
            ? "calc(100% / 3 - 1.875rem)"
            : numberOfColumn === 4
            ? "calc(100% / 4 - 1.875rem)"
            : "100%",
      }}
    >
      <img src={ImageItem} />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        ducimus inventore in fugiat provident voluptas molestiae odio, ad
        repudiandae explicabo reiciendis aliquam error animi cumque! Ullam
        facilis voluptas voluptatem sit.
      </div>
    </CardWrapper>
  );
};

export default Card;
