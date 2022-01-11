import styled from "styled-components";

export const BannerWrapper = styled.div`
  margin: 1.25rem 0;

  .banner_container {
    width: 97%;
    height: 20rem;
    background: red;
    margin: 0 auto;
    height: 26.625rem;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .banner--content {
      position: absolute;
      width: 35%;
      top: 6.5rem;
      left: 3.75rem;

      &-title {
        font-weight: 700;
        font-size: 36px;
      }
      &-desc {
        font-size: 1.125rem;
        margin: 2rem 0;
      }
      &-btn {
        button {
          width: 8.5rem;
          padding: 0.5rem 1.4375rem;
          color: #fff;
          background: #000;
          border:none;
          outline:none; 
        }
      }
    }
  }
`;
