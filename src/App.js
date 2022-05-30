import ResetCss from "./components/ResetCss";
import notes from "./notes.json";
import NoteList from "./components/NoteList";
import Popup from "./components/Popup";
import PopupBox from "./components/Popup/PopupBox";
import Page from "./components/Page";

function App() {
  return (
    <Page>
      <ResetCss />
      <PopupBox
        buttonName="Add note"
        title="Enter note data"
        ContentComponent={Popup}
      />

      <NoteList notes={notes} />
    </Page>
  );
}

export default App;
