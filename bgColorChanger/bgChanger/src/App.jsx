import { useState } from 'react'
function App() {
  const [color, setColor] = useState('Olive')

  return (
    <div style={{backgroundColor:color, width:'100vw', height:'100vh'}}>
      <div style={{backgroundColor:'white', display:'flex',alignItems:'center'}}>
        <button onClick={()=>setColor('red')}>RED</button>
        <button onClick={()=>setColor('blue')}>BLUE</button>
        <button onClick={()=>setColor('lavender')}>LAVENDER</button>
      </div>
    </div>
  )
}

export default App
