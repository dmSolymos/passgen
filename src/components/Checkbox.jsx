import './checkbox.css'
import { useStateContext } from "../states";

const Checkbox = () => {
  const {upper,setUpper,lower,setLower,number,setNumber,special,setSpecial}=useStateContext();

  //if not one box is checked the lower value is set to true;
  if(!upper && !lower && !number && !special){
    setLower(true);
  }

  return (
    <div className="checkboxes">
      <div className="upper">
      <label>Uppercase</label>
      <input
        type="checkbox"
        checked={upper}
        id="upper"
        name="upper"
        onChange={() => setUpper(!upper)}
        ></input>
        </div>
      <div className="lower">
      <label>Lowercase</label>
      <input
        type="checkbox"
        checked={lower}
        id="lower"
        name="lower"
        onChange={() => setLower(!lower)}
        ></input>
        </div>
      <div className="number">
      <label>Numbers</label>
      <input
        type="checkbox"
        checked={number}
        id="number"
        name="number"
        onChange={() => setNumber(!number)}
        ></input>
        </div>
      <div className="special">
      <label>Special Characters</label>
      <input
        type="checkbox"
        checked={special}
        id="special"
        name="special"
        onChange={() => setSpecial(!special)}
        ></input>
        </div>
    </div>
  )
}
export default Checkbox