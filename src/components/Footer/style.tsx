import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;

  .footer__top {
    width: 100%;
    padding: 2.5rem 0;
    border-top: 1px solid black;
    border-bottom: 1px solid black;

    .footer__item--title {
      font-size: 1.25rem;
      font-weight: 700;
    }

    &--wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 3.6875rem;
    }

    .payment-layout {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 1.125rem;

      .payment--item {
        width: 100%;
        height: 2rem;

        img {
          width: 100%;
          height:100%;
          object-fit: cover;
        }
      }
    }

    ul {
      list-style: none;
      padding-inline-start: 0;

      li {
        margin-bottom: 0.5rem;
      }
    }
  }

  .footer__bottom {
    width: 100%;
    padding: 2.5rem 0;

    .footer__item--title {
      font-size: 1rem;
      font-weight: 700;
    }

    &--wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .footer__bottom-left {
        width: 30%;
      }
      .footer__bottom-right {
        width: 30%;

        .footer__bottom--image {
          width: 30%;
          height: 46px;
          margin-bottom:0.5rem;

          img {
            width: 100%;
            height:100%;
            object-fit:cover;
          }
        }
      }

      ul {
        list-style: none;
        padding-inline-start: 0;

        li {
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }
      }
    }
  }
`;
