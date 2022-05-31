/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  return (
    <div
      css={css`
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        margin: auto;
      `}
    >
      {notes.map((item) => (
        <NoteItem key={item.id} data={item} />
      ))}
    </div>
  );
}

export default NoteList;
