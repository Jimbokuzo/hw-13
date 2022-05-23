import "./App.css";
import notes from "./notes.json"
import NoteList from "./components/NoteList"

function App() {
  return (
  <div className="App">
    <NoteList notes={notes}/>
  </div>
  )
}

export default App;
