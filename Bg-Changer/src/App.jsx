import { useState } from 'react'
import './App.css'

function App() {

    const [color, setColor] = useState('')
  return (
    <>
      <div className='bg' style={{backgroundColor: color}}>
        <div className='button-bg'>
          <button onClick={()=> setColor('red')} style={{backgroundColor:"red", color:'white', animationDuration:'200', cursor:'pointer'}}>Red</button>
          <button onClick={()=> setColor('green')} style={{backgroundColor:"green", color:'white', animationDuration:'200', cursor:'pointer'}}>Green</button>
          <button onClick={()=> setColor('blue')} style={{backgroundColor:"blue", color:'white', animationDuration:'200', cursor:'pointer'}}>Blue</button>
          <button onClick={()=> setColor('orange')} style={{backgroundColor:"orange", color:'white', animationDuration:'200', cursor:'pointer'}}>Orange</button>
          <button onClick={()=> setColor('yellow')} style={{backgroundColor:"yellow", color:'white', animationDuration:'200', cursor:'pointer'}}>Yellow</button>
          <button onClick={()=> setColor('black')} style={{backgroundColor:"black", color:'white', animationDuration:'200', cursor:'pointer'}}>Black</button>
          <button onClick={()=> setColor('white')} style={{backgroundColor:"white", color:'white', animationDuration:'200', cursor:'pointer'}}>White</button>
          <button onClick={()=> setColor('lavender')} style={{backgroundColor:"lavender", color:'white', animationDuration:'200', cursor:'pointer'}}>Lavender</button>
          <button onClick={()=> setColor('purple')} style={{backgroundColor:"purple", color:'white', animationDuration:'200', cursor:'pointer'}}>Purple</button>
          <button onClick={()=> setColor('violet')} style={{backgroundColor:"violet", color:'white', animationDuration:'200', cursor:'pointer'}}>Violet</button>
          <button onClick={()=> setColor('aqua')} style={{backgroundColor:"aqua", color:'white', animationDuration:'200', cursor:'pointer'}}>Aqua</button>
          <button onClick={()=> setColor('indigo')} style={{backgroundColor:"indigo", color:'white', animationDuration:'200', cursor:'pointer'}}>Indigo</button>
          <button onClick={()=> setColor('pink')} style={{backgroundColor:"pink", color:'white', animationDuration:'200', cursor:'pointer'}}>Pink</button>
        </div>
      </div>
    </>
  )
}

export default App
