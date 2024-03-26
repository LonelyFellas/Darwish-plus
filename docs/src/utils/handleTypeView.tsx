export default function handleTypeView(ds: string, color: string = 'blue') {
  ds = ds+" "
  let eleView = undefined;

  const letter = new RegExp("[a-zA-Z]");
  let tempLetter = "";
  for (let i = 0; i < ds.length; i++) {
    const atStr = ds.charAt(i);
    if (letter.test(atStr)) {
      tempLetter += atStr;
    } else {
      eleView = (
        <>
          {eleView}
          {tempLetter !== "" ? <span style={{color}}>{tempLetter}</span> : null}
          {atStr}
        </>
      );
      tempLetter = "";
    }
  }
  return eleView;
}
