import './App.css';
import notes from "./notes.json"

const Note = ({data: { notesHeader, data, lorem} }) => (
  <div className="notesCard">
    <div className="notesHeader">{notesHeader}</div>
    <div className="data">{data}</div>
    <div className="lorem">{lorem}</div>
  </div>
)


function App() {
  const list = notes.map( (item)=> <Note key={item.id} data={item} />)

  return (
  <div className="App">{list}</div>
  )
}

export default App;
