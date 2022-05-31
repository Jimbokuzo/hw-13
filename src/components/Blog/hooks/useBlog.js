import { useState } from "react";
import dataNotes from "../../../notes.json";

import { useStorage } from "../../../shared";

const useBlog = () => {
  const { setJsonItem, getJsonItem } = useStorage();

  if (!getJsonItem("notes")) {
    setJsonItem("notes", dataNotes);
  }

  const [notes, setNotes] = useState(getJsonItem("notes"));

  const [isClosePopup, setIsClosePopup] = useState(false);

  const addPost = (event) => {
    event.preventDefault();
    const ID = function () {
      return "_" + Math.random().toString(36).substr(2, 9);
    };

    const now = new Date().toLocaleDateString();
    const post = {
      id: ID(),
      notesHeader: event.target.notesHeader.value,
      dataTime: now,
      lorem: event.target.lorem.value,
    };

    const newNotes = [...notes, post];

    setJsonItem("notes", newNotes);

    setNotes(newNotes);

    setIsClosePopup(true);

    setTimeout(() => {
      setIsClosePopup(false);
    }, 1000);
  };

  return {
    notes,
    addPost,
    isClosePopup,
  };
};

export default useBlog;
