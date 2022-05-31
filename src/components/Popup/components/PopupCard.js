/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const PopupCard = ({ children, isOpen }) => (
  <div
    css={css`
      @keyframes show {
        from {
          top: -500px;
        }
        to {
          top: 0;
        }
      }
      @keyframes hide {
        from {
          top: 0px;
        }
        to {
          top: -500;
        }
      }
      top: -500px;
      width: 100%;
      height: 100%;
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: ${isOpen ? "show" : "hide"} 1s;
      animation-fill-mode: forwards;
    `}
  >
    {children}
  </div>
);
export default PopupCard;
