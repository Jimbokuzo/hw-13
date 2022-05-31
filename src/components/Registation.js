/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Popup({ onClose }) {
  const onFormSubmit = (event) => {
    event.preventDefault();

    const data = {
      id: ID(),
      notesHeader: event.target.titlenote.value,
      dataTime: now,
      lorem: event.target.notesbox.value,
    };

    onClose();
    console.dir(data);
  };
  const ID = function () {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  const now = new Date().toLocaleDateString();
  return (
    <form
      onSubmit={onFormSubmit}
      css={css`
        display: flex;
        justify-content: center;
        width: 100%;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 0 20px rgb(10, 10, 10);
          width: 300px;
          min-height: 210px;
          border-radius: 20px;
          background: rgb(48, 48, 48);
        `}
      >
        <div
          css={css`
            display: flex;
            width: 270px;
            height: 25px;
            margin-top: 5px;
            justify-content: flex-end;
          `}
        ></div>
        <div
          css={css`
            display: flex;
            justify-content: center;
            width: 100%;
            background: rgb(48, 48, 48);
          `}
        >
          <input
            name="titlenote"
            css={css`
              width: 270px;
              min-height: 40px;
              margin-bottom: 10px;
              margin-top: 10px;
              background: rgb(156, 156, 156);
              border: none;
              border-radius: 5px;
            `}
            type="text"
            placeholder="Title..."
          />
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
            width: 100%;
            background: rgb(48, 48, 48);
          `}
        >
          <textarea
            name="notesbox"
            css={css`
              width: 270px;
              min-height: 100px;
              margin-bottom: 10px;
              background: rgb(156, 156, 156);
              border: none;
              box-sizing: border-box;
              border-radius: 5px;
              padding: 5px 10px 5px 10px;
            `}
            placeholder="Notes..."
          />
        </div>
        <div
          css={css`
            display: flex;
            width: 270px;
            justify-content: center;
          `}
        >
          <button
            css={css`
              width: 150px;
              height: 40px;
              margin-top: 5px;
              margin-bottom: 10px;
              background: rgb(28, 163, 28);
              color: white;
              border: none;
              border-radius: 5px;
              transition: 0.3s;
              &:hover {
                background: rgb(19, 109, 19);
              }
              &:active {
                border: 2px solid rgb(28, 163, 28);
              }
            `}
          >
            Add notes
          </button>
        </div>
      </div>
    </form>
  );
}

export default Popup;
