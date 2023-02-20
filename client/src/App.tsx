import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const envTest = import.meta.env.VITE_TEST
  return (
    <div className="App">
      {envTest}
    </div>
  )
}

export default App
