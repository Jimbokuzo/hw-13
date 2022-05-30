/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const NoteItem = ({ data: { notesHeader, dataTime, lorem } }) => (
  <div
    css={css`
      background: rgb(156, 156, 156);
      margin: 25px;
      width: 400px;
      max-height: 450px;
      border-radius: 20px;
      padding-top: 7px;
      transition: 0.5s;
      &:hover {
        box-shadow: 0 0 15px rgb(0, 0, 0);
        transform: scale(1.1);
        transition: 0.5s;
      }
    `}
  >
    <div
      css={css`
        font-size: 42px;
        color: rgb(26, 26, 26);
        padding-left: 30px;
        font-weight: bold;
      `}
    >
      {notesHeader}
    </div>
    <div
      css={css`
        background: rgb(14, 14, 14);
        font-size: 24px;
        color: rgb(204, 204, 204);
        padding: 2px 2px 2px 30px;
        font-weight: bold;
        margin-top: 5px;
      `}
    >
      {dataTime}
    </div>
    <div
      css={css`
        font-size: 24px;
        color: rgb(26, 26, 26);
        padding: 15px 30px 30px 20px;
        font-weight: 300;
      `}
    >
      {lorem}
    </div>
  </div>
);
export default NoteItem;
