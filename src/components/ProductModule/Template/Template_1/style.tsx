import styled from "styled-components";

export const ProductTemplateWrapper =styled.div`
   width:100%;
   .product--content{
       display:flex;
       flex-direction:row;
       justify-content:space-between;
       &-left{
           width:34%;
           font-size:2.25rem;
           font-weight:700;
           
       }
       &-right{
           width:64%;
           font-size:1.125rem;
           font-weight:400;
       }
   }

   .product--list-image{
       display:flex;
       flex-direction:row;
       justify-content:space-between;
       margin-top:3.75rem;

       .product--image-item{
           width:49.25%;
            
           img{
               width:100%;
               height:42.0625rem;
               object-fit:cover;
           }
       }
   }
`