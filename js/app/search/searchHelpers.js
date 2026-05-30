export function getSnippet(

  text,
  query

){

  const safe =
    text || "";

  const lower =
    safe.toLowerCase();

  const q =
    query.toLowerCase();

  const index =
    lower.indexOf(q);

  if(index === -1){

    return (
      safe.slice(0, 60)
      + "..."
    );

  }

  const snippet =

    safe.slice(
      index,
      index + 80
    );

  const regex =
    new RegExp(
      `(${query})`,
      "gi"
    );

  return (

    snippet.replace(
      regex,
      `<mark>$1</mark>`
    )

    + "..."

  );

}