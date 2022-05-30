/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PopupCard from "./components/PopupCard";
import usePopup from "./hoocks/usePopup";

function PopupBox({ buttonName, ContentComponent }) {
  const { isOpen, isRender, onClose, onOpen } = usePopup();

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
            width: 100%;
            height: 100%;
            bottom: 0;
            top: 0;
            left: 0;
            right: 0;
            position: fixed;
            background: rgba(0, 0, 0, 0.2);
            transition: 0.8s;
            opacity: ${isOpen ? "1" : "0"};
          `}
        >
          <PopupCard isOpen={isOpen}>
            <span
              css={css`
                position: absolute;
                z-index: 10;
                display: flex;
                justify-content: center;
                top: 316px;
              `}
              onClick={onClose}
            >
              <p
                css={css`
                  margin-top: -38px;
                  margin-left: 250px;
                  cursor: pointer;
                  width: 25px;
                  height: 25px;
                `}
              >
                <img
                  css={css`
                    width: 25px;
                    height: 25px;
                  `}
                  src="img/close.png"
                />
              </p>
            </span>
            <ContentComponent onClose={onClose} />
          </PopupCard>
        </div>
      )}
    </div>
  );
}
export default PopupBox;
