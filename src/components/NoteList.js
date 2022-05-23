
const Note = ({data: { notesHeader, data, lorem} }) => (
  <div className="notesCard">
    <div className="notesHeader">{notesHeader}</div>
    <div className="data">{data}</div>
    <div className="lorem">{lorem}</div>
  </div>
)


export default function NoteList({notes}) {
  return notes.map( (item)=> <Note key={item.id} data={item} />)
}

