import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  overflow: hidden;
  background-color: var(--color-dark);

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: translateX(-50%);
    transition: all 0.5s ease;
  }

  @media screen and (min-width: 600px) {
    .slide img {
      width: 100%;
      height: 100%;
    }
  }

  .slide img {
    height: 100%;
  }

  .content {
    position: absolute;
    text-align: center;
    top: 23rem;
    left: 50%;
    opacity: 0;
    width: 50%;
    padding: 3rem;
    display: flex;
    justify-self: center;
    align-items: center;
    flex-direction: column;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.4);
    animation: slide-up 1s ease 0.5s;
    animation-fill-mode: forwards;
    //   visibility: hidden;
    h2 {
      font-size: 4.5rem;
    }
  }

  @keyframes slide-up {
    0% {
      visibility: visible;
      top: 23rem;
    }
    100% {
      visibility: visible;
      top: 17rem;
    }
  }

  @media screen and (max-width: 600px) {
    .content {
      width: 80%;
    }
  }

  .content > * {
    color: #fff;
    margin-bottom: 1rem;
  }

  .current {
    opacity: 1;
    transform: translateX(0);
  }

  .current .content {
    opacity: 1;
  }
  .arrow {
    border: 2px solid orangered;
    border-radius: 50%;
    background: transparent;
    color: #fff;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .arrow:hover {
    background: #fff;
  }

  .next {
    right: 1.5rem;
    color: orangered;
  }
  .prev {
    left: 1.5rem;
    color: orangered;
  }

  hr {
    height: 2px;
    background: #fff;
    width: 50%;
  }
`;
