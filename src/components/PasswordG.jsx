import { useEffect, useState } from "react";
import { useStateContext } from "../states";
import './passwordg.css'

const PasswordG = () => {
  const {
    pass,
    setPass,
    upper,
    setUpper,
    lower,
    setLower,
    number,
    setNumber,
    special,
    setSpecial,
    range,
    setRange,
  } = useStateContext()
  const [pwd, setPwd] = useState('');
  const [textColor, setTextColor] = useState('')
  const low = 'abcdefghijklmnopqrstuvwxyz'
  const upp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numb = '123456789'
  const spec = '!@#$%^&*()_-+=<>?[]{}|\\:;"\',./~`'

  const wordStyle = {
    color: textColor
  }

  function genTwo() {
    let password = ''
    let stack = ''
    if (lower) {
      stack += low
      if (upper) {
        stack += upp
        if (number) {
          stack += numb
          if (special) {
            stack += spec
          }
        }
      }
    }
    if (upper) {
      stack += upp
      if (number) {
        stack += numb
        if (special) {
          stack += spec
        }
      }
    }
    if (number) {
      stack += numb
      if (special) {
        stack += spec
      }
    }
    if (special) {
      stack += spec
    }
    for (let i = 0; i < range; i++) {
      const randomIndex = Math.floor(Math.random() * stack.length)
      password += stack.charAt(randomIndex)
    }
    setPass(password)
  }


  function lines() {
    let arr = [upper, lower, number, special]
    let count = 0
    let reply = ''
    let color = ''
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        count++
      }
    }
    switch (count) {
      case 1:
        reply = 'Easy'
        color = 'red'
        break
      case 2:
        reply = 'Easy'
        color = 'red'
        break
      case 3:
        reply = 'Medium'
        color = 'yellow'
        break
      case 4:
        reply = 'Hard'
        color = 'green'
        break
      default:
        reply = ''
    }
    if (range < 8) {
      reply = 'Too short'
      color = 'blue'
    }
    setPwd(reply)
    setTextColor(color)
  }


   const copyToClipboard = () => {
     const input = document.createElement('input')
     input.value = pass
     document.body.appendChild(input)
     input.select()
     document.execCommand('copy')
     document.body.removeChild(input)
   }



    function combi() {
      lines()
      genTwo()

    }
    useEffect(() => {
      combi()
    }, [])

  return (
    <>
      <div className="input-field">
        <input value={pass} readOnly />
      </div>
      <div className="buttons">
        <button className="btn-generate" onClick={combi}>
          Generate
        </button>
        <button className="btn-copy" onClick={copyToClipboard}>
          Copy
        </button>
      </div>
      <p style={wordStyle}>{pwd}</p>
    </>
  )
}
export default PasswordG