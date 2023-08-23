import React, {createContext, useContext, useState} from "react"

const StateContext = createContext()

export const StateProvider = ({children}) => {
    const [pass, setPass] = useState([]);
      const [upper, setUpper] = useState(true)
      const [lower, setLower] = useState(false)
      const [number, setNumber] = useState(true)
      const [special, setSpecial] = useState(false)
    const [range, setRange] = useState(8);

  return (
    <StateContext.Provider value={{pass, setPass, upper, setUpper, lower, setLower, number, setNumber, special, setSpecial, range, setRange}}>
            {children}
    </StateContext.Provider>
  )
}
export const useStateContext = ()=>useContext(StateContext)