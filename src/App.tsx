// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Button } from "@/components/ui/button"
import './Login.css'
import '../app/globals.css'
import './App.css'
import Login from "./Login"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {/* <Button>Click me</Button> */}
        <Login ></Login>
      </div>
    </>
  )
}

export default App
