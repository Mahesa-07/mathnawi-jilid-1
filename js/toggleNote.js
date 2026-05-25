export function toggleNote(key){

  const note =
  document.getElementById(
  `note-${key}`
  );

  if(!note) return;

  note.classList.toggle("show");

}