import { useEffect, useState } from 'react'
import getCrimeData from './api'
import './App.css'

function App() {

  const [popular, setPopular] = useState([])

  useEffect (() => {
    const fetchResult = async () => {
      const crimeResult = await getCrimeData();
      console.log(crimeResult);
    }
    fetchResult();
  }, [])

  return (
      <div>
        Hello world
      </div>
  )
}

export default App
