import './App.css'
import Checkbox from './components/Checkbox'
import PasswordG from './components/PasswordG'
import Range from './components/Range'
import Title from './components/Title'
import { StateProvider } from './states'

function App() {
  

  return (
    <StateProvider>
    <Title />
    <PasswordG/>
    <Range />
    <Checkbox />
    </StateProvider>)
}

export default App
