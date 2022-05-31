/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PopupCard from "./components/PopupCard";
import usePopup from "./hoocks/usePopup";

function Popup({ buttonName, children, isClosePopup }) {
  const { isOpen, isRender, onClose, onOpen } = usePopup(isClosePopup);

  return (
    <div>
      <button
        css={css`
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: auto;
          width: 90px;
          height: 40px;
          border-radius: 5px;
          background: rgb(156, 156, 156);
        `}
        onClick={onOpen}
      >
        {buttonName}
      </button>
      {isRender && (
        <div
          css={css`
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #0000005e;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 1s;
            opacity: ${isOpen ? "1" : "0"};
          `}
        >
          <PopupCard isOpen={isOpen}>
            <div
              css={css`
                box-shadow: 0 0 20px rgb(10, 10, 10);
                width: 300px;
                min-height: 250px;
                border-radius: 20px;
                background: rgb(48, 48, 48);
              `}
            >
              <span
                css={css`
                  display: flex;
                  justify-content: flex-end;
                  margin-right: 10px;
                  margin-top: 10px;
                  z-index: 10;
                  color: white;
                `}
                onClick={onClose}
              >
                <img
                  css={css`
                    width: 25px;
                    height: 25px;
                  `}
                  src="img/close.png"
                />
              </span>
              {children}
            </div>
          </PopupCard>
        </div>
      )}
    </div>
  );
}
export default Popup;
