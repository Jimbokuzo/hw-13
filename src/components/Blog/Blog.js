import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Popup from "../Popup";
import useBlog from "./hooks/useBlog";

function Blog() {
  const { addPost, isClosePopup, notes } = useBlog();

  return (
    <div>
      <Popup buttonName="Add post" isClosePopup={isClosePopup}>
        <NoteForm onSubmit={addPost} />
      </Popup>

      <NoteList notes={notes} />
    </div>
  );
}

export default Blog;
