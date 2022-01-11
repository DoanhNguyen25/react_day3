import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  padding: 1.25rem 0;
  background: #fff;
  border-bottom:2px solid gray;

  .container {
    width: 87.5%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .navbar--left {      
      &-list {
        display: flex;
        flex-direction: row;
        list-style: none;
        justify-content: space-between;
        padding-inline-start: 0;
        font-size: 1rem;
        margin-block-start: 0;
        margin-block-end: 0;
        align-items:center;
        

        > li {
          margin-right: 2.5rem;
          cursor:pointer;
        }
        li:last-child {
          margin-right: 0;

          button {
            width:8.43rem;
            background: black;
            color: white;
            display: block;
            padding:1rem;
            outline:none;
            border:none;
          }
        }
      }
    }
    .navbar--right {
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      align-items:center;

      &-search{
          position:relative;
          margin-right:2.56rem;

          input[type="text"]{
              width:9.75rem;
              border:none;
              border-bottom:2px solid gray;
              outline:none;
              padding-bottom:0.25rem;
              font-size:1rem;
          }

          img{
            position:absolute;
            width:1rem;
            top:0.125rem;
            right:0.1875rem;
          }
      }

      &-acount{
          margin-right:2.56rem;
          display:flex;
          flex-direction:row;
          align-items:center;
          img{
            width:1.5rem;
            top:0.125rem;
            right:0.1875rem;
            margin-right:0.75rem
          }
          a{
              color:#000;
              text-decoration:none;
          }
      }

      &-cart{
        margin-right:2.56rem;
        position:relative;
          img{
              width:1.5rem;
          }
      }
      &--quantity{
          position:absolute;
          width:1.2rem;
          height:1.2rem;
          background:#000;
          border-radius:50%;
          top:-0.5625rem;
          left:0.75rem;
          display:flex;
          justify-content:center;
          align-items:center;
          color:#fff;
      }
    }
  }
`;
