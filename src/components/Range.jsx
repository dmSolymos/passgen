import { useStateContext } from "../states"
import './range.css'

const Range = () => {
  const {range, setRange}=useStateContext()
  function handleChange(e){
    setRange(e.target.value)
  }
  return (
    <div className="range">
    <p>Password Length: {range}</p>
    <input type="range" min='5' max='30' value={range} onChange={handleChange}></input>
    <br/>
    </div>
  )
}
export default Range