import './App.css';
import notes from "./notes.json"

function App() {

  const list = notes.map( (item)=>(
  <div  key={item.id} className="notesCard">
    <div className="notesHeader">{item.notesHeader}</div>
    <div className="data">{item.data}</div>
    <div className="lorem">{item.lorem}</div>
  </div>
))

  return (
  <div className="App">{list}</div>
  )
}

export default App;
