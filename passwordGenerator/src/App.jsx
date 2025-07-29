import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [Password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowChar, setAllowChar] = useState(false);

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (allowNumber) str += "0123456789"
    if (allowChar) str += "!@#$%&*_"

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, allowChar, allowNumber, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, 
    [length, allowChar, allowNumber, passwordGenerator]
  );

  const passwordRef = useRef(null)

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  return (
    <>
      <div className='mx-auto shadow-md px-5 my-16 pb-8 text-center bg-gray-800 border-gray-300 w-1/2 rounded-xl'>
        <h1 className='text-4xl text-white text-center py-5'>Password Generator</h1>
        <input
          type="text"
          readOnly
          value={Password}
          placeholder='Password'
          ref={passwordRef}
          className='border rounded-tl-2xl rounded-bl-2xl outline-none w-80 px-3 py-2 text-white border-blue-700'
        />
        <button onClick={copyPassword} className='bg-blue-700 px-3 py-2 border rounded-br-2xl rounded-tr-2xl text-white cursor-pointer'>Copy</button>
        <button onClick={passwordGenerator} className='bg-red-400 text-white rounded-2xl ml-10 px-3 py-2'>New Password</button>
        <br />
        <input
          type="range"
          min={8}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className='mt-8 mr-2'
        />
        <label className='text-lg text-white'>Length : ({length})</label>
        
        <input 
          type="checkbox" 
          id = "numberInput" 
          defaultChecked = {allowNumber}
          className='ml-5 cursor-pointer'
          onChange={() => {setAllowNumber((prev) => !prev);}} 
        />
        <label htmlFor='numberInput' className='text-lg text-white cursor-pointer'>Allowed Number</label>
        
        <input 
          type = "checkbox" 
          id = "allowChar"
          defaultChecked = {allowChar} 
          className = 'ml-5 cursor-pointer'
          onChange = {() => {setAllowChar((prev) => !prev);}} 
        />
        <label htmlFor = "allowChar" className='text-lg text-white cursor-pointer'>Allowed Charecter</label>
      </div>
    </>
  )
}

export default App
