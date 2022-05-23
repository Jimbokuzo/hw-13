import NoteItem from "./NoteItem"

function NoteList({notes}) {
  return notes.map( (item)=> <NoteItem key={item.id} data={item} />)
}

export default NoteList