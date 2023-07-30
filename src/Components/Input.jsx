export default function Input({passTam ,setPassTam}) {
    return(
    <input type="number" id='passSize' min={1} value={passTam}
      onChange={(ev) => {
        setPassTam(ev.target.value)
      }}
      />
    );
}