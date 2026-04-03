import React from 'react'
import Props from './props'
import { useState } from 'react'

const App = () => {

  const [likes, setlikes] = useState(0)


  return (
    <div>

      <Props name="shouqat" course="B.tech" />
      <Props name="Ahmad" course="Engineering" />
      <p>Likes :{likes}</p>
      <button onClick={() => setlikes(likes + 1)}>Click to Like</button>
    </div>
  )
}

export default App